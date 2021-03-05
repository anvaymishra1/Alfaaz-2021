import React, { useState } from "react";
import Header from "../Header";
import Drawer from "../Drawer/index";

function NavigationHelper(props) {
  const activeTab1 = props.home;
  const activeTab2 = props.events;
  const activeTab3 = props.members;
  const [showDrawer, setShowDrawer] = useState(false);

  const openDrawer = () => {
    setShowDrawer(true);
  };

  const closeDrawer = () => {
    setShowDrawer(false);
  };

  return (
    <div>
      <Header
        opened={openDrawer}
        h={activeTab1}
        e={activeTab2}
        m={activeTab3}
      ></Header>
      <Drawer open={showDrawer} closed={closeDrawer}></Drawer>
    </div>
  );
}

export default NavigationHelper;
