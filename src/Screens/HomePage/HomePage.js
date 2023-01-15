import React, { useState } from "react";
import "./HomePage.css";
import { Row, Col, Input } from "antd";
import { useHistory } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import LoginWithGoogle from "./../../components/LoginWithGoogle";
import LoginWithLinkedin from "./../../components/LoginWithLinkedin";
import GroupPhotos from "./../../Assets/images/Group11016.png";
import data from "./cvsData";
import GlowButton from "./../../components/Utils/GlowButton";
import Navbar from "./../../components/Navbar/Navbar";
import Footer from "./../../components/Footer/Footer";
import ReviewsCard from "./../../components/Utils/ReviewsCard/ReviewsCard";
import PricingBanner from "./../../components/Pricing/PricingBanner/PricingBanner";
import FAQ from "./../../components/Utils/FAQ/FAQ";
import QuestionIcon from "../../components/Questions/QuestionIcon/QuestionIcon";
import PricingJoinNow from "./../../components/Pricing/PricingJoinNow/PricingJoinNow";
import { Link } from "react-router-dom";
import CreateCVPage from "./../CreateCVPage/CreateCVPage";
import { getISMemeberUser } from "./../../helpers";
import videoBg from "./../../Assets/videoBg.mp4";
import Pagination from "./Pagination";


const HomePage = () => {
  let history = useHistory();
  const [isMemeber] = useState(() => getISMemeberUser());
  const viewCvBtn = (image, name, description, type, index) => {
    if (!isMemeber && index >= 2) {
      history.push("/Payment");
      return;
    }
    history.push("/viewCV", {
      image: image,
      name: name,
      description: description,
      type: type,
    });
  };

  return (
    <div>
      <Navbar></Navbar>
    
     <div className="vid">
         <video src={videoBg} autoPlay loop muted/>
        </div>

      {/* Title Headings Section */}
      <div class="title">
        <Row justify="center">
          <Col lg={9} md={9} sm={13} xs={13} className="headingsColumn">
            <h3 className="professional m-0 p-0">Professional</h3>
            <h1 className="m-0 p-0 mainHeading">Resume Maker</h1>
            <h2 className="m-0 p-0 secondMainHeading">For Profession Lover</h2>
            <p className="TitlePara">
              Professionally designed and employer approved, our CV templates
              have helped people get hired at the world’s best companies. 20+
              customizable template options
            </p>
            <Row justify="start">
              <Col className="py-2" lg={11} md={20} sm={20} xs={20}>
                <LoginWithGoogle
                  style={{}}
                  className="LoginButtons"
                  name="Sign up with Google"
                ></LoginWithGoogle>
              </Col>
              <Col
                className="py-2 buttonSpacing"
                lg={11}
                md={20}
                sm={20}
                xs={20}
              >
                <LoginWithLinkedin
                  className="LoginButtons"
                  name="Sign up with LinkedIn"
                ></LoginWithLinkedin>
              </Col>
            </Row>
          </Col>

          <Col lg={10} md={10} sm={13} xs={13} style={{ paddingTop: "5%" }}>
            <img style={{ maxWidth: "100%" }} src={GroupPhotos}></img>
          </Col>
        </Row>
      </div>

      {/* Templates View Section */}

      <div
        className="container"
        style={{
          padding: "0px 30px",
          justifyContent: "center",
          marginTop: "15%",
        }}
      >
        <div>
          <Row justify="space-around">
            <Col md={15}>
              <h2 className="AllCvHeading">All CV Templates</h2>
              <p className="templeateHeadingInfo">
                View our list of curriculum vitae (CV) templates for every
                profession and career
              </p>
            </Col>
            <Col md={8} sm={20} xs={20}>
              <div className="dropDown">
                <p className="mt-2" style={{ width: "90%", fontSize: "12px" }}>
                  All CV Templates
                </p>
                <DownOutlined
                  className="mt-2"
                  style={{ fontSize: "12px", color: "#FF4309" }}
                />
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            {data.map((d, index) => {
              return (
                <Col
                  key={index}
                  className="mx-auto my-5"
                  lg={5}
                  md={7}
                  sm={11}
                  xs={11}
                >
                  <div className="img-dv">
                    <img
                      className="imageHover"
                      style={{ maxWidth: "100%" }}
                      src={d.image}
                      alt=""
                    />
                    <div className="view-templateDiv"></div>
                    <button
                      onClick={() =>
                        viewCvBtn(d.image, d.name, d.description, d.type, index)
                      }
                      type="button"
                      className="view-template"
                    >
                      {isMemeber || index < 2 ? "View Template" : "Go With Pro"}
                    </button>
                  </div>
                  <h4 className="cvTitle">{d.name}</h4>
                  <p className="cvText">{d.description}</p>
                </Col>
              );
            })}
          </Row>
 <Pagination totalPosts={data.length} 
          postPerPage={postPerPage}
          setCurrentPage ={setCurrentPage} 
          currentPage ={currentPage}
          />
        </div>
      </div>

      {/* Create Cv Options */}
      <div style={{ backgroundColor: "#0A2C66", marginTop: "5%" }}>
        <Row justify="center" style={{ padding: "5% 0" }}>
          <Col lg={7} md={7} sm={20}>
            <img style={{ maxWidth: "100%" }} src={GroupPhotos}></img>
          </Col>
          <Col className="my-4" offset={2} lg={7} md={7} sm={20}>
            <h2 className="CreateCVTextHeading">
              More than 15 customizable Templates
            </h2>
            <ul style={{ color: "#FFFFFF" }} className="pl-3">
              <li className="listItems">
                Choose from more than 15 adaptable templates
              </li>
              <li className="listItems">Access from any device at any time</li>
              <li className="listItems">
                Allow your CV to appear in Google searches
              </li>
              <li className="listItems">
                Make your PDF downloadable from your online CV
              </li>
              <li className="listItems">
                Protect online curriculum vitae access with a password
              </li>
              <li className="listItems">
                Share CV link on your PDF resume, social networks, in a text
                message or email
              </li>
            </ul>

            <Link
              to="/chooseTemplate"
              class="nav-link"
              style={{
                backgroundColor: "#fff",
                fontSize: "12px",
                padding: "2% 6%",
                borderRadius: "5px",
                color: "#0a2c66",
                fontStyle: "AvenirText",
                width: "fit-content",
                boxShadow: "0 5px 15px rgba(255, 255, 255, .4)",
              }}
            >
              {" "}
              Create CV
            </Link>
          </Col>
        </Row>
      </div>

      {/* Reviews */}
      <div>
        <h2
          style={{
            fontFamily: "RobotoHeading",
            fontSize: "25px",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "10%",
          }}
        >
          See what our customers have to say
        </h2>
        <Row justify="center">
          {[1, 2, 3].map((d, index) => {
            return (
              <Col lg={5} md={5} sm={13} xs={18}>
                <ReviewsCard
                  name="Jennifer"
                  category="Student"
                  review="An amazing app. Their templates are easy
to use for an elegant and creative CV. Their
support staff are so kind and friendly, I highly
recommend it. If I could give more than 5
stars, I would give more than 1000!"
                />
              </Col>
            );
          })}
        </Row>
      </div>

 {/* <div style={{ display: "flex", justifyContent: "center" }}> */}
        {/* <div className="mt-5"> */}
          {/* <Input.Search
            // placeholder="input search text"
            // allowClear
            className="addFeedbackBar"
            enterButton="Add your feedback" 
            size="large"
          /> */}
     <div className="mt-5">
        <PricingJoinNow
          qoute={"Add your feedback now"}
          button={
            <Link to="/feedback">
            <MyButton
              content="Add"
              bgColor="#0a2c66"
              color="white"
              width="150px"
              height="40px"
            />
            </Link>
          }

          

          
        />

       


      </div>

      
         {/* </div> */}
      {/* </div> */}
      {/* pricing Banner */}
      <div style={{ marginTop: "10%" }}>
        <PricingBanner
          paraStyle={{
            textAlign: "center",
            fontFamily: "RobotoHeadingMedium",

            fontSize: "30px",
          }}
          secondParaStyle={{
            textAlign: "center",
            fontFamily: "AvenirText",
            fontSize: "15px",
          }}
          firstBtn="#ECECEC"
          secondBtn="#FFFFFF"
          fontColor="#FFFFFF"
          cardColor="#0A2C66"
          checkPage="home"
        />
      </div>

      {/* FrequentlyAskQuestions */}
      <div style={{ marginTop: "10%" }}>
        <Row justify="center">
          <Col lg={7} md={7} sm={20} xs={20}>
            <QuestionIcon></QuestionIcon>
          </Col>
          <Col md={8} sm={20} xs={20}>
            <FAQ></FAQ>
          </Col>
          <Col lg={1} md={0} xs={0}></Col>
        </Row>
      </div>

      {/* Join Now Banner */}
      <div style={{ marginTop: "10%" }}>
        <PricingJoinNow />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
