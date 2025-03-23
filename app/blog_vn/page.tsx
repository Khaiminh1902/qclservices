"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Link from "next/link";
import { Blog } from "@/lib/types";

export default function BlogPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const CORRECT_PASSWORD = process.env.BLOG_PASSWORD || "19022011Qlbb";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Đang cố gắng lấy bài viết tiếng Việt từ Firestore...");
        const querySnapshot = await getDocs(collection(db, "blogs_vn"));
        console.log(
          "Lấy bài viết tiếng Việt thành công:",
          querySnapshot.docs.length,
          "documents"
        );
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết tiếng Việt:", error);
        if (error instanceof Error) {
          alert(`Không thể lấy bài viết: ${error.message}`);
        } else {
          alert("Không thể lấy bài viết: Đã xảy ra lỗi không xác định");
        }
      }
    };
    fetchBlogs();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Vui lòng tải lên tệp hình ảnh (ví dụ: JPG, PNG).");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Kích thước hình ảnh phải nhỏ hơn 5MB.");
        return;
      }
      setImage(file);
      console.log("Đã chọn hình ảnh:", file.name, `(${file.size} bytes)`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setIsSubmitting(true);

    if (password !== CORRECT_PASSWORD) {
      setPasswordError("Mật khẩu không đúng. Vui lòng thử lại.");
      setIsSubmitting(false);
      return;
    }

    if (!title || !content) {
      alert("Vui lòng nhập cả tiêu đề và nội dung.");
      setIsSubmitting(false);
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        console.log("Đang tải hình ảnh lên ImgBB...");
        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Tải hình ảnh thất bại:", errorData);
          throw new Error(
            `API error: ${response.status} ${
              errorData.error || response.statusText
            }`
          );
        }

        const data = await response.json();
        if (data.imageUrl) {
          imageUrl = data.imageUrl;
          console.log("Tải hình ảnh thành công, URL:", imageUrl);
        } else {
          console.error("Phản hồi tải hình ảnh thiếu imageUrl:", data);
          throw new Error(
            "Failed to upload image: " + (data.error || "Unknown error")
          );
        }
      } else {
        console.log("Không có hình ảnh được chọn để tải lên");
      }

      console.log("Đang cố gắng thêm bài viết tiếng Việt mới vào Firestore...");
      const docRef = await addDoc(collection(db, "blogs_vn"), {
        title,
        content,
        imageUrl,
        createdAt: new Date().toISOString(),
      });
      console.log("Bài viết tiếng Việt đã được thêm với ID:", docRef.id);
      setBlogs([
        ...blogs,
        {
          id: docRef.id,
          title,
          content,
          imageUrl,
          createdAt: new Date().toISOString(),
        },
      ]);
      setTitle("");
      setContent("");
      setImage(null);
      setPassword("");
    } catch (error) {
      console.error("Lỗi khi thêm bài viết tiếng Việt:", error);
      if (error instanceof Error) {
        alert(`Không thể thêm bài viết: ${error.message}`);
      } else {
        alert("Không thể thêm bài viết: Đã xảy ra lỗi không xác định");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (blogId: string) => {
    if (!confirm("Bạn có chắc chắn muốn xóa bài viết này không?")) return;
    setDeletingId(blogId);
    try {
      console.log(`Đang cố gắng xóa bài viết tiếng Việt với ID: ${blogId}`);
      await deleteDoc(doc(db, "blogs_vn", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      console.log(`Xóa bài viết tiếng Việt thành công với ID: ${blogId}`);
    } catch (error) {
      console.error("Lỗi khi xóa bài viết tiếng Việt:", error);
      if (error instanceof Error) {
        alert(`Không thể xóa bài viết: ${error.message}`);
      } else {
        alert("Không thể xóa bài viết: Đã xảy ra lỗi không xác định");
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#d8a339] text-center mt-8 mb-6">
        Trang Blog
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium">
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Nhập tiêu đề bài viết"
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium">
            Nội dung bài viết
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={5}
            placeholder="Nhập nội dung bài viết"
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium">
            Hình ảnh bài viết
          </label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-2 border rounded"
            disabled={isSubmitting}
          />
          {image && (
            <img
              src={URL.createObjectURL(image)}
              alt="Preview"
              className="w-full h-48 object-cover mt-2 rounded"
            />
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-lg font-medium">
            Mật khẩu
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Nhập mật khẩu để thêm bài viết"
            disabled={isSubmitting}
          />
          {passwordError && (
            <p className="text-red-500 mt-2">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Đang thêm bài viết..." : "Thêm bài viết"}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">Tất cả bài viết</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border p-4 rounded flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              <Link href={`/vn/blog/${blog.id}`}>
                <h3 className="text-xl font-medium text-blue-500 hover:underline truncate">
                  {blog.title}
                </h3>
              </Link>
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-48 object-cover mt-2 rounded"
                />
              )}
              <p className="text-gray-600 truncate">
                {blog.content
                  ? blog.content.slice(0, 100)
                  : "Không có nội dung..."}
                ...
              </p>
            </div>
            <button
              onClick={() => handleDelete(blog.id)}
              className={`px-3 py-1 rounded text-white ${
                deletingId === blog.id
                  ? "bg-red-300 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
              disabled={deletingId === blog.id}
            >
              {deletingId === blog.id ? "Đang xóa..." : "Xóa"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
