import React, { useState } from "react";
import { Row, Col, Button, Card } from "antd";

const JobApply = ({
  desgination,
  date,
  duration,
  salary,
  applyBtn,
  saveBtn,
  description,
}) => {
  return (
    <>
      <Card hoverable>
        <div style={{ position: "absolute", right: 30 }}>
          <i class="fas fa-times" />
        </div>
        <Row>
          <Col>{desgination}</Col>
        </Row>
        <Row>
          <Col>{date}</Col>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Col>{duration}</Col>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Col>{salary}</Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <Button
              style={{
                backgroundColor: "#0a2c66",
                color: "white",
                border: "none",
                borderRadius: "5px",
                width: "100px",
              }}
            >
              {applyBtn}
            </Button>
          </Col>
          &nbsp;&nbsp;&nbsp;
          <Col>
            <Button
              style={{
                backgroundColor: "white",
                color: "#0a2c66",
                borderColor: "#0a2c66",
                borderRadius: "5px",
                width: "100px",
              }}
            >
              {saveBtn}
            </Button>
          </Col>
        </Row>
        <Row>
          <Col> {description}</Col>
        </Row>
      </Card>
    </>
  );
};

export default JobApply;
