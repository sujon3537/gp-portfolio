import React, { useState, useEffect } from "react";
import profileImg from "../assets/images/sidebar img.jpg";
import ProgressCircle from "./ProgressCircle";
import ProgressBar from "./ProgressBar";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { BiEnvelope, BiLogoStackOverflow } from "react-icons/bi";
import { FiExternalLink } from "react-icons/fi";
import { RiWordpressFill } from "react-icons/ri";

const LeftSideBar = () => {
  let [frontend, setFrontend] = useState(0);
  let [backend, setBackend] = useState(0);
  let [sysadmin, setSysadmin] = useState(0);
  let [wordpress, setWordpress] = useState(0);
  let [html, setHtml] = useState(0);
  let [js, setJs] = useState(0);
  let [php, setPhp] = useState(0);
  let [react, setReact] = useState(0);
  let [python, setPython] = useState(0);
  useEffect(() => {
    setFrontend(94);
    setBackend(86);
    setSysadmin(78);
    setWordpress(98);
    setHtml(97);
    setJs(94);
    setPhp(93);
    setReact(84);
    setPython(82);
  }, []);
  return (
    <div
      className="w-[290px] relative"
      style={{ height: "calc(100vh - 32px)" }}
    >
      <div className="bg-[#252531] text-center px-8 py-7">
        <div className="w-[90px] h-[90px] rounded-full mx-auto">
          <img
            src={profileImg}
            alt="avatar-img"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <h5 className="text-white text-sm font-semibold my-3">
          George Pattichis
        </h5>
        <p className="text-textColor text-[13px]">Full-Stack Developer</p>
        <p className="text-textColor text-[13px] pt-1">Web Engineer</p>
      </div>
      <div className="h-[330px] overflow-y-scroll no-scrollbar bg-[#20202A] px-7 divide-y divide-[#8c8c8e]/[0.3] flex flex-col">
        <ul className="flex flex-col gap-y-3 my-4">
          <li className="flex justify-between">
            <span className="text-white text-[13px]">Residence:</span>
            <span className="text-textColor text-[13px]">Cyprus</span>
          </li>
          <li className="flex justify-between">
            <span className="text-white text-[13px]">Studied in:</span>
            <span className="text-textColor text-[13px]">Greece</span>
          </li>
          <li className="flex justify-between">
            <span className="text-white text-[13px]">Experience:</span>
            <span className="text-textColor text-[13px]">+15 years</span>
          </li>
        </ul>
        <div className="flex justify-around py-5">
          <ProgressCircle value={frontend} title="Frontend" />
          <ProgressCircle value={backend} title="Backend" />
          <ProgressCircle value={sysadmin} title="Sysadmin" />
        </div>
        <div>
          <ProgressBar value={wordpress} title="Wordpress / Woocommerce" />
          <ProgressBar value={html} title="HTML / CSS" />
          <ProgressBar value={js} title="JS / jQuery" />
          <ProgressBar value={php} title="PHP / MySQL" />
          <ProgressBar value={react} title="React.js" />
          <ProgressBar value={python} title="Python" />
        </div>
        <ul className="flex flex-col gap-y-2 py-5">
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            Bootstrap, Bulma, Tailwind
          </li>
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            Stylus, Sass, Less
          </li>
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            Gulp, Webpack, Grunt
          </li>
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            GIT / SVN knowledge
          </li>
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            SCRUM certified PSM1
          </li>
          <li className="text-[13px] text-textColor">
            <BsCheck className="inline-block text-primary text-lg mr-2" />
            SEO / Core Web Vitals
          </li>
        </ul>
        <div className="flex flex-col gap-2 py-5">
          <a href="#" className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-textColor hover:text-white uppercase">
              detailed cv
            </span>
            <FiExternalLink className="text-[12px] text-textColor" />
          </a>

          <a href="#" className="flex items-center gap-2">
            <span className="text-[13px] font-semibold text-textColor hover:text-white uppercase">
              contact
            </span>
            <BiEnvelope className="text-[12px] text-textColor" />
          </a>
        </div>
      </div>
      <div className="w-full bg-[#252531] flex justify-center gap-3 py-3 absolute bottom-0">
        <AiFillLinkedin className="text-2xl text-textColor" />
        <RiWordpressFill className="text-2xl text-textColor" />
        <AiFillGithub className="text-2xl text-textColor" />
        <BiLogoStackOverflow className="text-2xl text-textColor" />
      </div>
    </div>
  );
};

export default LeftSideBar;
