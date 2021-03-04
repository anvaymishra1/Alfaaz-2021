import React, { useState } from "react";
import TimelineCard from "../TimelineCard/TimelineCard";
import "./Timeline.css";
import Fade from "react-reveal/Fade";

const Timeline = (props) => {
  const [currentSlide, setCurrentSlide] = useState(-1);

  const onCardMouseEvent = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  const TimelineCards =
    props.events !== ""
      ? props.events.map((event, i) => {
          if (i % 2) {
            return (
              <Fade left>
                <div className="timeline__card">
                  <TimelineCard
                    title={event.name}
                    description={event.long_description}
                    prize={event.prize}
                    startDate={event.start_date}
                    endDate={event.end_date}
                    startTime={event.start_time}
                    endTime={event.end_time}
                    currentSlide={currentSlide}
                    index={i}
                    onCardMouseEvent={onCardMouseEvent}
                  />
                  {i < props.events.length - 1 ? (
                    <hr className="timeline__hr" />
                  ) : null}
                </div>
              </Fade>
            );
          } else {
            return (
              <Fade right>
                <div className="timeline__card">
                  <TimelineCard
                    title={event.name}
                    description={event.long_description}
                    prize={event.prize}
                    startDate={event.start_date}
                    endDate={event.end_date}
                    startTime={event.start_time}
                    endTime={event.end_time}
                    currentSlide={currentSlide}
                    index={i}
                    onCardMouseEvent={onCardMouseEvent}
                  />
                  {i < props.events.length - 1 ? (
                    <hr className="timeline__hr" />
                  ) : null}
                </div>
              </Fade>
            );
          }
        })
      : undefined;

  return (
    <div className="timeline">
      <div className="timeline__content">
        <div className="timeline__title">
          <div className="timeline__start__title">
            <div>
              <span>Start Date</span>
            </div>
            <div>
              <span>Start Time</span>
            </div>
          </div>

          <div className="timeline__end__title">
            <div>
              <span>End Time</span>
            </div>
            <div>
              <span>End Date</span>
            </div>
          </div>
        </div>
        <div className="timeline__cards-wrapper">{TimelineCards}</div>
      </div>
      <div className="timeline__content--mobile">{TimelineCards}</div>
    </div>
  );
};

export default Timeline;
