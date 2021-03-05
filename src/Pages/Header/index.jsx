import React from "react";
import { NavLink } from "react-router-dom";
import alfaazlogo from "../../Assets/Asset 1 10.png";

import "./Header.css";

function Header(props) {
  const style1 = props.h ? "3px solid #fa6d75" : null;
  const style2 = props.e ? "3px solid #fa6d75" : null;
  const style3 = props.m ? "3px solid #fa6d75" : null;

  return (
    <header>
      <div className="tabs">
        <NavLink className="navstyles" to="/">
          <div
            style={{ borderBottom: style1 }}
            className="tabs__logo__tab active"
          >
            HOME
          </div>
        </NavLink>
        <NavLink className="navstyles" to="/events">
          <div style={{ borderBottom: style2 }} className="tabs__logo__tab ">
            EVENTS
          </div>
        </NavLink>

        <NavLink className="navstyles" to="/">
          <div className="logo">
            <img src={alfaazlogo} alt="alfaazlogo" className="logo-img" />
          </div>
        </NavLink>

        <NavLink className="navstyles" to="/members">
          <div style={{ borderBottom: style3 }} className="tabs__logo__tab ">
            MEMBERS
          </div>
        </NavLink>
        <a
          className="navstyles"
          href="https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/brochure%2FAlfaaz%20Brochure_compressed%20(1).pdf?alt=media&token=a04e7df0-fa77-42a7-ac16-9337a310d16d"
        >
          <div className="tabs__logo__tab ">BROCHURE</div>
        </a>
      </div>
      <div className="mobile-tabs-header">
        <div className="mobile__tabs__logo">
          <NavLink to="/">
            <img src={alfaazlogo} alt="tabs icon" width="100%" height="100%" />
          </NavLink>
        </div>

        <div onClick={props} className="hamburger-tab">
          <i className="fa fa-bars hamburger"></i>
        </div>
      </div>
    </header>
  );
}

export default Header;
// <div className="mobile-logo">
//   <img src={alfaazlogo} alt="alfaazlogo" className="mobilelogo-img" />
// </div>
