import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimony from "./Testimony";
import { PrevArrow, NextArrow } from "./Arrow";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import Heading from "./Heading";

const Testimonial = () => {
  let [dotActive, setDotActive] = useState(0);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
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
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className="mt-5 md:-mx-3">
      <Heading title="Clients & Associates" />
      <Slider {...settings}>
        <div>
          <Testimony />
        </div>
        <div>
          <Testimony />
        </div>
        <div>
          <Testimony />
        </div>
        <div>
          <Testimony />
        </div>
        <div>
          <Testimony />
        </div>
        <div>
          <Testimony />
        </div>
      </Slider>
    </div>
  );
};

export default Testimonial;
