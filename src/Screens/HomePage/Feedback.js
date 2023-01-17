import { React, useEffect } from "react";
// import FeedBack from "react-feedback-popup";
import "./Feedback.css";
import Navbar from "./../../components/Navbar/Navbar";
import { Row, Col, Input } from "antd";
import ReviewsCard from "./../../components/Utils/ReviewsCard/ReviewsCard";
import "./HomePage.css";
import Footer from "./../../components/Footer/Footer";
import PricingJoinNow from "./../../components/Pricing/PricingJoinNow/PricingJoinNow";
import ReviewForm from "./../../components/Utils/ReviewForm/ReviewForm";
import { getIsLoggedIn } from "../../helpers";
import { fetchReview } from "../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Feedback() {
  const dispatch = useDispatch();

  const reviews = (
    useSelector((state) => state.userReview.reviews) || []
  ).slice(0, 4);

  useEffect(() => {
    dispatch(fetchReview());
  }, []);

  return (
    <div className="Feedback">
      <Navbar></Navbar>
      <PricingJoinNow />
      <ReviewForm></ReviewForm>
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
          {(reviews || []).map((review, index) => {
            return (
              <Col lg={5} md={5} sm={13} xs={18}>
                <ReviewsCard
                  image={review.profile_picture}
                  name={review.name}
                  rate={review.rate}
                  review={review.comment}
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
