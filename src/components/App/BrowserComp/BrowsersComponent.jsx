import React from "react";
import BlueBtn from "../BlueBtn";
import "./Cards.css";

function BrowsersComponent({ image, browserName, version, placement }) {
  return (
    <div style={{ marginTop: placement }} className="cardBox">
      <div className="Cards">
        <div className="broswer-pic">
          <img src={image} alt="brower-pic" />
        </div>
        <div>
          <h4>Add to {browserName}</h4>
          <p>Minimum version {version}</p>
        </div>
        <div className="btnHolder">
          <BlueBtn BtnValue={"Add and install extension"} />
        </div>
      </div>
    </div>
  );
}

export default BrowsersComponent;
