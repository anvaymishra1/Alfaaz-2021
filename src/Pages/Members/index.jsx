import React, { useState } from "react";
import Member from "../../Component/Member";
import Navbar from "../../Component/Navbar";
import "./Members.css";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";
import { members } from "../../json/members.json";

const Members = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  return (
    <React.Fragment>
      <NavigationHelper />
      <Navbar
        teamNames={"web"}
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}
      />
      <div className="members">
        {members.map((ele) => {
          return (
            <Member
              imgSrc={ele.img}
              name={ele.name}
              position={ele.role}
              linkedIn={ele.linkedIn}
            />
          );
        })}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Members;
