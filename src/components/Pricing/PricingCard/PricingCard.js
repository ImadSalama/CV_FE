import React from "react";
import Cards from "./Card";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "./Card.css";
const PricingCard = () => {
  return (
    <>
      <p
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontFamily: "RobotoBold",
        }}
      >
        What You Get With Career CV
      </p>
      <div>
        <Row justify="space-around">
          <Col className="my-4" xs={22} sm={22} md={9} lg={9} xl={9}>
            <Cards
              title="Free"
              extra="$0"
              style={{
                borderRadius: "20px",
                boxShadow: "0px 0px 8px 0px rgba(171,171,171,0.5)",
                lineHeight: "20px",
              }}
              one={
                <p>
                  <b>3 professionally Designed Templates</b>
                  <br />
                  Basic options to get you started
                </p>
              }
              two={
                <p>
                  <b>Create 1 CV</b>
                  <br />
                  Customize up to one template
                </p>
              }
              three={
                <p>
                  <b>Download to PDF</b>
                  <br />
                  Access to one CV download
                </p>
              }
              four={
                <p>
                  <b>Career CV branding Added</b>
                  <br />
                </p>
              }
              five={
                <p style={{ color: "#e6e6e6" }}>
                  <b>ATS-Friendly Template</b>
                  <br />
                  Optimized for applicant tracking systems
                </p>
              }
              six={
                <p style={{ color: "#e6e6e6" }}>
                  <b>CV Perfomance Analytics</b>
                  <br />
                  Track views and downloads on your CV
                </p>
              }
              btnText="Sign up Free"
              btnColor="#ECECEC"
              btnFontColor="#0A2C66"
            />
          </Col>
          <Col className="my-4" xs={22} sm={22} md={9} lg={9} xl={9}>
            <Cards
              title="Pro"
              extra="$12/m"
              style={{
                borderRadius: "20px",
                boxShadow: "0px 0px 8px 0px rgba(171,171,171,0.5)",
                background: "rgba(196,221,255,.2)",
                lineHeight: "20px",
              }}
              one={
                <p>
                  <b>20+ Professionally Designed Templates</b>
                  <br />
                  Premium designs to get noticed
                </p>
              }
              two={
                <p>
                  <b>Crete Ultimate Resumes</b>
                  <br />
                  Customize for each job application
                </p>
              }
              three={
                <p>
                  <b>Unlimited PDF Downloads</b>
                  <br />
                  No restrictions or extra fees
                </p>
              }
              four={
                <p>
                  <b>Career CV branding Removed</b>
                  <br />
                </p>
              }
              five={
                <p>
                  <b>ATS-Friendly Template</b>
                  <br />
                  Optimized for applicant tracking systems
                </p>
              }
              six={
                <p>
                  <b>CV Perfomance Analytics</b>
                  <br />
                  Track views and downloads on your CV
                </p>
              }
              btnText="Get Pro Now"
              btnColor="#6984AE"
              btnFontColor="#FFFFFF"
            />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PricingCard;
