import React, { useState, useEffect } from "react";

const Counter = (props) => {
  let [number, setNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prevNumber) => {
        const nextNumber = prevNumber + 1;
        if (nextNumber >= props.value) {
          clearInterval(timer);
        }
        return nextNumber;
      });
    }, 15);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="flex items-center justify-around lg:gap-x-2 w-[49%] md:w-[24%]">
      <span className="text-[22px] flex gap-x-2 font-semibold text-primary">
        {number} <span>{props.plus && "+"}</span>
      </span>
      <h3 className="text-[13px] text-white w-20 lg:w-full">{props.title}</h3>
    </div>
  );
};

export default Counter;
