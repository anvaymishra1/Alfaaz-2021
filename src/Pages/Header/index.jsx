import React from "react";
import { NavLink } from "react-router-dom";
import alfaazlogo from "../../Assets/Asset 1 10.png";

import "./Header.css";

function Header({ opened }) {
  return (
    <header>
      <div className="tabs">
        <NavLink className="navstyles" to="/">
          <div className="tabs__logo__tab active">HOME</div>
        </NavLink>
        <NavLink className="navstyles" to="/events">
          <div className="tabs__logo__tab ">EVENTS</div>
        </NavLink>

        <NavLink className="navstyles" to="/">
          <div className="logo">
            <img src={alfaazlogo} alt="alfaazlogo" className="logo-img" />
          </div>
        </NavLink>

        <NavLink className="navstyles" to="/members">
          <div className="tabs__logo__tab ">Members</div>
        </NavLink>
        <a className="navstyles" href="https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/brochure%2FAlfaaz%20Brochure_compressed.pdf?alt=media&token=97d13bc6-9d35-49e8-bd94-925a79e9747a">
          <div className="tabs__logo__tab ">BROCHURE</div>
        </a>
      </div>
      <div className="mobile-tabs-header">
        <div className="mobile__tabs__logo">
          <img src={alfaazlogo} alt="tabs icon" width="100%" height="100%" />
        </div>

        <div onClick={opened} className="hamburger-tab">
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