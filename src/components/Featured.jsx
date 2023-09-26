import React from "react";
import Counter from "./Counter";

const Featured = () => {
  return (
    <div className="flex justify-between flex-wrap gap-y-4 my-8">
      <Counter value={15} plus={true} title="Years Experience" />
      <Counter value={127} title="Completed Projects" />
      <Counter value={64} title="Happy Customers" />
      <Counter value={10} plus={true} title="Official Releases" />
    </div>
  );
};

export default Featured;
