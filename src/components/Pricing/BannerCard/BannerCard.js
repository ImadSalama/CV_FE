import React from "react";
import { Card, Button } from "antd";
import "antd/dist/antd.css";

const BannerCard = ({
  start,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  color,
  firstBtn,
  btnText,
  cardColor,
  checkPage
}) => {
  return (
    <div >
      <Card
        hoverable
        checkPage={checkPage}
        bordered={true}
        style={{
          borderRadius: "20px",
          backgroundColor: cardColor,
          height: "550px"

        }}
      >
        <div>{start}</div>
        <p>{one}</p>
        <p>{two}</p>
        <p>{three}</p>
        <br />
        <br />
        <p>{four}</p>
        <p>{five}</p>
        <p>{six}</p>
        <p>{seven}</p>

        <Button
          style={{
            marginTop: "10%",
            color: "#0A2C66",
            width: "100%",
            borderRadius: "5px",
            fontFamily: "AvenirTextBlack",
            backgroundColor: firstBtn

          }}
        >
          {btnText}
        </Button>
      </Card>
    </div>
  );
};
export default BannerCard;
