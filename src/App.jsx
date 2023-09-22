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

function App() {
  let [open, setOpen] = useState(false);
  const handleRightBar = () => {
    setOpen(!open);
  };
  return (
    <div className="max-w-container mx-auto grid grid-cols-12 gap-1 py-4 box-border relative">
      <div className="col-span-3 fixed top-4 left-4 z-20">
        <LeftSideBar />
      </div>
      <div
        className={
          open
            ? "col-start-3 col-span-8 transition-all duration-700"
            : "col-start-4 col-span-8 transition-all duration-700"
        }
      >
        <Banner />
        <Featured />
        <Services />
        <Plugin />
        <Testimonial />
        <Clients />
        <Price />
      </div>
      <div className="col-span-1 fixed top-4 right-4">
        <RightNavbar handleRightBar={handleRightBar} open={open} />
      </div>
    </div>
  );
}

export default App;
