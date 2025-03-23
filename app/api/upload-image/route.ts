import { NextResponse } from "next/server";
import fetch from "node-fetch";

// Define the expected shape of the ImgBB API response
interface ImgBBResponse {
  success: boolean;
  data?: {
    url: string;
  };
  error?: {
    message: string;
    code?: number;
  };
}

// Utility function to fetch with timeout and retries
async function fetchWithRetry(url: string, options: any, retries: number = 3, timeout: number = 10000) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeout);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(`Retrying fetch (${i + 1}/${retries})...`);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
  throw new Error("Max retries reached");
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const image = formData.get("image");

    if (!image) {
      console.error("No image provided in the request");
      return NextResponse.json({ error: "No image provided" }, { status: 400 });
    }

    if (!process.env.IMGBB_API_KEY) {
      console.error("ImgBB API key is not set in environment variables");
      return NextResponse.json({ error: "Server configuration error: ImgBB API key missing" }, { status: 500 });
    }

    const imgBBFormData = new FormData();
    imgBBFormData.append("image", image);
    imgBBFormData.append("key", process.env.IMGBB_API_KEY);

    console.log("Sending request to ImgBB API...");
    const response = await fetchWithRetry(
      "https://api.imgbb.com/1/upload",
      {
        method: "POST",
        body: imgBBFormData,
      },
      3,
      15000
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`ImgBB API error: ${response.status} ${response.statusText}`, errorText);
      throw new Error(`ImgBB API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json() as ImgBBResponse;
    if (data.success && data.data?.url) {
      console.log("Image uploaded to ImgBB successfully:", data.data.url);
      return NextResponse.json({ imageUrl: data.data.url });
    } else {
      const errorMessage = data.error?.message || "Unknown error";
      const errorCode = data.error?.code || "N/A";
      console.error(`ImgBB API response indicated failure: Code ${errorCode}, Message: ${errorMessage}`, data);
      throw new Error(`Failed to upload image to ImgBB: ${errorMessage} (Code: ${errorCode})`);
    }
  } catch (error) {
    console.error("Error uploading image to ImgBB:", error);
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}