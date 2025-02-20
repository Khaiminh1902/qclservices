import { Dot, Facebook, Twitter, Instagram } from "lucide-react";
import React from "react";
import { Copyright } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className=" mx-auto px-4 bg-[#023f92] text-white py-8  mt-[90px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul>
              <li className="mb-2">
                <Dot className="inline" /> Phone:{" "}
                <a
                  href="tel:+84862301010"
                  className="text-red-500 font-semibold hover:underline"
                >
                  086 230 1010
                </a>
              </li>
              <li className="mb-2">
                <Dot className="inline" /> Email:{" "}
                <a
                  href="mailto:dichvu@qclservices.com"
                  className="text-red-500 font-semibold hover:underline"
                >
                  dichvu@qclservices.com
                </a>
              </li>
              <li className="mb-2">
                <Dot className="inline" /> Website:{" "}
                <a className="text-red-500 font-semibold hover:underline">
                  qclservices.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Address</h3>
            <span className="m-2">
              <Dot className="inline" /> Head Office: 237/60/17, Pham Van Chieu
              Street, Ward 14, Go Vap District, Ho Chi Minh City
            </span>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">
              Follow Us (This function is currently not available)
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border p-[7px] rounded-full flex items-center justify-center text-blue-500 hover:text-blue-600"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border p-[7px] rounded-full flex items-center justify-center text-blue-400 hover:text-blue-500"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="border p-[7px] rounded-full flex items-center justify-center text-pink-500 hover:text-pink-600"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0058ef] text-white flex justify-center items-center text-[10px] md:text-sm lg:text-sm p-2">
        Copyright 2025
        <Copyright className="h-[16px]" />
        QCL Maintenance Services Co., Ltd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
