import React from "react";
import { assets } from "./asset";
import "./top.css";
const top = () => {
  return (
    <div className="top">
      <div className="con">
        <div className="logo">
          <img src={assets.logo} alt="" />
        </div>
        <div className="purchase-btn">
          <button className="btn">Purchase Now</button>
        </div>
      </div>
    </div>
  );
};

export default top;
