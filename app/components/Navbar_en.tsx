// components/Navbar_en.tsx
"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import en from "../images/us_flag.png";
import vn from "../images/vn_flag.png";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar_en = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="overflow-hidden text-white">
      <div className="mx-auto flex">
        <div className="flex-shrink-0 bg-[#023f92] h-[115px] w-[50%] items-center rounded-br-[30px]">
          <h1 className="text-2xl font-bold pt-4 pl-4">
            <Logo />
          </h1>
          <div className="flex">
            <div className="bg-[#d8a339] w-[45%] mt-[20px] absolute hidden sm:flex h-[20px]"></div>
          </div>
        </div>
        <div className="bg-[#023f92] w-full h-[40px] items-center justify-center">
          <div className="justify-end flex gap-2 items-center pr-2 pb-1 pt-1">
            <Link href="/en" className="border border-white flex">
              <button>
                <Image src={en} alt="English" width={27} height={25} />
              </button>
            </Link>
            <Link href="/vn" className="border border-white flex">
              <button>
                <Image src={vn} alt="Vietnamese" width={23.39} height={25} />
              </button>
            </Link>
          </div>
          <div className="mt-0 pl-2 font-bold flex items-center justify-start sm:justify-center lg:justify-center bg-[#d8a339] h-[40px] w-full ml-[60px] top-0 z-10">
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white hover:text-gray-300 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            <div className="hidden sm:flex space-x-6 justify-center items-center lg:space-x-20 pr-16">
              <Link
                href="/en"
                className={`${
                  isActive("/en") ? "underline font-bold" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/en/about"
                className={`${
                  isActive("/en/about") ? "underline font-bold" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                suppressHydrationWarning
                href="/en/services"
                className={`${
                  isActive("/en/services")
                    ? "underline font-bold"
                    : "text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/en/blog"
                className={`${
                  isActive("/en/blog") ? "underline font-bold" : "text-white"
                }`}
              >
                Blog
              </Link>
              <Link
                href="/en/contact"
                className={`${
                  isActive("/en/contact") ? "underline font-bold" : "text-white"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <motion.span
              className="text-red-500 font-extrabold flex items-end pt-4 justify-center lg:text-2xl md:text-2xl sm:text-xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <a href="tel:+84862301010">HOTLINE: 086 230 1010</a>
            </motion.span>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="/en"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/en") ? "underline font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/en/about"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/en/about") ? "underline font-bold" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/en/services"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/en/services") ? "underline font-bold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/en/blog"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/en/blog") ? "underline font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="/en/contact"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/en/contact") ? "underline font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar_en;
