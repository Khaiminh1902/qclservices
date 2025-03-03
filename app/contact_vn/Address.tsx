import React from "react";
import { Dot } from "lucide-react";

const Address = () => {
  return (
    <div className="mt-[20px] flex flex-col font-bold text-[28px] pl-10 text-[#d8a339]">
      <span>ĐỊA CHỈ</span>
      <span className="text-[15px] text-black font-normal pl-6 pr-10 mt-2 flex">
        <Dot className="pb-[5px]" />
        Văn Phòng Chính: 237/60/17, đường Phạm Văn Chiêu, Phường 14, Quận Gò
        Vấp, Thành Phố Hồ Chí Minh
      </span>
    </div>
  );
};

export default Address;
