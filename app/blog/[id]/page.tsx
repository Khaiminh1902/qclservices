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
        const docRef = doc(db, "blogs", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlog({ id: docSnap.id, ...docSnap.data() } as Blog);
        } else {
          console.log("No such English blog!");
        }
      } catch (error) {
        console.error("Error fetching English blog:", error);
        if (error instanceof Error) {
          alert(`Failed to fetch blog: ${error.message}`);
        } else {
          alert("Failed to fetch blog: An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return <div className="container mx-auto p-4">Loading...</div>;
  }

  if (!blog) {
    return <div className="container mx-auto p-4">Blog not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold mt-8">{blog.title}</h1>
      </div>
      {blog.imageUrl && (
        <img
          src={blog.imageUrl}
          alt={blog.title}
          className="w-full h-64 object-cover mb-4 rounded"
        />
      )}
      <p className="text-gray-800">{blog.content || "No content..."}</p>
      <div className="mt-4">
        <a href="/en/blog" className="text-blue-500 hover:underline">
          Back to Blogs
        </a>
      </div>
    </div>
  );
}
