import React, { useEffect, useState } from "react";
import Member from "../../Component/Member";
import Navbar from "../../Component/Navbar";
import "./Members.css";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";
import members from "../../json/members.json";

const Members = () => {
  const [currentTab, setCurrentTab] = useState("Web Team");
  const [activeTeam, setActiveTeam] = useState(
    members.filter((ele) => ele.team === "Web Team")
  );
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setActiveTeam(members.filter((ele) => ele.team === currentTab));
    return () => {};
  }, [currentTab]);

  const getTeams = (arr) => {
    const tempTeams = arr.map((ele) => ele.team);
    return [...new Set(tempTeams)];
  };
  return (
    <React.Fragment>
      <NavigationHelper />
      <Navbar
        teamNames={getTeams(members)}
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}
      />
      <div className="members">
        {activeTeam.map((ele) => {
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
