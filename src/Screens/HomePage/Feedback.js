import React from 'react';
import FeedBack from 'react-feedback-popup';
import './Feedback.css';
import Navbar from "./../../components/Navbar/Navbar";
import { Row, Col, Input } from "antd";
import ReviewsCard from "./../../components/Utils/ReviewsCard/ReviewsCard";
import "./HomePage.css";
import Footer from "./../../components/Footer/Footer";
import PricingJoinNow from "./../../components/Pricing/PricingJoinNow/PricingJoinNow";
import ReviewForm from "./../../components/Utils/ReviewForm/ReviewForm";

function Feedback() {
    return (

        <div className="Feedback">
            <Navbar></Navbar>
            
            <PricingJoinNow />
            <ReviewForm></ReviewForm>
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


<div style={{ marginTop: "10%" }}>
        <PricingJoinNow />
      </div>
      <Footer />
        </div>
    );
}

export default Feedback;