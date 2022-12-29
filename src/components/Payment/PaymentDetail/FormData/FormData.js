import React from "react";
import { Form, Input, Select, Divider, Button, Row, Col } from "antd";
import master from "../../../../Assets/icons/Icon awesome-cc-mastercard.png";
import "./FormData.css";

const { Option } = Select;

const FormData = () => {
  return (
    <Row justify="center">
      <Col xs={18} sm={20} md={20} lg={21} xl={20}>
        <Form>
          <Form.Item>
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
          </Form.Item>

          <Form.Item>
            <Input.Group compact>
              <Form.Item noStyle>
                <select
                  id="inp"
                  placeholder="Country"
                  size="large"
                  style={{
                    width: "65%",
                  }}
                >
                  <option id="inp" value="Zhejiang">
                    Zhejiang
                  </option>
                  <option id="inp" value="Jiangsu">
                    Jiangsu
                  </option>
                </select>
              </Form.Item>

              <Form.Item noStyle>
                <Input
                  id="inp"
                  style={{ width: "30%", marginLeft: "5%" }}
                  placeholder="Zip Code"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Row justify="center">
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
              Upgrade Now
            </Button>
          </Row>
          <Divider>OR</Divider>
          <Row justify="center">
            <Button
              htmlType="submit"
              style={{
                backgroundColor: "#ffd08a",
                color: "white",
                height: "50px",
                width: "100%",
                border: "none",
              }}
            >
              <img
                src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_100x26.png"
                alt="PayPal"
                style={{ opacity: 0.7 }}
              />
            </Button>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default FormData;
