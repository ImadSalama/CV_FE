import React from "react";
import { Row, Col } from "antd";
import PlanDetailCard from "../../components/Payment/PlanDetail/PlanDetailCard/PlanDetailCard";
import PlanDetailPackage from "../../components/Payment/PlanDetail/PlanDetailPackage/PlanDetailPackage";
import PaymentForm from "../../components/Payment/PaymentDetail/PaymentForm/PaymentForm";
import MoneyBackG from "../../components/Payment/PaymentDetail/MoneyBackG/MoneyBackG";

const PayPalScreen = () => {
  return (
    <>
      <Row justify="center">
        <h1
          className="pb-3 text-center"
          style={{ fontFamily: "RobotoHeadingMedium" }}
        >
          Review and Upgrade
        </h1>
      </Row>
      <Row justify="center">
        <Col sm={20} lg={12}>
          <PlanDetailPackage />
          <br />
          <PlanDetailCard />
        </Col>
        <Col sm={20} lg={8}>
          <PaymentForm />
          <MoneyBackG />
        </Col>
      </Row>
    </>
  );
};

export default PayPalScreen;
