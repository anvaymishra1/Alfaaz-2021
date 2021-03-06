import React from "react";
import Footer from "../Footer";
// import Header from "../Header";
import About from "../About";
import Gallery from "../Gallery";
import Landing from "../Landing";
import NavigationHelper from "../NavigationHelper";
import EventPoster from "../../Component/EventPoster";

const Home = () => {
  return (
    <div>
      <NavigationHelper
        home={true}
        events={false}
        members={false}
      ></NavigationHelper>
      <Landing />
      <About />
      <EventPoster />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
