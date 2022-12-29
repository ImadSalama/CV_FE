import React from "react";
import { Row, Col } from "antd";
import QuestionIcon from "./QuestionIcon/QuestionIcon";
import FAQ from "./../Utils/FAQ/FAQ";
import { useMediaQuery } from 'react-responsive'

const Questions = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' })

  return (
    <div >
      <Row justify="center">

        <Col style={{ textAlign: isTabletOrMobile ? "center" : "" }} lg={7} md={7} sm={20} xs={20}>
          <QuestionIcon></QuestionIcon>
        </Col>
        <Col md={8} sm={20} xs={20}>
          <FAQ></FAQ>
        </Col>
        <Col lg={1} md={0} xs={0}></Col>
      </Row>
    </div>
  );
};
export default Questions;
