import React from "react";
import logo from "../../images/logo-bookmark.svg";
import "./responsiveHeeder.css";
import headerLogo from "../../images/illustration-hero.svg";
import BlueBtn from "../BlueBtn";
import { useState } from "react";
import LiComp from "./LiComp";

function Header() {
  const [bar, setBar] = useState(true);
  const liElem = ["Features", "Pricing", "Contact"];
    window.addEventListener('scroll',()=>setBar(true))
  return (
    <header className="header">
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        <ul className={`${bar ? "list-items" : "list-items active"}`}>
          {liElem.map((arr) => (
            <LiComp name={arr} setBar={setBar} bar={bar} />
          ))}
          <button type="menu" className="Btn">
            {" "}
            Login
          </button>
        </ul>
        <div
          className={`${bar ? "menu" : "menu active"}`}
          onClick={() => {
            bar ? setBar(false) : setBar(true);
          }}
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </nav>

      <aside className="hero-article">
        <div className="hero-text">
          <h1>A Simple Bookmark Manager</h1>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className="btn-container">
            {/* <button className="btn1">Get it on Chrome</button> */}
            <BlueBtn BtnValue={"Get it on chrome"} />
            <button className="btn2">Get it on Firefox</button>
          </div>
        </div>
        <div className="hero-svg">
          <img src={headerLogo} alt="hero-pic" className="headerLogo" />
          <div className="blueBackground"></div>
        </div>
      </aside>
    </header>
  );
}

export default Header;
