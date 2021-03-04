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
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F1-min.jpg?alt=media&token=ec758777-655c-4138-b3d0-0aa77d09f268'}
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
                      src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F6-min.jpg?alt=media&token=e5045a0b-1ee2-41c8-b6d4-910271468525'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F3-min.jpg?alt=media&token=09469799-6123-45b6-8d2f-0b17b1c83dc4'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F4-min.jpg?alt=media&token=44c86240-2cb9-4f69-9c09-17769027c22f'}
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
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F5-min.jpg?alt=media&token=2a06d515-6b26-46f5-8b3a-d6d879aa04f8'}
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
                      src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F7-min.jpg?alt=media&token=645163a2-358b-4f96-b737-30dfad8540c3'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F2-min.jpg?alt=media&token=f536d136-f687-4cb7-8a87-caa2404c3b5c'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F8-min-min.jpg?alt=media&token=c05c583f-8824-40c3-85bb-61f1556a8042'}
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
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F9-min-min.jpg?alt=media&token=0ef5b5e0-7c6f-401b-986a-3c4035d33e61'}
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
                      src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F10-min.jpg?alt=media&token=1c4a87c2-04c4-458a-8ffa-68826dd4631d'}
                      alt="Alfaaz gallery"
                      draggable="false"
                    />
                  </div>
                  <div className="subContainer">
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F11-min.jpg?alt=media&token=a0217fb4-6688-4f2c-9bb2-c3ae98fd2b6b'}
                        alt="Alfaaz gallery"
                        draggable="false"
                      />
                    </div>
                    <div className="lower1">
                      <img
                        className="galleryImg"
                        src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F12-min.jpg?alt=media&token=5da1ee47-031a-4bcb-bc15-a65e95afbec8'}
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
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F1-min.jpg?alt=media&token=ec758777-655c-4138-b3d0-0aa77d09f268'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={1}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F6-min.jpg?alt=media&token=e5045a0b-1ee2-41c8-b6d4-910271468525'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={2}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F3-min.jpg?alt=media&token=09469799-6123-45b6-8d2f-0b17b1c83dc4'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={3}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F4-min.jpg?alt=media&token=44c86240-2cb9-4f69-9c09-17769027c22f'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={4}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F5-min.jpg?alt=media&token=2a06d515-6b26-46f5-8b3a-d6d879aa04f8'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={5}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F7-min.jpg?alt=media&token=645163a2-358b-4f96-b737-30dfad8540c3'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={6}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F2-min.jpg?alt=media&token=f536d136-f687-4cb7-8a87-caa2404c3b5c'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={7}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F8-min-min.jpg?alt=media&token=c05c583f-8824-40c3-85bb-61f1556a8042'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={8}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F9-min-min.jpg?alt=media&token=0ef5b5e0-7c6f-401b-986a-3c4035d33e61'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={9}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F10-min.jpg?alt=media&token=1c4a87c2-04c4-458a-8ffa-68826dd4631d'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={10}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F11-min.jpg?alt=media&token=a0217fb4-6688-4f2c-9bb2-c3ae98fd2b6b'}
                    draggable="false"
                  />
                </div>
              </Slide>
              <Slide index={11}>
                <div className="mobileGallery__container">
                  <img
                    alt="img"
                    className="mobileGallery__container__img"
                    src={'https://firebasestorage.googleapis.com/v0/b/alfaaz-a71da.appspot.com/o/carousel%2F12-min.jpg?alt=media&token=5da1ee47-031a-4bcb-bc15-a65e95afbec8'}
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
