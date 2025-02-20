import React from "react";
import { Dot } from "lucide-react";

const Contact = () => {
  return (
    <div className="mt-[20px] flex flex-col font-bold text-[28px] pl-10 text-[#d8a339]">
      <span>CONTACT</span>
      <span className="text-[15px] text-black font-normal pl-6 mt-2 flex">
        <Dot className="pb-[5px]" />
        <span>
          Phone:{" "}
          <a
            href="tel:+84862301010"
            className="text-red-500 font-semibold hover:underline"
          >
            086 230 1010
          </a>
        </span>
      </span>
      <span className="text-[15px] text-black font-normal pl-6 mt-2 flex">
        <Dot className="pb-[5px]" />
        <span>
          Email:{" "}
          <a
            href="mailto:+dichvu@qclservices.com"
            className="text-red-500 font-semibold hover:underline"
          >
            dichvu@qclservices.com
          </a>
        </span>
      </span>
      <span className="text-[15px] text-black font-normal pl-6 mt-2 flex">
        <Dot className="pb-[5px]" />
        <span>
          Website:{" "}
          <span className="font-semibold">https://qclservices.com</span>
        </span>
      </span>
    </div>
  );
};

export default Contact;
