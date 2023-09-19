import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";

const ProgressBar = (props) => {
  return (
    <div className="my-5">
      <div className="flex justify-between mb-2">
        <h6 className="text-[13px] text-white">{props.title}</h6>
        <span className="text-[13px] text-textColor">{props.value} %</span>
      </div>
      <LinearProgress
        variant="determinate"
        sx={{ backgroundColor: "#191923" }}
        value={props.value}
      />
    </div>
  );
};

export default ProgressBar;
