import React from "react";
import "./PricingScreen.css";
import PricingBanner from "./../../components/Pricing/PricingBanner/PricingBanner";
import PricingCard from "./../../components/Pricing/PricingCard/PricingCard";
import Questions from "./../../components/Questions/Questions";
import downwardIcon from "./../../Assets/icons/Icon material-keyboard-arrow-down.png";
import MoneyBack from "./../../components/Pricing/MoneyBack/MoneyBack";
import PricingJoinNow from "./../../components/Pricing/PricingJoinNow/PricingJoinNow";
import img from "./../../Assets/images/Path50309.png";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import MyButton from "../../components/Pricing/MyButton/MyButton";
import Slider from "../../components/Pricing/Slider/Slider";
import { Link } from "react-router-dom";

const PricingScreen = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* Pricing Banner */}
      <PricingBanner
        divClassName={true}
        paraStyle={{
          textAlign: "center",
          color: "white",
          fontStyle: "RobotoHeading",
          fontWeight: "bold",
          fontSize: "35px",
        }}
        secondParaStyle={{
          textAlign: "center",
          color: "white",
          fontSize: "15px",
          fontStyle: "AvenirTextBlack",
        }}
        firstBtn="#ECECEC"
        secondBtn="#FFFFFF"
        fontColor="#333333"
        cardColor="#FFFFFF"
        checkPage="pricing"
      />
      <br />
      {/* <div className="text-center mt-5">
        <p>Discover all Pro Features</p>
      </div> */}
      {/* <div
        style={{
          backgroundColor: "#e6e6e6",
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        <img
          src={downwardIcon}
          style={{ paddingTop: "12px", cursor: "pointer" }}
        /> 
      </div> */}
      {/* <div className="container" style={{ marginTop: "10%" }}>
        <MoneyBack />
      </div> */}

      {/* <div className="container" style={{ marginTop: "10%" }}>
        <PricingCard />
      </div> */}
      <div className="mt-5">
        <Slider />
      </div>
      <div style={{ marginTop: "10%" }} className="mt-5">
        <Questions />
      </div>
      <div className="mt-5">
        <PricingJoinNow qoute={"Try Professional Resume Maker Now, Join Now"} />
      </div>
      <Footer />
    </>
  );
};
export default PricingScreen;
