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
  return (
    <div class="max-w-container mx-auto grid grid-cols-12 gap-1 py-4 box-border relative">
      <div class="col-span-3">
        <LeftSideBar />
      </div>
      <div class="col-span-8">
        <Banner />
        <Featured />
        <Services />
        <Plugin />
        <Testimonial />
        <Clients />
        <Price />
      </div>
      <div class="col-span-1">
        <RightNavbar />
      </div>
    </div>
  );
}

export default App;
