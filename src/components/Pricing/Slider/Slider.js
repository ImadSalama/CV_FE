import React from "react";
import Carousel from "react-grid-carousel";
import istockphoto from "../../../images/istockphoto.jpg";
import istockphoto2 from "../../../images/istockphoto2.jpg";
import images from "../../../images/images.jpg";

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
        {/* What Members Love About Carrer CV Pro */}
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
        {/* <Carousel.Item>
          <p
            className="cmnt"
            style={{
              maxWidth: "600px",
              fontFamily: "AvenirText",
              textAlign: "justify",
              marginLeft: "3%",
            }}
          >
          "Get your Pro CV with our website"
          </p> */}
        <strong
          className="name"
          style={{
            color: "#0a2c66",
            fontFamily: "AvenirText",
            marginLeft: "3%",
          }}
        ></strong>
        {/* </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src={istockphoto}
            
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
            "Get your job searches easier with pro CV templates "
          </p> */}
        <strong
          className="name"
          style={{
            color: "#0a2c66",
            fontFamily: "AvenirText",
            marginLeft: "3%",
          }}
        ></strong>
        {/* </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src={istockphoto2}
          />
        </Carousel.Item> */}
        {/* <Carousel.Item>
          <p
            className="cmnt"
            style={{
              maxWidth: "600px",
              fontFamily: "AvenirText",
              textAlign: "justify",
              marginLeft: "3%",
            }}
          >
            "A professional CV is the beginning of the journey to a suitable job"
          </p> */}
        <strong
          className="name"
          style={{
            color: "#0a2c66",
            fontFamily: "AvenirText",
            marginLeft: "3%",
          }}
        ></strong>
        {/* </Carousel.Item> */}
        {/* <Carousel.Item>
          <img
            className="mb-5 pb-5 pic"
            width="90%"
            height="300px"
            src={images}
          />
        </Carousel.Item> */}
      </Carousel>
    </div>
  );
};

export default Slider;
