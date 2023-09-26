import React from "react";

const Heading = ({ title }) => {
  return (
    <h2 className="text-[17px] font-semibold text-white text-center md:text-start mb-6">
      {title}
    </h2>
  );
};

export default Heading;
