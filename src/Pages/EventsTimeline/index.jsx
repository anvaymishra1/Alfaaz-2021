import React from "react";
import EventHeader from "../../Component/EventHeader/EventHeader";
import Cards from "../Cards";
import "./EventsTimeline.css";
import Footer from "../Footer";
import NavigationHelper from "../NavigationHelper";
import events from "../../json/events.json";

const EventsTimeline = () => {
  return (
    <div>
      <NavigationHelper />
      <EventHeader />
      <div className="heading">EVENTS </div>
      <React.Fragment>
        {events.map((card) => (
          <Cards
            name={card.name}
            long_description={card.long_description}
            worth={card.prize}
            venue={card.venue}
            date={card.start_date + ", " + card.start_time}
            convenor={card.convenor}
            coconvenor={card.co_convenor}
            members={card.members}
            reg_link={card.reg_link}
          />
        ))}
      </React.Fragment>
      <Footer />
    </div>
  );
};
export default EventsTimeline;
