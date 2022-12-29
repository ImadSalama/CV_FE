import React from "react";
import { Row, Col } from "antd";
import img from "../../../../Assets/images/Group 11058.png";

const MoneyBackG = () => {
  return (
    <>
      <Row justify="space-around" className="mt-3">
        <Col sm={24} lg={4} xl={1}>
          <img src={img} style={{ height: "80px", marginTop: "24px" }} />
        </Col>

        <Col xs={20} sm={18} md={20} lg={20} xl={16}>
          <p
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginTop: "3%",
              fontFamily: "AvenirText",
            }}
          >
            Money Back Gurantee
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "grey",
              fontFamily: "AvenirText",
            }}
          >
            If you're not satisfied with Career CV for any reason with in your
            30 days, simply email us and we will refund your money.
          </p>
        </Col>
      </Row>
    </>
  );
};
export default MoneyBackG;
