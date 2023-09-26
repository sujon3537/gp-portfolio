import React from "react";
import { BsCheck } from "react-icons/bs";
import Heading from "./Heading";

const Price = () => {
  return (
    <div>
      <Heading title="Freelance Rate" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-[#2D2D3A] h-fit flex flex-col items-center gap-y-6 p-7">
          <h5 className="font-semibold text-sm text-white">Consultation</h5>
          <span className="text-[32px] font-semibold text-primary">
            FREE<sup>*</sup>
          </span>
          <ul className="flex flex-col items-center gap-y-2">
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Identify needs
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Βuild development strategy
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Analyze bottlenecks
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Gather requirements
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Suggest optimal solution
            </li>
          </ul>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact now
          </a>
        </div>
        <div className="bg-[#2D2D3A] h-fit flex flex-col items-center gap-y-6 p-7">
          <h5 className="font-semibold text-sm text-white">Small Projects</h5>
          <span className="text-[#fafafc] text-[13px] font-extralight">
            &#8364;
            <span className="text-[32px] font-semibold text-primary mx-2">
              59
            </span>
            hour
          </span>
          <ul className="flex flex-col items-center gap-y-2">
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Web Development
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Custom Plugins
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Debugging
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              WordPress integration
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              SEO optimization
            </li>
          </ul>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact now
          </a>
        </div>
        <div className="bg-[#2D2D3A] h-fit flex flex-col items-center gap-y-6 p-7">
          <h5 className="font-semibold text-sm text-white">Long Term</h5>
          <span className="text-[32px] font-semibold text-primary">
            Contact
          </span>
          <ul className="flex flex-col items-center gap-y-2">
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Large Scale Projects
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Complete websites or eshops
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Ongoing Website Maintenance
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              Hosting & Tech Support
            </li>
            <li className="text-textColor text-center text-sm">
              <BsCheck className="text-primary text-lg inline-block mr-1" />
              WordPress optimization
            </li>
          </ul>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Price;
