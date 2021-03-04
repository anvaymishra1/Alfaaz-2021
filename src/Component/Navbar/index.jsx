import React from "react";
import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="members__navbar">
      <select onChange={(e) => props.changeCurrentTab(e.target.value)}>
        {props.teamNames.map((ele) => {
          const isSelected = ele === "Core Team" ? true : false;
          return (
            <option value={ele} selected={isSelected}>
              {ele}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Navbar;
