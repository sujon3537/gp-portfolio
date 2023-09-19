import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";

const ProgressCircle = (props) => {
  return (
    <div className="text-center">
      <div className="relative inline-flex">
        <CircularProgress
          variant="determinate"
          size={50}
          thickness={3}
          sx={{ color: "#30A8DE" }}
          {...props}
        />
        <span className="text-[13px] text-textColor absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{`${Math.round(
          props.value
        )}%`}</span>
      </div>
      <h6 className="text-[13px] text-white mt-1">{props.title}</h6>
    </div>
  );
};

export default ProgressCircle;
