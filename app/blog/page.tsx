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
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const CORRECT_PASSWORD = process.env.NEXT_PUBLIC_BLOG_PASSWORD;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Attempting to fetch blogs from Firestore...");
        const querySnapshot = await getDocs(collection(db, "blogs"));
        console.log("Successfully fetched blogs:", querySnapshot.docs);
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    fetchBlogs();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPasswordError("");

    if (password !== CORRECT_PASSWORD) {
      setPasswordError("Incorrect password. Please try again.");
      return;
    }

    if (!title || !content) return;

    try {
      console.log("Attempting to add a new blog to Firestore...");
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        createdAt: new Date().toISOString(),
      });
      console.log("Blog added with ID:", docRef.id);
      setBlogs([
        ...blogs,
        { id: docRef.id, title, content, createdAt: new Date().toISOString() },
      ]);
      setTitle("");
      setContent("");
      setPassword("");
    } catch (error) {
      console.error("Error adding blog:", error);
    }
  };

  const handleDelete = async (blogId: string) => {
    if (!confirm("Are you sure you want to delete this blog post?")) return;
    setDeletingId(blogId);
    try {
      console.log(`Attempting to delete blog with ID: ${blogId}`);
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      console.log(`Successfully deleted blog with ID: ${blogId}`);
    } catch (error) {
      console.error("Error deleting blog:", error);
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#d8a339] text-center mt-8 mb-10">
        Helpful Information
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="title" className="block text-lg font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-lg font-medium">
            Content
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border rounded"
            rows={5}
            placeholder="Enter content"
          />
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
            placeholder="Enter password"
          />
          {passwordError && (
            <p className="text-red-500 mt-2">{passwordError}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>

      <h2 className="text-2xl font-semibold mb-4">All Blogs</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border p-4 rounded flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              <Link href={`/en/blog/${blog.id}`}>
                {" "}
                {/* Update the link to include /en */}
                <h3 className="text-xl font-medium text-blue-500 hover:underline truncate">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 truncate">
                {blog.content.slice(0, 100)}...
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
