import React from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import ContactCard from "../ContactCard/ContactCard";
import MessageCard from "../MessageCard/MessageCard";
import img1 from "./../../../Assets/icons/Icon ionic-ios-call.png";
import img2 from "./../../../Assets/icons/Icon feather-message-square.png";
import ContactForm from "./../../../"

const Help = () => {
  return (
    <>
      <p
        style={{
          fontFamily: "AvenirTextBlack",
          fontWeight: "bolder",
        }}
        id="help-head"
      >
        We're here to help
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row justify="center" gutter={40}>
          <Col xs={20} sm={20} md={12} lg={12} xl={12}>
            <ContactCard
              title="Call Now"
              extra={<img src={img1} />}
              uppertext={
                <p>
                  Our friendly customer service team <br />
                  can assist you
                </p>
              }
              country="United States"
              number="123-456-789"
              waitingTime={<p>Average wait time: 2 minutes</p>}
              opening="Opening Time"
              time="10AM - 5PM CST"
            />
          </Col>
          <Col xs={20} sm={20} md={12} lg={12} xl={12}>
            <MessageCard
              title="Send Message"
              extra={<img src={img2} />}
              uppertext={
                <p>
                  Questions? Concerns? We're here to
                  <br />
                  listened and respond!
                </p>
              }
              lowertext={
                <p>
                  Please allow us 2 working days to <br />
                  get back to you
                </p>
              }
              btnText="Contact Form"
              btnProps={{
                href: "#contactForm"
              }}
            />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Help;
