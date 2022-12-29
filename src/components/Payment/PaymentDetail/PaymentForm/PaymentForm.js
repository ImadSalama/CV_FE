import React from "react";
import { Row, Col } from "antd";
import FormData from "../FormData/FormData";
import visa from "../../../../Assets/icons/Icon metro-visa.png";
import master from "../../../../Assets/icons/Icon awesome-cc-mastercard.png";
import american from "../../../../Assets/icons/Icon payment-american-express.png";

const PaymentForm = () => {
  return (
    <>
      <Row justify="space-around" className="mt-3">
        <Col>
          <h6 className="pb-4" style={{ fontFamily: "AvenirText" }}>
            <>Your Plan details &nbsp;&nbsp;&nbsp;</>
          </h6>
        </Col>
        <Col>
          <Row justify="space-between" style={{ fontFamily: "AvenirText" }}>
            <Col>
              <img src={visa} />
              &nbsp;&nbsp;
            </Col>
            <Col>
              <img src={master} />
              &nbsp;&nbsp;
            </Col>
            <Col>
              <img src={american} />
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify="center">
        <Col sm={24} lg={24}>
          <FormData />
        </Col>
      </Row>
    </>
  );
};
export default PaymentForm;
