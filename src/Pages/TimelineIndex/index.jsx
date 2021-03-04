import React from "react";
import Footer from "../Footer";
import EventHeader from "../../Component/EventHeader/EventHeader";
import Timeline from "../../Component/Timeline/Timeline";
import NavigationHelper from "../NavigationHelper";
import events from "../../json/events.json";

const TimelineIndex = () => {
  return (
    <React.Fragment>
      <NavigationHelper />
      <EventHeader timeline={true} />
      <Timeline events={events} />
      <Footer />
    </React.Fragment>
  );
};

export default TimelineIndex;
