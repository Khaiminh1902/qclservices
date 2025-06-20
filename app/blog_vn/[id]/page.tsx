"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { Blog } from "@/lib/types";
import { use } from "react";

export default function BlogDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const docRef = doc(db, "blogs_vn", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() } as Blog);
        } else {
          console.log("Không tìm thấy bài viết tiếng Việt!");
        }
      } catch (error) {
        console.error("Lỗi khi lấy bài viết tiếng Việt:", error);
        if (error instanceof Error) {
          alert(`Không thể lấy bài viết: ${error.message}`);
        } else {
          alert("Không thể lấy bài viết: Đã xảy ra lỗi không xác định");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4">Đang tải...</div>;
  }

  if (!blog) {
    return (
      <div className="container mx-auto p-4">Không tìm thấy bài viết.</div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-full object-cover mb-4 rounded mt-8"
        />
      )}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mt-6">{blog.title}</h1>
      </div>
      <p className="text-gray-800">{blog.content || "Không có nội dung..."}</p>
      <div className="mt-10">
        <a href="/vn/blog" className="text-blue-500 hover:underline">
          Quay lại
        </a>
      </div>
    </div>
  );
}
