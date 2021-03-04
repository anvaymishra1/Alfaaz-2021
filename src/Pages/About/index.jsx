import React from "react";
import "./About.css";

function About() {
  return (
    <section className="About__root">
      <p className="About__root--title">About</p>
      <section className="About--container">
        <section className="About--textContainer">
          Now in it's third year, the Literature Committee IIIT Vadodara celebrates Alfaaz, the Annual Literature Festival. We invite you all to share and discuss the pleasures and challenges of written and verbal expression with a great blend -- from fiction and nonfiction to poetry and spoken-word performance.

Alfaaz has a complete dose of mainstream events including open mic, poetry & microstory writing, fan fiction , spell bee and fun events such as guess the gibberish and many more. 
The festival offers a unique opportunity to hear some of the greatest contemporary literary stalwarts together on a single platform that brings diverse thoughts & opinions, and upholds freedom of thought & expression during the five-day mega event. It does not matter if you are a reader or writer or a speaker, we have something special for all of you. With 25k+ prizes up for grab, we assure you that this will be fun for you.
        </section>
        <div className="About--imgContainer">
          <img src="/media/booklogo.svg" alt="books-logo" />
          <section className="About--imgContainer--overlay">
            <p className="About--imgContainer--book--1">
              25 K+<span>worth prize to win</span>
            </p>
            <p className="About--imgContainer--book--1">
            7 D+<span>long fest</span>
            </p>
            <p className="About--imgContainer--book--1">
            8+<span>events to participate</span>
            </p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default About;
