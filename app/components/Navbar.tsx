"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="overflow-hidden text-white">
      <div className="mx-auto flex">
        {/* Logo Section */}
        <div className="flex-shrink-0 bg-[#023f92] h-[115px] w-[50%] items-center rounded-br-[30px]">
          <h1 className="text-2xl font-bold pt-4 pl-4">
            <Logo />
          </h1>
          <div className="flex">
            <div className="bg-[#d8a339] w-[45%] mt-[20px] absolute hidden sm:flex h-[20px]"></div>
          </div>
        </div>
        <div className="bg-[#023f92] w-full h-[40px] items-center justify-center">
          <div className="pl-2 font-bold mt-7 flex items-center justify-start sm:justify-center lg:justify-center bg-[#d8a339] h-[40px] w-full ml-[60px] top-0 z-10">
            {/* Mobile Menu Button */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center text-white hover:text-gray-300 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden sm:flex space-x-6 justify-center items-center lg:space-x-20 pr-16">
              <Link
                href="/"
                className={`${
                  isActive("/") ? "underline font-bold" : "text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  isActive("/about") ? "underline font-bold" : "text-white"
                }`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${
                  isActive("/services") ? "underline font-bold" : "text-white"
                }`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`${
                  isActive("/contact") ? "underline font-bold" : "text-white"
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
          <motion.span
            className="text-red-500 font-extrabold flex items-end pt-4 justify-center lg:text-2xl md:text-2xl sm:text-xl"
            animate={{ scale: [1, 1.2, 1] }} // Grow to 1.2x, then shrink back
            transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }} // Infinite loop
          >
            <a href="tel:+84862301010">HOTLINE: 086 230 1010</a>
          </motion.span>
        </div>
      </div>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              href="/"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/") ? "underline font-bold" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/about") ? "underline font-bold" : ""
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/services") ? "underline font-bold" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className={`block text-white hover:bg-gray-700 bg-[#d8a339] rounded-md px-3 py-2 ${
                isActive("/contact") ? "underline font-bold" : ""
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

export default Navbar;
