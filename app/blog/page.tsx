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
  // New states for deletion password
  const [deletePassword, setDeletePassword] = useState("");
  const [deletePasswordError, setDeletePasswordError] = useState("");
  const [showDeletePrompt, setShowDeletePrompt] = useState<string | null>(null);

  const CORRECT_PASSWORD = process.env.BLOG_PASSWORD || "19022011Qlbb";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        console.log("Attempting to fetch posts...");
        const querySnapshot = await getDocs(collection(db, "blogs"));
        console.log(
          "Successfully fetched posts:",
          querySnapshot.docs.length,
          "documents"
        );
        const blogData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Blog[];
        setBlogs(blogData);
      } catch (error) {
        console.error("Error fetching posts:", error);
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

      console.log("Attempting to add a new post...");
      const docRef = await addDoc(collection(db, "blogs"), {
        title,
        content,
        imageUrl,
        createdAt: new Date().toISOString(),
      });
      console.log("Post added with ID:", docRef.id);
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
      console.error("Error adding post:", error);
      if (error instanceof Error) {
        alert(`Unable to add post: ${error.message}`);
      } else {
        alert("Unable to add post: An unknown error occurred");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const initiateDelete = (blogId: string) => {
    setShowDeletePrompt(blogId);
    setDeletePassword("");
    setDeletePasswordError("");
  };

  const handleDelete = async (blogId: string) => {
    if (deletePassword !== CORRECT_PASSWORD) {
      setDeletePasswordError("Incorrect password. Please try again.");
      return;
    }

    setDeletingId(blogId);
    try {
      console.log(`Attempting to delete post with ID: ${blogId}`);
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      console.log(`Successfully deleted post with ID: ${blogId}`);
      setShowDeletePrompt(null); // Close the prompt
    } catch (error) {
      console.error("Error deleting post:", error);
      if (error instanceof Error) {
        alert(`Unable to delete post: ${error.message}`);
      } else {
        alert("Unable to delete post: An unknown error occurred");
      }
    } finally {
      setDeletingId(null);
    }
  };

  const cancelDelete = () => {
    setShowDeletePrompt(null);
    setDeletePassword("");
    setDeletePasswordError("");
  };

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-[#d8a339] text-center mt-8 mb-6">
        Helpful Information
      </h1>

      <h2 className="text-2xl font-semibold mb-8">All Posts</h2>
      <ul className="space-y-4">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border p-4 rounded flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4"
          >
            <div className="flex-1 min-w-0">
              {blog.imageUrl && (
                <img
                  src={blog.imageUrl}
                  alt={blog.title}
                  className="w-full h-full object-cover mt-2 rounded"
                />
              )}
              <Link href={`/en/blog/${blog.id}`}>
                <h3 className="text-2xl font-medium text-blue-500 hover:underline truncate mb-2 mt-6">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-gray-600 truncate text-sm">
                {blog.content ? blog.content.slice(0, 100) : "No content..."}
                ...
              </p>
            </div>
            <div className="relative">
              <button
                onClick={() => initiateDelete(blog.id)}
                className={`px-3 py-1 rounded text-white ${
                  deletingId === blog.id
                    ? "bg-red-300 cursor-not-allowed"
                    : "bg-red-500 hover:bg-red-600"
                }`}
                disabled={deletingId === blog.id}
              >
                {deletingId === blog.id ? "Deleting..." : "Delete"}
              </button>
              {showDeletePrompt === blog.id && (
                <div className="absolute top-0 right-0 mt-10 bg-white border rounded p-4 shadow-lg z-10">
                  <label
                    htmlFor={`delete-password-${blog.id}`}
                    className="block text-sm font-medium"
                  >
                    Enter Password to Delete
                  </label>
                  <input
                    type="password"
                    id={`delete-password-${blog.id}`}
                    value={deletePassword}
                    onChange={(e) => setDeletePassword(e.target.value)}
                    className="w-full p-2 border rounded mt-2"
                    placeholder="Enter password"
                  />
                  {deletePasswordError && (
                    <p className="text-red-500 mt-2 text-sm">
                      {deletePasswordError}
                    </p>
                  )}
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={cancelDelete}
                      className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-32">
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
            placeholder="Enter the title"
            disabled={isSubmitting}
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
            placeholder="Enter the content"
            disabled={isSubmitting}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-lg font-medium">
            Image
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
              className="w-full h-full mt-2 rounded"
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
            placeholder="Enter password"
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
          {isSubmitting ? "Adding post..." : "Add Post"}
        </button>
      </form>
    </div>
  );
}
