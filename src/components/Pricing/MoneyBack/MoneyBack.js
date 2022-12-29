import React from "react";
import { Col, Row } from "antd";
import iconImg from "./../../../Assets/images/Group 11058.png";
import './MoneyBack.css'
const MoneyBack = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d9f4eb",
          marginTop: "10%",
          padding:"2% 0%"
        }}
        className="moneyBack"
      >
        <Row justify="center">
          <Col lg={4} md={4} sm={15} xs={15}>
            <img style={{ maxWidth: "100%" }} src={iconImg} />
          </Col>
          <Col span={20}>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                marginTop: "5%",
                marginBottom:"1%",
                fontFamily: "AvenirTextBlack"

              }}
            >
              Money Back Gurantee
            </p>
            <p className="MoneyBackText" style={{ fontSize: "12px",
             color: "grey",
             fontFamily:"AvenirTextBlack"}}>
              If you're not satisfied with Career CV for any reason with in your
              30 days, simply email us and we will refund your money.
              
              No strings attached.
            </p>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default MoneyBack;
