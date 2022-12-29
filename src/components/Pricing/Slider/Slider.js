import React from "react";
import Carousel from "react-grid-carousel";
import "./Slider.css";

const Slider = () => {
  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "auto",
      }}
    >
      <h2
        className="text-center mb-5 head"
        style={{ fontFamily: "RobotoHeadingMedium" }}
      >
        What Members Love About Carrer CV Pro
      </h2>
      <Carousel
        cols={2}
        rows={1}
        gap={20}
        loop
        hideArrow
        showDots={true}
        autoplay={5000}
        mobileBreakpoint="767px"
      >
        <Carousel.Item>
          <p
            className="cmnt"
            style={{
              maxWidth: "600px",
              fontFamily: "AvenirText",
              textAlign: "justify",
              marginLeft: "3%",
            }}
          >
            "React resposive carousel component w/ grid layout to easily create
            a carousel like photo gallery, shopping product card or anything you
            want "
          </p>
          <strong
            className="name"
            style={{
              color: "#0a2c66",
              fontFamily: "AvenirText",
              marginLeft: "3%",
            }}
          >
            Name
          </strong>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src="https://picsum.photos/800/600?random=1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <p
            className="cmnt"
            style={{
              maxWidth: "600px",
              fontFamily: "AvenirText",
              textAlign: "justify",
              marginLeft: "3%",
            }}
          >
            "React resposive carousel component w/ grid layout to easily create
            a carousel like photo gallery, shopping product card or anything you
            want "
          </p>
          <strong
            className="name"
            style={{
              color: "#0a2c66",
              fontFamily: "AvenirText",
              marginLeft: "3%",
            }}
          >
            Name
          </strong>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src="https://picsum.photos/800/600?random=1"
          />
        </Carousel.Item>
        <Carousel.Item>
          <p
            className="cmnt"
            style={{
              maxWidth: "600px",
              fontFamily: "AvenirText",
              textAlign: "justify",
              marginLeft: "3%",
            }}
          >
            "React resposive carousel component w/ grid layout to easily create
            a carousel like photo gallery, shopping product card or anything you
            want"
          </p>
          <strong
            className="name"
            style={{
              color: "#0a2c66",
              fontFamily: "AvenirText",
              marginLeft: "3%",
            }}
          >
            Name
          </strong>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src="https://picsum.photos/800/600?random=1"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
