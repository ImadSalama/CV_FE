import React from "react";
import { Row, Col } from "antd";
import PlanDetailCard from "../../components/Payment/PlanDetail/PlanDetailCard/PlanDetailCard";
import PlanDetailPackage from "../../components/Payment/PlanDetail/PlanDetailPackage/PlanDetailPackage";
import PaymentForm from "../../components/Payment/PaymentDetail/PaymentForm/PaymentForm";
import MoneyBackG from "../../components/Payment/PaymentDetail/MoneyBackG/MoneyBackG";


export const PurchasePlanContext = React.createContext({amount: 0, updateamount: (amount) => {}});
const PurchasePlanContextContainer = ({children}) => {
  const [amountState, setAmount] = React.useState(0);

  const updateamount = (amount) => {
    setAmount(amount);
  }

  return (
  <PurchasePlanContext.Provider value={{amount: amountState, updateamount}}>
    {children}
  </PurchasePlanContext.Provider>
  )

}

const PayPalScreen = () => {
  return (
    <PurchasePlanContextContainer>
      <Row justify="center">
        <h1
          className="pb-3 text-center"
          style={{ fontFamily: "RobotoHeadingMedium" }}
        >
        Pay Now
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
    </PurchasePlanContextContainer>
  );
};

export default PayPalScreen;
