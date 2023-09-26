import React from "react";
import {
  FaGlobe,
  FaEnvelope,
  FaLinkedin,
  FaWordpress,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";
import Heading from "./Heading";

const Contact = () => {
  return (
    <div className="mt-6" id="contact">
      <Heading title="Contact Information" />
      <div className="flex justify-between flex-wrap gap-6 text-textColor text-[13px]">
        <div className="bg-[#2C2C37] w-full md:w-[48%] lg:w-[31%] px-7 py-10">
          <ul className="flex flex-col gap-y-2">
            <li className="flex justify-between">
              <FaGlobe className="inline-block" />
              English/Greek
            </li>
            <li className="flex justify-between">
              <FaEnvelope className="inline-block" />
              <a href="#" className="hover:text-white">
                info@gp-web.dev
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[#2C2C37] w-full md:w-[48%] lg:w-[31%] px-7 py-10">
          <ul className="flex flex-col gap-y-2">
            <li className="flex justify-between">
              <FaLinkedin className="inline-block" />
              <a href="#" className="hover:text-white">
                Linkedin
              </a>
            </li>
            <li className="flex justify-between">
              <FaWordpress className="inline-block" />
              <a href="#" className="hover:text-white">
                WordPress
              </a>
            </li>
          </ul>
        </div>
        <div className="bg-[#2C2C37] w-full md:w-[48%] lg:w-[31%] px-7 py-10">
          <ul className="flex flex-col gap-y-2">
            <li className="flex justify-between">
              <FaGithub className="inline-block" />
              <a href="#" className="hover:text-white">
                GitHub
              </a>
            </li>
            <li className="flex justify-between">
              <FaStackOverflow className="inline-block" />
              <a href="#" className="hover:text-white">
                Stack Overflow
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
