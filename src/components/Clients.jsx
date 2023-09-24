import React from "react";
import clientImg1 from "../assets/images/clients1.png";
import clientImg2 from "../assets/images/clients2.png";
import clientImg3 from "../assets/images/clients3.png";
import clientImg4 from "../assets/images/clients4.png";
import clientImg5 from "../assets/images/clients5.png";
import clientImg6 from "../assets/images/clients6.png";
import clientImg7 from "../assets/images/clients7.png";
import clientImg8 from "../assets/images/clients8.png";
import clientImg9 from "../assets/images/clients9.png";
import clientImg10 from "../assets/images/clients10.png";
import clientImg11 from "../assets/images/clients11.png";
import clientImg12 from "../assets/images/clients12.png";
import clientImg13 from "../assets/images/clients13.png";
import clientImg14 from "../assets/images/clients14.png";
import clientImg15 from "../assets/images/clients15.png";
import clientImg16 from "../assets/images/clients16.png";
import clientImg17 from "../assets/images/clients17.png";
import clientImg18 from "../assets/images/clients18.png";
import clientImg19 from "../assets/images/clients19.png";
import clientImg20 from "../assets/images/clients20.png";

const Clients = () => {
  let imgArr = [
    clientImg1,
    clientImg2,
    clientImg3,
    clientImg4,
    clientImg5,
    clientImg6,
    clientImg7,
    clientImg8,
    clientImg9,
    clientImg10,
    clientImg11,
    clientImg12,
    clientImg13,
    clientImg14,
    clientImg15,
    clientImg16,
    clientImg17,
    clientImg18,
    clientImg19,
    clientImg20,
  ];
  return (
    <div
      className="flex justify-between flex-wrap my-8 px-5 gap-x-20 gap-y-10"
      id="clients"
    >
      {imgArr.map((item) => (
        <img
          src={item}
          alt="client-img"
          className="w-[115px] opacity-60 hover:opacity-100"
        ></img>
      ))}
    </div>
  );
};

export default Clients;
