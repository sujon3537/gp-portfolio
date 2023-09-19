import React from "react";
import { AiFillStar } from "react-icons/ai";
import avatar1 from "../assets/images/testimony1.png";

const Testimony = () => {
  return (
    <div className="bg-[#2B2B36] mx-3 p-[30px] relative mt-[14px]">
      <div className="bg-primary w-16 h-16 rounded-full absolute top-[-14px] right-6">
        <img src={avatar1} alt="avatar1" />
      </div>
      <h5 className="text-sm font-semibold text-white">Sotiris Popadatos</h5>
      <span className="text-[12px] text-[#8c8c8e]">realdreamstate.com</span>
      <p className="text-[13px] text-textColor my-5">
        Working with George has been a pleasure. Better yet - I alerted him of a
        minor issue before going to sleep. The issue was fixed the next morning.
        I couldn't ask for better support!
      </p>
      <span className="text-primary text-[13px] bg-[#20202A] px-4 py-2 rounded-full max-w-max flex gap-x-1">
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
        <AiFillStar />
      </span>
    </div>
  );
};

export default Testimony;
