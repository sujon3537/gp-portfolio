import React from "react";
import blog1 from "../assets/images/WordPress-development.jpg";

const BlogCard = () => {
  return (
    <div className="max-w-full h-fit mx-3">
      <div className="w-full h-[165px]">
        <img src={blog1} alt="img1" className="w-full h-full" />
      </div>
      <div className="bg-[#2d2d39] p-7">
        <span className="bg-[#20202a] inline-block px-4 py-3 mb-3 text-[#cbcbcf] text-xs rounded-2xl">
          <a href="#">January 25, 2022</a>
          <br />
          <span className="mt-1 inline-block">/ Web Dev</span>
        </span>
        <h3 className="text-sm font-semibold text-white mb-4">
          Wordpress and Conponents
        </h3>
        <p className="text-[13px] text-textColor">
          WordPress has entered an era of modernization which provides a great
          opportunity to rethink how we build WordPress sites to make the most
          out of newer tools and technologies.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
