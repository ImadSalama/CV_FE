import React from "react";
import { Checkbox, Row, Col } from "antd";
import "./CheckBox.css";

const CheckBox = ({ name, number }) => {
  return (
    <div>
      <Row justify="space-between">
        <Col>
          <Checkbox style={{ fontSize: "12px" }}>{name}</Checkbox>
        </Col>
        <Col style={{ fontSize: "12px", marginRight: "5px" }}>{number}</Col>
      </Row>
    </div>
  );
};

export default CheckBox;
