import React, { useState, useRef, useEffect } from "react";
import Handle from "../Handle";
import hindilogo from "../../Assets/hindi.png";
import englishlogo from "../../Assets/english.svg";

import "./Landing.css";

function Landing() {
  const [timerSeconds, setSeconds] = useState("00");
  const [timerMinutes, setMinutes] = useState("00");
  const [timerHours, setHours] = useState("00");
  const [timerDays, setDays] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("March 10,2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <>
      <div className="landing">
        <div className="landing__text">
          <div className="upper-img">
            <img src={englishlogo} className="english-img" alt="capital A" />
          </div>

          <div className="border-line"></div>
            <div className="main-section">
            <div className="landing__text--font landing__text--section">
              ALFAAZ
            </div>
             <div className="landing__text--font landing__text--virtual">
              A Virtual Fest
            </div>
<div className="timer">
              <div className="timer-style">
                <div className="timer-box">
                  <div className="box1">
                    <span className="time-text">{parseInt(timerDays / 10)}</span>
                  </div>
                  <div className="box2">
                    <span className="time-text">{timerDays % 10}</span>
                  </div>
                </div>
                <div className="time-content">
                  <p>DAYS</p>
                </div>
              </div>
              <div className="timer-style">
                <div className="timer-box">
                  <div className="box1">
                    <span className="time-text">{parseInt(timerHours / 10)}</span>
                  </div>
                  <div className="box2">
                    <span className="time-text">{timerHours % 10}</span>
                  </div>
                </div>
                <div className="time-content">
                  <p>HOURS</p>
                </div>
             </div>
             <div className="timer-style">
                <div className="timer-box">
                  <div className="box1">
                    <span className="time-text">{parseInt(timerMinutes / 10)}</span>
                  </div>
                  <div className="box2">
                    <span className="time-text">{timerMinutes % 10}</span>
                  </div>
                </div>
            <div className="time-content">
                  <p>MINUTES</p>
                </div>
              </div>
              <div className="timer-style">
                <div className="timer-box">
                  <div className="box1">
                    <span className="time-text">{parseInt(timerSeconds / 10)}</span>
                  </div>
                  <div className="box2">
                    <span className="time-text">{timerSeconds % 10}</span>
                  </div>
                </div>
              <div className="time-content">
                  <p>SECONDS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="handle-section">
            <Handle />
          </div>
             <div className="border-line2"></div>
          <div className="lower-img">
            <img src={hindilogo} className="hindi-img" alt="hindi A" />
          </div>
        </div>
      </div>
    </>
  );
}
export default Landing;
