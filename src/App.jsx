import { useState } from "react";
import Banner from "./components/Banner";
import Clients from "./components/Clients";
import Featured from "./components/Featured";
import LeftSideBar from "./components/LeftSideBar";
import Plugin from "./components/Plugin";
import Price from "./components/Price";
import RightNavbar from "./components/RightNavbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import TechBlog from "./components/TechBlog";
import Contact from "./components/Contact";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";

function App() {
  let [open, setOpen] = useState(false);
  const handleRightBar = () => {
    setOpen(!open);
  };
  return (
    <div className="lg:max-w-container mx-auto overflow-x-hidden grid grid-cols-12 gap-1 py-4 box-border relative">
      <div className="fixed top-4 left-4 z-20">
        <LeftSideBar />
      </div>
      <div
        className={`${
          open ? "xl:col-start-3" : "xl:col-start-4"
        } col-start-1 col-end-13 xl:col-span-8 mx-4 transition-all duration-700`}
      >
        <Banner />
        <Featured />
        <Services />
        <Plugin />
        <Testimonial />
        <Clients />
        <Price />
        <TechBlog />
        <Contact />
        <GetInTouch />
        <Footer />
      </div>
      <div className="fixed top-0 xl:top-4 right-4 z-30">
        <RightNavbar handleRightBar={handleRightBar} open={open} />
      </div>
    </div>
  );
}

export default App;
