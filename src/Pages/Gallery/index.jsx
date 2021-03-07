import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./Gallery.css";

function Gallery() {
  return (
    <>
      <div className="gallery">
        <h1 className="GalleryHead">Gallery</h1>
        <div className="galleryCarousel">
          <CarouselProvider
            naturalSlideWidth={500}
            naturalSlideHeight={400}
            totalSlides={6}
            visibleSlides={2.5}
            interval={2000}
            isPlaying={true}
          >
            <Slider>
              <Slide index={0}>
                <div className="largeImg">
                  <img
                    className="galleryImg"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/1-min.jpg'}
                    alt="Alfaaz gallery"
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={1}>
                <div className="midContainer">
                  <div className="upper">
                    <img
                      className="galleryImg"
                      src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/6-min.jpg?raw=true'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/3-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/4-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div className="largeImg">
                  <img
                    className="galleryImg"
                    src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/5-min.jpg?raw=true'}
                    alt="Alfaaz gallery"
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={3}>
                <div className="midContainer">
                  <div className="upper">
                    <img
                      className="galleryImg"
                      src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/7-min.jpg?raw=true'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/2-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/8-min-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={4}>
                <div className="largeImg">
                  <img
                    className="galleryImg"
                    src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/9-min-min.jpg?raw=true'}
                    alt="Alfaaz gallery"
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={5}>
                <div className="midContainer">
                  <div className="upper">
                    <img
                      className="galleryImg"
                      src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/10-min.jpg?raw=true'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/11-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://github.com/kreiva-iiitv/Alfaaz-2021/blob/development/public/media/12-min.jpg?raw=true'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <ButtonBack className="prev">&#10094;</ButtonBack>
            <ButtonNext className="next">&#10095;</ButtonNext>
          </CarouselProvider>
        </div>
      </div>

       <div className="mobileGallery">
        <div className="headContainer">
          <h1 className="mobileGallery__head">Gallery</h1>
        </div>

        <div className="mobileGallery__carousel">
          <CarouselProvider
            naturalSlideWidth={500}
            naturalSlideHeight={400}
            totalSlides={12}
            visibleSlides={1}
          >
            <Slider>
              <Slide index={0}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/1-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={1}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/2-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={2}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/3-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={3}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/4-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={4}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/5-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={5}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/6-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={6}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/7-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={7}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/8-min-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={8}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/9-min-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={9}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/10-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={10}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/11-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={11}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://raw.githubusercontent.com/kreiva-iiitv/Alfaaz-2021/development/public/media/12-min.jpg'}
                    draggable="false"
                  />
                </div>
              </Slide>
            </Slider>
            <ButtonBack className="prevMobile">&#10094;</ButtonBack>
            <ButtonNext className="nextMobile">&#10095;</ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
export default Gallery;
