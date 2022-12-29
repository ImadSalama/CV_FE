import React from "react";
import { Row, Col } from "antd";
import MyButton from "./../MyButton/MyButton";
import "./PricingJoinNow.css";

const PricingJoinNow = ({ qoute, button }) => {
  return (
    <div className="bannerCss">
      <Row style={{ padding: "5% 0%" }} justify="center">
        <Col span={16}>
          <p
            style={{
              textAlign: "center",
              color: "Black",
              fontWeight: "bold",
              fontSize: "35px",
            }}
          >
            {qoute}
          </p>
        </Col>
        <Col span={16}>
          {" "}
          <div style={{ textAlign: "center" }}>
            {/* <MyButton
              content="Join Now"
              bgColor="#0a2c66"
              color="white"
              width="150px"
              height="40px"
            /> */}
            {button}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PricingJoinNow;
