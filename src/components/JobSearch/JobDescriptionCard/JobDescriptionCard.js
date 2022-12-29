import React from "react";
import { Row, Col } from "antd";
import icon from "../../../Assets/icons/grab-logo.png";
import remainder from "../../../Assets/icons/remainder.png";
import notes from "../../../Assets/icons/notes.png";
import dollar from "../../../Assets/icons/dollar.png";
import './../JobDescription/JobDescription.css'
import JobDescription from "../JobDescription/JobDescription";

const JobDescriptionCard = (props) => {
  return (
    <div >
      <JobDescription
        color={props.color}
        desgination={
          <Row  >
            <Col className="pt-1">
              <img src={icon} width={75} />
            </Col>
          &nbsp;&nbsp;
          <Col className="headingBelowText">
              <p >
                <strong style={{ fontFamily: "RobotoHeading", fontSize: "13px" }}>Graphic Designer</strong>

                <p style={{ color: "#C5C5C5", fontFamily: "RobotoHeading", marginBottom: "0px" }}>Layyah, Sahiwal Pakistan</p>
              </p>
            </Col>
          </Row>
        }
        description={
          <p className="headingBelowText" style={{ textAlign: "justify", fontFamily: "AvenirTextBlack", fontSize: "0.9em", marginTop: "0rem" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries,but also the leap into electronic typesetting,
            remaining essentially unchanged.
        </p>
        }
        date={
          <Row style={{ marginTop: "10px" }} >
            <Col >
              <img src={remainder} />
              <span style={{ fontFamily: "AvenirTextBlack", opacity: "0.5", marginTop: "1px" }}>&nbsp; 01-04-2021</span>
            </Col>
          </Row>
        }
        duration={
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <img style={{ backgroundColor: "#333333", opacity: "0.5" }} src={notes} />
              <span style={{ fontFamily: "AvenirTextBlack", opacity: "0.5", marginTop: "1px" }}>&nbsp; 04 Years</span>
            </Col>
          </Row>
        }
        salary={
          <Row style={{ marginTop: "10px" }}>
            <Col>
              <img src={dollar} />
              <span style={{ fontFamily: "AvenirTextBlack", opacity: "0.5", marginTop: "1px" }}>&nbsp; 45000-50000</span>
            </Col>
          </Row>
        }
      /></div>
  );
};
export default JobDescriptionCard;
