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
        console.log("Attempting to fetch English blog posts from Firestore...");
        const querySnapshot = await getDocs(collection(db, "blogs"));
        console.log(
          "Successfully fetched English blog posts:",
          querySnapshot.docs.length,
          "documents"
        );
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching English blog posts:", error);
        if (error instanceof Error) {
          alert(`Unable to fetch blog posts: ${error.message}`);
        } else {
          alert("Unable to fetch blog posts: An unknown error occurred");
        }
      }
    };
    fetchBlogs();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (!file.type.startsWith("image/")) {
        alert("Please upload an image file (e.g., JPG, PNG).");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("Image size must be less than 5MB.");
        return;
      }
      setImage(file);
      console.log("Image selected:", file.name, `(${file.size} bytes)`);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");
    setIsSubmitting(true);

    if (password !== CORRECT_PASSWORD) {
      setPasswordError("Incorrect password. Please try again.");
      setIsSubmitting(false);
      return;
    }

    if (!title || !content) {
      alert("Please enter both a title and content.");
      setIsSubmitting(false);
      return;
    }

    try {
      let imageUrl = "";
      if (image) {
        const formData = new FormData();
        formData.append("image", image);
        console.log("Uploading image to ImgBB...");
        const response = await fetch("/api/upload-image", {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Image upload failed:", errorData);
          throw new Error(
            `API error: ${response.status} ${
              errorData.error || response.statusText
            }`
          );
        }

        const data = await response.json();
        if (data.imageUrl) {
          imageUrl = data.imageUrl;
          console.log("Image uploaded successfully, URL:", imageUrl);
        } else {
          console.error("Image upload response missing imageUrl:", data);
          throw new Error(
            "Failed to upload image: " + (data.error || "Unknown error")
          );
        }
      } else {
        console.log("No image selected for upload");
      }

      console.log("Attempting to add a new English blog post to Firestore...");
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        imageUrl,
        createdAt: new Date().toISOString(),
      });
      console.log("English blog post added with ID:", docRef.id);
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
      console.error("Error adding English blog post:", error);
      if (error instanceof Error) {
        alert(`Unable to add blog post: ${error.message}`);
      } else {
        alert("Unable to add blog post: An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    setDeletingId(blogId);
    try {
      console.log(`Attempting to delete English blog post with ID: ${blogId}`);
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      console.log(`Successfully deleted English blog post with ID: ${blogId}`);
    } catch (error) {
      console.error("Error deleting English blog post:", error);
      if (error instanceof Error) {
        alert(`Unable to delete blog post: ${error.message}`);
      } else {
        alert("Unable to delete blog post: An unknown error occurred");
      }
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#d8a339] text-center mt-8 mb-6">
        Blog Page
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium">
            Blog Post Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter blog post title"
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium">
            Blog Post Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={5}
            placeholder="Enter blog post content"
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium">
            Blog Post Image
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
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter password to add blog post"
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
          {isSubmitting ? "Adding blog post..." : "Add Blog Post"}
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">All Blog Posts</h2>
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
                {blog.content ? blog.content.slice(0, 100) : "No content..."}
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
              {deletingId === blog.id ? "Deleting..." : "Delete"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
