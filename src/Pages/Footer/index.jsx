import React from "react";
import { NavLink } from "react-router-dom";

import dotlogo from "../../Assets/dot logo 1.svg";
import cclogo from "../../Assets/cc.svg";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="inname">
        <div></div>
        <div className="iiitv-name">
          Indian Institute of Information Technology Vadodara
        </div>
      </div>

      <div className="linkcon">
        <div className="footerlin">
          <div className="link-drop">
            <div className="linkna">
              LINKS
              <div className="underline"></div>
            </div>
          </div>
          <div className="links" id="cyka">
            <NavLink to="/" className="link">
              Home
            </NavLink>
            <NavLink to="/EventsTimeline" className="link">
              Events
            </NavLink>
            <NavLink to="/members" className="link">
              Members
            </NavLink>
            <a href="http://iiitvadodara.ac.in/" className="link">
              Institute Site
            </a>
          </div>
        </div>

        <div className="footerlin">
          <div className="conna">
            CONTACT
            <div className="underline"></div>
          </div>
          <div className="contact">
            <div className="clink">
              Email:{" "}
              <div className="con-details">
                <a
                  href="mailto:literature@iiitvadodara.ac.in"
                  className="linktext"
                >
                  literature@iiitvadodara.ac.in
                </a>
              </div>
            </div>
            <div className="clink">
              Phone:{" "}
              <div className="con-details">+91-9009111901 +91-9113321956</div>
            </div>
            <div className="clink">
              Address:{" "}
              <div className="con-details">
                c/o Block No.9, Government Engineering College Campus,
                Sector-28, Gandhinagar, Gujarat - 382028
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="disclaimer">
        <span>Disclaimer:</span>
        <span>
          This website is built and handled by the Literature committee of IIIT
          Vadodara. All opinions shared through the post are that of the
          students of Literature Committee and not that of IIIT Vadodara.
        </span>
      </div>
      <hr className="lastline"></hr>
      <div className="dev">
        <div className="dot">
          <p className="p-dev">Designed by Dot</p>
          <img src={dotlogo} alt="dot-logo" className="dotlogo"></img>
        </div>
        <div className="cc">
          <p className="p-dev">Developed by Coding Club</p>
          <img src={cclogo} alt="cc-logo" className="cclogo"></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
