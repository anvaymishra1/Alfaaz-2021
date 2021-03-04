import React from "react";
import "./About.css";

function About() {
  return (
    <section className="About__root">
      <p className="About__root--title">About</p>
      <section className="About--container">
        <section className="About--textContainer">
          Kreiva is the Annual Cultural Festival of IIIT Vadodara tentative test
          dates are as follows : 28th - 29th October . This page is handled by
          the students of the cultural committee of the institute. Kreiva - the
          IIIT Vadodara's Annual Cultural Festival is a Platform to showcase the
          best in us and to strive for more. The Fest was started in the year
          2016 on an Intra-college level which in itself was a quite success.
          The fest is basically a platform for students to express their
          feelings and opinions through art, music, dance, drama, in short, the
          mediums that connect with masses. Come; Let's Celebrate this feeling
          of togetherness on public stage!! !! Welcome to Kreiva, IIIT Vadodara
          !!
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
