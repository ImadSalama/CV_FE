import React from "react";
import img from "./../../Assets/images/Group 11091.png";
import ContactForm from "./../../components/Utils/ContactForm/ContactForm";
import Help from "./../../components/Utils/Help/Help";
import Questions from "./../../components/Questions/Questions";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import { Row, Col } from "antd";
import PricingJoinNow from "../../components/Pricing/PricingJoinNow/PricingJoinNow";

const ContactScreen = () => {
  return (
    <>
      <Navbar />
      {/* <img
        src={img}
        alt="banner"
        style={{ maxWidth: "100%", backgroundSize: "contain" }}
      /> */}
      <PricingJoinNow
        qoute={
          <span>
            <h2>Let us Know if you need any help!</h2>
            <small style={{ fontSize: "14px" }}>
              Our customer happiness agents will assist you any issues you're
              facing
            </small>
          </span>
        }
      />
      <div style={{ marginTop: "5%" }}>
        <Help />
      </div>
      {/* <div style={{ marginTop: "5%" }}>
        <Questions />
      </div> */}
      <Row justify="center" style={{ backgroundColor: "#fafbfc", borderTopStyle:"solid",borderWidth:"thin",borderColor:"rgb(105, 132, 174)" }}>
        <Col>
          <ContactForm />
        </Col>
      </Row>
      <Footer />
    </>
  );
};
export default ContactScreen;
