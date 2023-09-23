import React from "react";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineAlternateEmail, MdOutlineEmail } from "react-icons/md";

const GetInTouch = () => {
  return (
    <div className="my-6">
      <h2 className="text-[17px] font-semibold text-white mb-6">
        Get in touch
      </h2>
      <div className="bg-[#2D2D3A] p-7">
        <form className="flex flex-col gap-y-7">
          <div className="flex">
            <span className="bg-[#20202A] p-3 text-textColor text-lg">
              <BiSolidUser />
            </span>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-[#242430] outline-none text-[13px] text-white p-3 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
            />
          </div>
          <div className="flex">
            <span className="bg-[#20202A] p-3 text-textColor text-lg">
              <MdOutlineAlternateEmail />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-[#242430] outline-none text-[13px] text-white p-3 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
            />
          </div>
          <div className="flex">
            <span className="bg-[#20202A] p-3 text-textColor text-lg">
              <MdOutlineEmail />
            </span>
            <textarea
              placeholder="Message"
              className="w-full h-[150px] bg-[#242430] outline-none text-[13px] text-white p-3 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
            ></textarea>
          </div>
          <a
            href="#"
            className="text-[#1e1e28] font-semibold text-[12px] text-center uppercase z-10 w-[160px] py-3 bg-primary hover:-translate-y-[2px] duration-300 ease-in-out"
          >
            Send Message
          </a>
        </form>
      </div>
    </div>
  );
};

export default GetInTouch;
