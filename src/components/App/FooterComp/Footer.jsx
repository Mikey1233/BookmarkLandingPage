import React from "react";
import "./responsiveFooter.css";
import facebook from "../../images/icon-facebook.svg";
import twitter from '../../images/icon-twitter.svg'
function Footer() {
  return (
    <footer id="Contact" className="footer-wrapper">
      <aside className="footer-start">
        <div className="start">
          <span>35,000+ already joined</span>
          <h1>Stay up-to-date with what we’re doing</h1>
          <form>
            <input
              type="email"
              placeholder="Enter your email address"
              className="email"
            />
            <input type="submit" value={"contact us"} className="submit" />
          </form>
        </div>
      </aside>
      <aside className="footer-end">
        <div className="first">
          <div>
            {/* <img src={logo} alt="logo" /> */}
            <span className="logoname">BOOKMARK</span>
          </div>
          <div>
            <ul className="footer-list">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#"> Contact</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="footer-list">
            <li>
              <a href="#"><img src={facebook} className="media" alt="facebook"/></a>
            </li>
            <li>
              <a href="#"><img src={twitter} className="media" alt="twitter"/></a>
            </li>
          </ul>
        </div>
      </aside>
    </footer>
  );
}

export default Footer;
