import React from "react";
import image1 from "../../images/illustration-features-tab-1.svg";
import image2 from "../../images/illustration-features-tab-2.svg";
import image3 from "../../images/illustration-features-tab-3.svg";
// import BlueBtn from "../BlueBtn";
import Tab from "./Tab";
import TitleComponent from "../TitleComponent";
import { useState } from "react";
import "./responsiveFeatures.css";

function loop(e) {
  [...e.target.parentElement.children].forEach(
    (arr) => (arr.style = "border-bottom:0px")
  );
  e.target.style = " border-bottom :2px solid hsl(0, 94%, 66%);";
}
const obj = [
  {
    header: "Bookmark in one click ",
    image: image1,
    key:0,
    index:0,
    text: `Organize your bookmarks however you like. 
       simple drag-and-drop interface  gives you complete
       control over how you manage your favourite sites.`,
  },
  {
    header: "Intelligent search",
    image: image2,
    key:1,
    index:1,
    text: `Our powerful search feature will help
     you find saved sites in no time at all.  
    No need to trawl through all of your bookmarks.`,
  },
  {
    header: "Share your bookmarks ",
    image: image3,
    key:2,
    index:2,
    text: `Easily share your bookmarks and 
    collections with others.
    Create a shareable   link that you can
    send at the click of a button.`,
  },
];
function Features() {
  const [head, setHead] = useState(0);
  return (
    <div className="Features" id="Features">
      <TitleComponent
        title={"Features"}
        introPara={`Our aim is to make it quick and easy for you to access 
          your favourite websites. Your bookmarks sync between your
           devices so you can access them on the go.`}
      />
      <div className="Features-tab">
        <div className="tab">
          <span
            style={{ borderBottom: "2px solid hsl(0, 94%, 66%)" }}
            onClick={(e) => {
             setHead(0);
              loop(e);
            }}
          >
            Simple Bookmarking
          </span>
          <span
            onClick={(e) => {
              setHead(1);
              loop(e);
            }}
          >
            Speedy Searching
          </span>
          <span
            onClick={(e) => {
             setHead(2);
              loop(e);
            }}
          >
            Easy Sharing
          </span>
        </div>
      </div>
   {
    obj.map((arr)=><Tab {...arr} head={head}/>)
   } 
    </div>
  );
}

export default Features;
