import React, { useContext, useState } from "react";
import { Form, Input, Select, Divider, Button, Row, Col, Modal } from "antd";
import master from "../../../../Assets/icons/Icon awesome-cc-mastercard.png";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./FormData.css";
import { LANGUAGES_INFO } from "./../../../../constants/resumeDetailsConstants";
import { PlanLocalStorageKey, MonthlyPlan } from "../../../../constants/global";
import { PurchasePlanContext } from "../../../../Screens/PayPalScreen/PaypalScreen";
import { useQuery } from "../../../../services/urlQueryService";
import { useHistory } from "react-router-dom";
import { savePayment } from "../../../../actions/userActions";
import { useDispatch } from "react-redux";

const { Option } = Select;

const cientId =
  "AQiPv70oBvPhU3PwEF2FDDVAmkBoCryMQAZZ08qQin6M8YDooPJV5sk2zoYMSEo8MI5ox84JqtDzH3jx";

const FormData = () => {
  const { amount } = useContext(PurchasePlanContext);
  const query = useQuery();
  const history = useHistory();
  const dispatch = useDispatch();
  const getAmount = React.useRef(() => {
    return amount;
  });

  React.useEffect(() => {
    getAmount.current = () => {
      return amount;
    };
  }, [amount]);

  return (
    <Row justify="center">
      <Col xs={18} sm={20} md={20} lg={21} xl={20}>
        <Form>
          {/* <Form.Item>
            <Input placeholder="First Name" id="inp" />
          </Form.Item>

          <Form.Item>
            <Input placeholder="Last Name" id="inp" />
          </Form.Item>

          <Form.Item>
            <Input.Group compact>
              <Form.Item noStyle>
                <Input
                  id="inp"
                  style={{ width: "50%" }}
                  placeholder="Card Number"
                />
              </Form.Item>
              <Form.Item noStyle>
                <Input id="inp" style={{ width: "25%" }} placeholder="MM/YY" />
              </Form.Item>
              <Input id="inp" style={{ width: "25%" }} placeholder="CVV" />
            </Input.Group>
          </Form.Item> */}

          {/* <Row justify="center">
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#0a2c66",
                color: "white",
                height: "50px",
                width: "100%",
                border: "none",
              }}
             
            >
              Pay Now
            </Button>
          </Row> */}
          <Divider>Pay With</Divider>
          <PayPalScriptProvider options={{ "client-id": cientId }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${getAmount.current()}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data) => {
                dispatch(savePayment(getAmount.current()));
                if (!query.get("returnUrl")) {
                  return;
                }
                history.push(`/${query.get("returnUrl")}&fromPayment=true`);
              }}
              fundingSource="paypal"
              className="paypal-btn"
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider>

          <PayPalScriptProvider options={{ "client-id": cientId }}>
            <PayPalButtons
              createOrder={(data, actions) => {
                return actions.order.create({
                  purchase_units: [
                    {
                      amount: {
                        value: `${getAmount.current()}`,
                      },
                    },
                  ],
                });
              }}
              onApprove={(data) => {
                dispatch(savePayment(getAmount.current()));
                if (!query.get("returnUrl")) {
                  return;
                }
                history.push(`/${query.get("returnUrl")}&fromPayment=true`);
              }}
              fundingSource="card"
              className="card-btn"
              style={{ layout: "vertical" }}
            />
          </PayPalScriptProvider>
        </Form>
      </Col>
    </Row>
  );
};

export default FormData;
