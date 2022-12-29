import React, { useState } from "react";
import { Card, Row, Col } from "antd";
import './JobDescription.css'
const JobDescription = ({
  desgination,
  description,
  date,
  duration,
  salary,
  color
}) => {
  return (
    <>
      <Card style={{ backgroundColor: color }} hoverable>

        {desgination}
        {description}
        <Row>
          <Col>{date}</Col>
          <Col style={{ marginLeft: "10px" }}>{duration}</Col>
          <Col style={{ marginLeft: "10px" }}>{salary}</Col>
        </Row>
      </Card>
    </>
  );
};

export default JobDescription;
