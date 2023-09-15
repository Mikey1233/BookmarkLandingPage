import React from "react";
// import "./Features/Features.css";
import BlueBtn from "./BlueBtn";

function Tab({ header, image, text }) {
  return (
    <div className="toggle-tab">
      <div className="blue-container">
        <img src={image} alt="illustration-features-1" className="image1" />
        <div className="blue-spot"></div>
      </div>
      <div className="toggle-article">
        <h1>{header}</h1>
        <p>{text}</p>
        <div>
        <BlueBtn BtnValue={'More info'}/>
        </div>
      </div>
    </div>
  );
}

export default Tab;
