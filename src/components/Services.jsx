import React from "react";
import { FaLaptopCode } from "react-icons/fa";

const Services = () => {
  return (
    <div>
      <h2 className="text-[17px] font-semibold text-white mb-6">Services</h2>
      <div className="flex flex-wrap gap-6">
        <div
          className="max-w-[275px] bg-[#2C2C36] p-6"
          style={{ maxHeight: "auto" }}
        >
          <FaLaptopCode className="text-primary text-2xl inline mr-2" />
          <h4 className="text-sm font-semibold text-white inline-block">
            Web Development
          </h4>
          <p className="text-[13px] text-textColor my-3">
            Your online presence should be taken very seriously. If you are in
            need of a website or a personal blog then hire an experienced
            developer.
          </p>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact{" "}
          </a>
        </div>
        <div
          className="max-w-[275px] bg-[#2C2C36] p-6"
          style={{ maxHeight: "auto" }}
        >
          <FaLaptopCode className="text-primary text-2xl inline mr-2" />
          <h3 className="text-sm font-semibold text-white inline-block">
            WordPress customization
          </h3>
          <p className="text-[13px] text-textColor my-3">
            If you are need of a complete standalone WordPress plugin or a
            custom WordPress theme then you are at the right place.
          </p>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact{" "}
          </a>
        </div>
        <div
          className="max-w-[275px] bg-[#2C2C36] p-6"
          style={{ maxHeight: "auto" }}
        >
          <FaLaptopCode className="text-primary text-2xl inline mr-2" />
          <h3 className="text-sm font-semibold text-white inline-block">
            eCommerce solutions
          </h3>
          <p className="text-[13px] text-textColor my-3">
            Attract more online traffic and sales with a custom eshop solution
            based on WooCommerce, the most trusted online shopping platform.
          </p>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact{" "}
          </a>
        </div>
        <div
          className="max-w-[275px] bg-[#2C2C36] p-6"
          style={{ maxHeight: "auto" }}
        >
          <FaLaptopCode className="text-primary text-2xl inline mr-2" />
          <h3 className="text-sm font-semibold text-white inline-block">
            Web Development
          </h3>
          <p className="text-[13px] text-textColor my-3">
            Let's focus on improving your conversion rates while increasing your
            customer engagement through a better user experience.
          </p>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact{" "}
          </a>
        </div>
        <div
          className="max-w-[275px] bg-[#2C2C36] p-6"
          style={{ maxHeight: "auto" }}
        >
          <FaLaptopCode className="text-primary text-2xl inline mr-2" />
          <h3 className="text-sm font-semibold text-white inline-block">
            Web Development
          </h3>
          <p className="text-[13px] text-textColor my-3">
            From on-page SEO to technical SEO, I can analyze and implement a
            variety of optimization tactics designed to increase your organic
            search traffic.
          </p>
          <a
            href="#"
            className="text-primary text-[12px] font-semibold uppercase hover:drop-shadow-[0_0_3px_rgba(250,250,252,0.4)]"
          >
            contact{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
