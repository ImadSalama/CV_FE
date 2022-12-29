import React from "react";
import { Row, Col } from "antd";
const AddMore = ({ onClick }) => {
  return (
    <>
      <Row>
        <Col style={{ marginTop: "20px" }} span={22}>
          <p
            onClick={onClick}
            style={{
              fontFamily: "AvenirTextBlack",
              color: "#FF4309",
              cursor: "pointer",
            }}
          >
            Add More <i style={{ color: "#0A2C66" }} class="fas fa-plus"></i>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default AddMore;
