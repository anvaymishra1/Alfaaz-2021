import React, { useEffect, useState } from "react";
import Member from "../../Component/Member";
import Navbar from "../../Component/Navbar";
import "./Members.css";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";
import members from "../../json/members.json";

const Members = () => {
  const [currentTab, setCurrentTab] = useState("Core Team");
  const [activeTeam, setActiveTeam] = useState(
    members.filter((ele) => ele.team === "Core Team")
  );
  const changeCurrentTab = (tab) => {
    setCurrentTab(tab);
  };

  useEffect(() => {
    setActiveTeam(members.filter((ele) => ele.team === currentTab));
    return () => {
      setActiveTeam(null);
    };
  }, [currentTab]);

  const getTeams = (arr) => {
    const tempTeams = arr.map((ele) => ele.team);
    return [...new Set(tempTeams)];
  };

  const getMemberCards = () => {
    return (
      <React.Fragment>
        {activeTeam.map((ele) => {
          return (
            <Member
              imgSrc={ele.firebase}
              name={ele.name}
              position={ele.role}
              linkedIn={ele.linkedin}
            />
          );
        })}
      </React.Fragment>
    );
  };
  return (
    <React.Fragment>
      <NavigationHelper />
      <Navbar
        teamNames={getTeams(members)}
        currentTab={currentTab}
        changeCurrentTab={changeCurrentTab}
      />
      <div className="members">{getMemberCards()}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Members;
