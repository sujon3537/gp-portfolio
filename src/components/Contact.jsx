import React from "react";
import {
  FaGlobe,
  FaEnvelope,
  FaLinkedin,
  FaWordpress,
  FaGithub,
  FaStackOverflow,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="mt-6" id="contact">
      <h2 className="text-[17px] font-semibold text-white mb-6">
        Contact Information
      </h2>
      <div className="flex justify-between gap-x-6 text-textColor text-[13px]">
        <div className="bg-[#2C2C37] w-1/3 px-7 py-10">
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
        <div className="bg-[#2C2C37] w-1/3 px-7 py-10">
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
        <div className="bg-[#2C2C37] w-1/3 px-7 py-10">
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
