import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const RightNavbar = ({ handleRightBar, open }) => {
  return (
    <div
      className={
        open
          ? "bg-[#20202A] w-[200px] h-screen transition-all duration-700"
          : "bg-[#20202A] w-[90px] h-screen transition-all duration-700"
      }
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
      <div className="">
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
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Home
          </li>
          <li
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Blog
          </li>
          <li
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Clients
          </li>
          <li
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Clients
          </li>
          <li
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Contact
          </li>
          <li
            className={
              open
                ? "font-medium text-[13px] tracking-widest text-textColor uppercase transition duration-700 mb-2"
                : "font-medium text-[13px] tracking-widest text-textColor uppercase translate-x-[230px] transition duration-700"
            }
          >
            Privacy Policy
          </li>
          {/* <li className="font-medium text-[13px] tracking-widest text-textColor uppercase">
            Blog
          </li>
          <li className="font-medium text-[13px] tracking-widest text-textColor uppercase">
            Clients
          </li>
          <li className="font-medium text-[13px] tracking-widest text-textColor uppercase">
            Clients
          </li>
          <li className="font-medium text-[13px] tracking-widest text-textColor uppercase">
            Contact
          </li>
          <li className="font-medium text-[13px] tracking-widest text-textColor uppercase">
            Privacy Policy
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default RightNavbar;
