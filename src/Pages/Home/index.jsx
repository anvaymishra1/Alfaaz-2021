import React from "react";
import Footer from "../Footer";
// import Header from "../Header";
import About from "../About";
import Gallery from "../Gallery";
import Landing from "../Landing";
import NavigationHelper from "../NavigationHelper";

const Home = () => {
  return (
    <div>
      <NavigationHelper></NavigationHelper>
      <Landing />
      <About />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
