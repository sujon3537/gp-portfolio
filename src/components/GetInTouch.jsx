import React, { useState } from "react";
import { BiSolidUser } from "react-icons/bi";
import { MdOutlineAlternateEmail, MdOutlineEmail } from "react-icons/md";
import Heading from "./Heading";

const GetInTouch = () => {
  let [isNameActive, setIsNameActive] = useState(false);
  let [isEmailActive, setIsEmailActive] = useState(false);
  let [isMessageActive, setIsMessageActive] = useState(false);
  return (
    <div className="my-6">
      <Heading title="Get in touch" />
      <div className="bg-[#2D2D3A] p-7">
        <form className="flex flex-col gap-y-7">
          <div className="flex">
            <span
              className={
                isNameActive
                  ? "bg-primary p-4 text-[#20202A] text-lg transition duration-700"
                  : "bg-[#20202A] p-4 text-textColor text-lg transition duration-700"
              }
            >
              <BiSolidUser />
            </span>
            <input
              type="text"
              placeholder="Name"
              onFocus={() => setIsNameActive(true)}
              onBlur={() => setIsNameActive(false)}
              className="w-full bg-[#242430] outline-none text-[13px] text-white p-4 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
            />
          </div>
          <div className="flex">
            <span
              className={
                isEmailActive
                  ? "bg-primary p-4 text-[#20202A] text-lg transition duration-700"
                  : "bg-[#20202A] p-4 text-textColor text-lg transition duration-700"
              }
            >
              <MdOutlineAlternateEmail />
            </span>
            <input
              type="email"
              placeholder="Email"
              onFocus={() => setIsEmailActive(true)}
              onBlur={() => setIsEmailActive(false)}
              className="w-full bg-[#242430] outline-none text-[13px] text-white p-4 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
            />
          </div>
          <div className="flex">
            <span
              className={
                isMessageActive
                  ? "bg-primary p-4 text-[#20202A] text-lg transition duration-700"
                  : "bg-[#20202A] p-4 text-textColor text-lg transition duration-700"
              }
            >
              <MdOutlineEmail />
            </span>
            <textarea
              placeholder="Message"
              onFocus={() => setIsMessageActive(true)}
              onBlur={() => setIsMessageActive(false)}
              className="w-full h-[150px] bg-[#242430] outline-none text-[13px] text-white p-4 placeholder:text-[#8c8c8e] placeholder:text-[13px]"
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
