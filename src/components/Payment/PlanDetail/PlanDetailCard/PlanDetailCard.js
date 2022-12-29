import React from "react";
import { Row, Col, Divider } from "antd";
import lockIcon from "../../../../Assets/icons/Icon ionic-md-lock.png";
import PlanDetailPackageCard from "../PlanDetailPacakgeCard/PlanDetailPackageCard";

const PlanDetailCard = () => {
  return (
    <div>
      <Row justify="center">
        <Col xs={21} sm={20} md={15} lg={15} xl={17}>
          <PlanDetailPackageCard
            title={
              <h6 style={{ fontFamily: "AvenirText" }}>
                <strong>Your Plan Detail</strong>
              </h6>
            }
          />
          <PlanDetailPackageCard
            title={
              <p style={{ fontFamily: "AvenirText" }}>
                Professional - Access All Visualcv Pro Features &nbsp;
                <span className="text-center">3x</span>
                <span style={{ float: "right" }}>
                  &nbsp;<strong>$12/Month</strong>
                </span>
              </p>
            }
          />
          <PlanDetailPackageCard
            title={
              <p style={{ fontFamily: "AvenirText" }}>
                Resume Formating Services
                <span style={{ marginLeft: "28%" }}>1x</span>
                <span style={{ float: "right" }}>
                  <strong>$0</strong>
                </span>
              </p>
            }
          />
          <PlanDetailPackageCard
            title={
              <p style={{ fontFamily: "AvenirText" }}>
                <strong>Today's Charge</strong>
                <span style={{ float: "right" }}>
                  <strong>$36.00</strong>
                </span>
              </p>
            }
          />

          <Row>
            <img className="mx-3 mt-2" src={lockIcon} style={{ height: 25 }} />
            <span className="pt-2 pb-3" style={{ fontFamily: "AvenirText" }}>
              <small>This is A Secure and Encrypted Payment</small>
            </span>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default PlanDetailCard;

// <PlanDetailPackageCard
//   title={
//     <>
//       <h6>
//         <strong>Your Plan Detail</strong>
//       </h6>
//       <Divider style={{ border: "1px solid grey" }} />
//       <p>
//         Professional - Access All Visualcv Pro Features &nbsp;
//         <span className="text-center">3x</span>
//         <span style={{ float: "right" }}>
//           &nbsp;<strong>$12/Month</strong>
//         </span>
//       </p>
//       <Divider style={{ border: "1px solid grey" }} />
//       <p>
//         Resume Formating Services
//         <span style={{ marginLeft: "28%" }}>1x</span>
//         <span style={{ float: "right" }}>
//           <strong>$0</strong>
//         </span>
//       </p>
//       <Divider style={{ border: "1px solid grey" }} />
//       <p>
//         <strong>Today's Charge</strong>
//         <span style={{ float: "right" }}>
//           <strong>$36.00</strong>
//         </span>
//       </p>
//     </>
//   }
// />
