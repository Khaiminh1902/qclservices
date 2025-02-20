// components/FixedButton.tsx
import React from "react";

const FixedButton: React.FC = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 space-y-3">
      <a
        href="https://zalo.me/0905234773" // Replace with your Zalo ID
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-500 text-white py-2 rounded-full text-md flex justify-center items-center space-x-2 hover:bg-blue-700 transition"
      >
        <span>Chat Zalo</span>
      </a>
      <a
        href="tel:+84862301010" // Replace with your actual hotline number
        className="bg-green-500 text-white py-2 px-3 rounded-full text-md flex items-center space-x-2 hover:bg-green-700 transition"
      >
        <span>Hotline: 086 230 1010</span>
      </a>
    </div>
  );
};

export default FixedButton;
