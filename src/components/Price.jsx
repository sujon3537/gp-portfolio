import React from "react";
import { BsCheck } from "react-icons/bs";

const Price = () => {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-white mb-6">
        Freelance Rate
      </h2>
      <div className="flex justify-between">
        <div className="bg-[#2D2D3A] w-[250px] h-[500px]">
          <h5 className="font-sm font-semibold text-white">Consultation</h5>
          <span className="text-[32px] font-semibold text-primary">
            FREE<sup>*</sup>
          </span>
          <ul>
            <li>
              <BsCheck />
              Identify needs
            </li>
            <li>
              <BsCheck />
              Βuild development strategy
            </li>
            <li>
              <BsCheck />
              Analyze bottlenecks
            </li>
            <li>
              <BsCheck />
              Gather requirements
            </li>
            <li>
              <BsCheck />
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
        <div className="bg-[#2D2D3A] w-[250px] h-[500px]"></div>
        <div className="bg-[#2D2D3A] w-[250px] h-[500px]"></div>
      </div>
    </div>
  );
};

export default Price;
