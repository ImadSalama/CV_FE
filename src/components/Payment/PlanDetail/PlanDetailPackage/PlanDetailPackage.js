import React from "react";
import { Row, Col, Divider } from "antd";
import PlanDetailPackageCard from "../PlanDetailPacakgeCard/PlanDetailPackageCard";

const PlanDetailPackage = () => {
  return (
    <>
      <Row
        className="mt-3 mb-3"
        style={{ marginLeft: "15%", fontFamily: "AvenirText" }}
      >
        <h5>
          <>Your Plan details</>
        </h5>
      </Row>
      <Row justify="center">
        <Col xs={10} sm={10} md={7} lg={7} xl={8}>
          <PlanDetailPackageCard
            name={
              <h6
                className="text-center"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontSize: "13px",
                  fontFamily: "AvenirText",
                }}
              >
                <>Pro Quartely</>
              </h6>
            }
            price={
              <>
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "AvenirText",
                  }}
                >
                  $12
                  <span
                    style={{
                      color: "grey",
                      fontSize: "10px",
                      fontFamily: "AvenirText",
                    }}
                  >
                    /monthly
                  </span>
                </p>
              </>
            }
            bill={
              <p
                style={{
                  color: "grey",
                  fontSize: "12px",
                  textAlign: "center",
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "AvenirText",
                }}
              >
                <>Billed Quartely</>
              </p>
            }
          />
        </Col>
        <Divider
          type="vertical"
          style={{
            border: "1px solid #0a2c66",
            height: "100px",
            alignSelf: "center",
            marginLeft: "1.7%",
            marginRight: "1.7%",
          }}
        />
        <Col xs={10} sm={10} md={7} lg={7} xl={8}>
          <PlanDetailPackageCard
            name={
              <h6
                className="text-center"
                style={{
                  margin: "0px",
                  padding: "0px",
                  fontSize: "13px",
                  fontFamily: "AvenirText",
                }}
              >
                <>Pro Monthly</>
              </h6>
            }
            price={
              <>
                <p
                  style={{
                    fontSize: "45px",
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: "0px",
                    padding: "0px",
                    fontFamily: "AvenirText",
                  }}
                >
                  $18
                  <span
                    style={{
                      color: "grey",
                      fontSize: "10px",
                      fontFamily: "AvenirText",
                    }}
                  >
                    /monthly
                  </span>
                </p>
              </>
            }
            bill={
              <p
                style={{
                  color: "grey",
                  fontSize: "12px",
                  textAlign: "center",
                  margin: "0px",
                  padding: "0px",
                  fontFamily: "AvenirText",
                }}
              >
                <>Billed Quartely</>
              </p>
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default PlanDetailPackage;
