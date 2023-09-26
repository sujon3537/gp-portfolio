import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

const RightNavbar = ({ handleRightBar, open }) => {
  return (
    <>
      {open ? (
        ""
      ) : (
        <GiHamburgerMenu
          className=" text-[#cbcbcf] lg:hidden mt-4"
          onClick={handleRightBar}
        />
      )}
      <div
        className={`bg-[#20202A] overflow-hidden ${
          open ? "w-[200px]" : "w-0 xl:w-[90px]"
        } transition-all duration-700`}
        style={{ height: "calc(100vh - 32px)" }}
      >
        <div
          className={
            open
              ? "bg-[#24242F] h-16 flex items-center"
              : "bg-[#24242F] h-16 flex items-center justify-center"
          }
        >
          {open ? (
            <IoClose
              className="font-bold text-2xl text-[#cbcbcf] ml-5"
              onClick={handleRightBar}
            />
          ) : (
            <GiHamburgerMenu
              className="text-[#cbcbcf]"
              onClick={handleRightBar}
            />
          )}
        </div>
        <div>
          <h3
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase rotate-90 opacity-0 transition mt-24"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase rotate-90 opacity-100 transition mt-14"
            }
          >
            Home
          </h3>
          <ul className="mx-5">
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              Home
            </li>
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              <Link
                activeClass="text-[#fcfcfa]"
                to="blog"
                spy={true}
                smooth={true}
                offset={-20}
                duration={500}
                onClick={handleRightBar}
              >
                Blog
              </Link>
            </li>
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              <Link
                activeClass="text-[#fcfcfa]"
                to="plugins"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleRightBar}
              >
                Plugins
              </Link>
            </li>
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              <Link
                activeClass="text-[#fcfcfa]"
                to="clients"
                spy={true}
                smooth={true}
                offset={-7}
                duration={500}
                onClick={handleRightBar}
              >
                Clients
              </Link>
            </li>
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              <Link
                activeClass="text-[#fcfcfa]"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleRightBar}
              >
                Contact
              </Link>
            </li>
            <li
              className={
                open
                  ? "font-medium text-[13px] tracking-widest text-textColor hover:text-[#fcfcfa] uppercase transition duration-700 mb-2 cursor-pointer"
                  : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
              }
            >
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RightNavbar;
