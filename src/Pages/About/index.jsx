import React from "react";
import "./About.css";

function About() {
  return (
    <section className="About__root">
      <p className="About__root--title">About</p>
      <section className="About--container">
        <section className="About--textContainer">
          Alfaaz is the Annual Literature Festival of Indian Institute of Information Technology, Vadodara. It is organized by the Literature Committee IIIT Vadodara and serves as a platform for literarians to showcase their knowledge, creativity and skills.

Alfaaz has a complete dose of mainstream events including open mic, poetry & microstory writing, fan fiction , spell bee and fun events such as guess the gibberish and many more. 
The festival offers a unique opportunity to hear some of the greatest contemporary literary stalwarts together on a single platform that brings diverse thoughts & opinions, and upholds freedom of thought & expression during the five-day mega event.

Join us to commemorate literature, join us, in Alfaaz!
        </section>
        <div className="About--imgContainer">
          <img src="/media/booklogo.svg" alt="books-logo" />
          <section className="About--imgContainer--overlay">
            <p className="About--imgContainer--book--1">
              60 K+<span>worth prize to win</span>
            </p>
            <p className="About--imgContainer--book--1">
            14 D+<span>long fest</span>
            </p>
            <p className="About--imgContainer--book--1">
            20+<span>events to participate</span>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default About;
