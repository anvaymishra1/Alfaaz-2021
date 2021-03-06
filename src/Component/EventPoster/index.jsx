import React from "react";
import { CarouselProvider, Slider } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import mainAlfaaz from "../../Assets/alfaazmain.jpg";
import openMic from "../../Assets/OpenMicFinal.png";
import artist from "../../Assets/artist1.png";
import "./EventPoster.css";

function EventPoster() {
  return (
    <div className="poster">
      <div>
        <div className="EventsHead">Events</div>
      </div>
      <div className="CarouselParent">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
          visibleSlides={3}
          className="Events"
        >
          <div className="CarouselChildren">
            <Slider className="Slider">
              <img src={mainAlfaaz} alt="poster-img" />
            </Slider>
            <Slider className="Slider">
              <img src={artist} alt="poster-img" />
            </Slider>
            <Slider className="Slider">
              <img src={openMic} alt="poster-img" />
            </Slider>
          </div>
        </CarouselProvider>
      </div>

      <div className="CarouselParent--mobile">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={125}
          totalSlides={3}
          visibleSlides={3}
          infinite={true}
          dragEnabled={false}
          touchEnabled={false}
          className="Events--mobile"
        >
          <div className="CarouselChildren--mobile">
            <Slider className="Slider--mobile">
              <img src={mainAlfaaz} alt="poster-img" />
            </Slider>
            <Slider className="Slider--mobile">
              <img src={artist} alt="poster-img" />
            </Slider>
            <Slider className="Slider--mobile">
              <img src={openMic} height="150px" alt="poster-img" />
            </Slider>
          </div>
        </CarouselProvider>
      </div>
    </div>
  );
}

export default EventPoster;

// function changeCurrentSlideNext() {
//   if (this.state.currentSlide < this.props.events.length - 2) {
//     const currentSlide = this.state.currentSlide + 1;
//     this.setState({ currentSlide: currentSlide });
//   } else {
//     this.setState({ currentSlide: 1 });
//   }
// }
//
// function changeCurrentSlideBack() {
//   if (this.state.currentSlide > 1) {
//     const currentSlide = this.state.currentSlide - 1;
//     this.setState({ currentSlide: currentSlide });
//   } else {
//     this.setState({ currentSlide: this.props.events.length - 2 });
//   }
// }
