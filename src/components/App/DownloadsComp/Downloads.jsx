import React from "react";
 import BrowsersComponent from "../BrowserComp/BrowsersComponent";
 import TitleComponent from "../TitleComponent";
import "./responsiveDownloads.css";
 
////////////images
import chrome from "../../images/logo-chrome.svg";
import firefox from "../../images/logo-firefox.svg";
import opera from "../../images/logo-opera.svg";
///////////////
const macth= window.matchMedia('(max-width:768px)')
function Downloads() {
  let list;
  
  if(macth.matches){
     list = [
      { Image: chrome, margin: "1rem", name: "chrome", version: 62 },
      { Image: firefox, margin: "1rem", name: "firefox", version: 55 },
      { Image: opera, margin: "1rem", name: "opera", version: 46 },
    ];
  }else{
     list = [
      { Image: chrome, margin: "0", name: "chrome", version: 62 },
      { Image: firefox, margin: "2rem", name: "firefox", version: 55 },
      { Image: opera, margin: "4rem", name: "opera", version: 46 },
    ];
  }
 
  return (
    
      <section className="download-section" id="Pricing">
        <TitleComponent
          title={"Download the extension"}
          introPara={`We’ve got more browsers in the pipeline.
        Please do let us know if you’ve 
        got a favourite you’d like us to prioritize.`}
        />
        <div className="cardContainer">
          {list.map((arr) => {
            return (
              <BrowsersComponent
                image={arr.Image}
                browserName={arr.name}
                version={arr.version}
                placement={arr.margin}
                key={arr.version}
              />
            );
          })}
        </div>
      </section>
    
  );
}

export default Downloads;
