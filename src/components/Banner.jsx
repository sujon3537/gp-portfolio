import React from "react";
import bannerBG from "../assets/images/bannerbg.jpg";
import bannerImg from "../assets/images/gp-top.png";

const Banner = () => {
  return (
    <div
      className="w-full h-[320px] bg-left bg-cover relative flex justify-center xl:justify-start items-center"
      style={{
        backgroundImage: `url(${bannerBG})`,
      }}
    >
      <div className="flex flex-col gap-y-5 xl:pl-10 text-center xl:text-start">
        <h3 className="text-white text-4xl font-extrabold z-10 max-w-md">
          Innovative tools to empower your business
        </h3>
        <p className="text-white z-10">
          <code>I build websites and eshops.</code>
        </p>
        <a
          href="#"
          className="text-[#1e1e28] font-semibold text-[12px] text-center  uppercase z-10 w-[160px] mx-auto xl:mx-0 py-3 bg-primary hover:-translate-y-[2px] duration-300 ease-in-out"
        >
          contact me
        </a>
      </div>
      <div className="w-[320px] h-auto z-10 hidden xl:block">
        <img src={bannerImg} alt="banner-img" className="w-full h-full" />
      </div>
      <div className="w-full h-full bg-gradient-to-r from-neutral-800/90 via-neutral-800/60 to-neutral-800/90 absolute top-0 left-0 right-0 bottom-0"></div>
    </div>
  );
};

export default Banner;
