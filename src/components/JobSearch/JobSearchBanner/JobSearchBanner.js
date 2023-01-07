import React from "react";
import { Row, Col, InputNumber, Input, Button , Typography} from "antd";
import "./JobSearchBanner.css";
import man from "./backMan.png";
import { UnorderedListOutlined } from "@ant-design/icons";
import heart from "./heart.png";
import front from "./Path50326@2x.png";
import MovingComponent from "react-moving-text"

function JobSearchBanner ({
 
}) {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "calc(100vh - 87px)", backgroundImage: "linear-gradient(140deg, #FF4309 0%, #ccc 50%, #0A2C66 75%)"}}>
    <MovingComponent
    type="rotateSlowDown"
    duration="1800ms"
    delay="0s"
    direction="normal"
    timing="ease"
    iteration="3"
    fillMode="backwards">
    <Typography color="blue" style={{fontSize: 60}}>Comming Soon!</Typography>
  </MovingComponent>
    </div>
      /* <img className="manImage" src={man} alt="ManImage" />
      <img className="frontImage" src={front} alt="blackScreen" /> */

      /* <div className="jobSearchHeadings">
        <h1
          className={isMobile ? "text-center" : "py-5 text-center"}
          style={{
            color: "#F9F9F9",
            fontFamily: "AvenirTextBlack",
            fontSize: isMobile ? "35px" : "",
          }}
        >
          Find a J
          <span
            style={{
              top: isTabletOrMobile ? (isMobile ? "-50%" : "14%") : "10%",
            }}
            className="heart"
          >
            <img src={heart} alt="Heart" />
          </span>
          ob You L<span style={{ color: "red" }}>o</span>ve
        </h1>
        {sidebarDisplay ? (
          <></>
        ) : (
          <div
            className="jobSearchFields"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div style={{ width: isMobile ? "70%" : "60%" }}>
              <Row justify="center">
                <Col xl={9} lg={8} xs={24} sm={24} md={6}>
                  <Input
                    placeholder="Job Title, Skill OR Company"
                    size="large"
                    id="jobSearch"
                  />
                </Col>

                <Col
                  style={{
                    marginLeft: isTabletOrMobile ? "" : "10px",
                    marginTop: isMobile ? "10px" : "",
                  }}
                  xs={12}
                  sm={12}
                  xl={5}
                  md={4}
                  lg={4}
                >
                  <select id="arrows">
                    <option value="Vancouver Island University">
                      United States
                    </option>
                    <option value="Western University">Pakistan</option>
                    <option value="Wilfrid Laurier University">
                      United Kingdom
                    </option>
                    <option value="York University">Lahore Lahore Aye</option>
                  </select>
                </Col>

                <Col
                  style={{
                    marginLeft: isTabletOrMobile ? "" : "10px",
                    marginTop: isMobile ? "10px" : "",
                  }}
                  xs={12}
                  sm={12}
                  xl={5}
                  md={4}
                  lg={4}
                >
                  <select id="arrows">
                    <option value="Vancouver Island University">
                      Min.Salary
                    </option>
                    <option value="Western University">1000</option>
                    <option value="Wilfrid Laurier University">500</option>
                    <option value="York University">Free</option>
                  </select>
                  &nbsp;&nbsp;
                </Col>

                <Col
                  style={isMobile ? {} : { marginLeft: "10px" }}
                  xs={24}
                  sm={24}
                  xl={4}
                  md={4}
                  lg={4}
                >
                  <Button id="jobBtn">Search</Button>
                </Col>
              </Row>
            </div>
          </div>
        )}
      </div>
      {sidebarDisplay ? (
        <>
          <Row justify="center">
            <Col span={isMobile ? 22 : 20}>
              <Input.Search
                placeholder="Job Title, Skill or Company"
                // onSearch={onSearch}
                enterButton
                id="searchBtn"
                style={{ width: "100%" }}
              />
            </Col>
            <Col span={isMobile ? 2 : 4}>
              {isMobile ? (
                <UnorderedListOutlined
                  onClick={setWidth}
                  style={{
                    cursor: "pointer",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    padding: "10px",
                  }}
                />
              ) : (
                <Button
                  onClick={setWidth}
                  style={{
                    borderRadius: "5px",
                    width: "100%",
                    color: "#0A2C66",
                    fontFamily: "AvenirTextBlack",
                    fontSize: "15px",
                  }}
                  icon={<UnorderedListOutlined />}
                  size={5}
                >
                  Filters
                </Button>
              )}
            </Col>
          </Row>
        </>
      ) : (
        <></>
      )} */
  
  );
};

export default JobSearchBanner;
