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
    <div className="flex items-center gap-x-4">
      <span className="text-[22px] font-semibold text-primary">
        {number} {props.plus && "+"}
      </span>
      <h3 className="text-[13px] text-white">{props.title}</h3>
    </div>
  );
};

export default Counter;
