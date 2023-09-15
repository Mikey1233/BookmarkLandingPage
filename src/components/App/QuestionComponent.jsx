import React from "react";
import "./Faq/Faq.css";
import arrowDown from "../images/icon-arrow.svg";
import { useState } from "react";

// import { useState } from "react";
function QuestionComponent({ question, ans }) {
     const [isOpen,setIsOpen] = useState(false);
     const toogleState = ()=>{
      setIsOpen(!isOpen)
     }
  return (
    <div className="questionContainer">
      <div
        className="box"
        // style={{}}
        onClick={()=>toogleState()}
      >
        <div>
          <span>{question}</span>
          <span className={`${!isOpen? `arrow`:`arrow rotate`}`} >
        <img src={arrowDown} alt="arrow" />
          </span>
        </div>
        <div className={`${!isOpen? `transit`:`transit smooth`}`}>
          {<p>{ans}</p>}
         {/* {!isOpen?<p>{ans}</p>:''}  */}
        </div>
      </div>
    </div>
  );
}

export default QuestionComponent;
