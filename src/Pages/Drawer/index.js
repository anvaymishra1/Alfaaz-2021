import React from "react";
import "./Drawer.css";
import Handle from "../Handle";

import { NavLink } from "react-router-dom";

const Drawer = (props) => {
  return (
    <div className={"SideDrawer " + (props.open ? "Open" : "Close")}>
      <div onClick={props.closed}>
        <i className="fa fa-bars side__hamburger" onClick={props.opened}></i>
      </div>

      <div className="side__tabs">
        <div className="side__tab ">
          <NavLink
            onClick={props.closed}
            exact
            activeClassName="mobile__active"
            style={{ textDecoration: "none", color: "#2f1728" }}
            to="/"
          >
            HOME
          </NavLink>
        </div>
        <div className="side__tab">
          <NavLink
            onClick={props.closed}
            exact
            activeClassName="mobile__active"
            style={{ textDecoration: "none", color: "#2f1728" }}
            to="/events"
          >
            EVENTS
          </NavLink>
        </div>
        <div className="side__tab">
          <NavLink
            onClick={props.closed}
            exact
            activeClassName="mobile__active"
            style={{ textDecoration: "none", color: "#2f1728" }}
            to="/members"
          >
            MEMBERS
          </NavLink>
        </div>
        <div className="side__tab">
          <a
            onClick={props.closed}
            activeClassName="mobile__active"
            style={{ textDecoration: "none", color: "#2f1728" }}
            href="https://firebasestorage.googleapis.com/v0/b/alfaaz-brochure.appspot.com/o/Alfaaz%20Brochure(1).pdf?alt=media&token=fe5f063b-467c-4710-8839-ac54d0f5fef6"
          >
            BROCHURE
          </a>
        </div>
      </div>

      <Handle />
    </div>
  );
};

export default Drawer;
