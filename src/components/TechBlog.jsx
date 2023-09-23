import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PrevArrow, NextArrow } from "./Arrow";
import BlogCard from "./BlogCard";

const TechBlog = () => {
  let [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "7px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "18px",
                height: "4px",
                backgroundColor: "#30A8DE",
                borderRadius: "10px",
                transition: "width .5s",
              }
            : {
                width: "6px",
                height: "4px",
                backgroundColor: "#75757C",
                borderRadius: "10px",
                transition: "width .5s",
              }
        }
      ></div>
    ),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="mt-6 mb-14">
      <h2 className="text-[17px] font-semibold text-white mb-6">Tech Blog</h2>
      <Slider {...settings}>
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </Slider>
    </div>
  );
};

export default TechBlog;
