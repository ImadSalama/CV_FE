import React from "react";
import { Card, Divider, Button } from "antd";
import "antd/dist/antd.css";
import "./Card.css";

const Cards = ({
  title,
  extra,
  one,
  two,
  three,
  four,
  five,
  six,
  btnText,
  btnColor,
  btnFontColor,
  style,
}) => {
  return (
    <div>
      <Card hoverable title={title} extra={extra} bordered={true} style={style}>
        <p>{one}</p>
        <hr style={{ border: "1px solid grey" }} />
        <p>{two}</p>
        <hr style={{ border: "1px solid grey" }} />
        <p>{three}</p>
        <hr style={{ border: "1px solid grey" }} />
        <p>{four}</p>
        <hr style={{ border: "1px solid grey" }} />
        <p>{five}</p>
        <hr style={{ border: "1px solid grey" }} />
        <p>{six}</p>

        <div>
          <Button
            style={{
              width: "100%",
              backgroundColor: btnColor,
              color: btnFontColor,
              fontFamily: "AvenirTextBlack",
            }}
          >
            {btnText}
          </Button>
        </div>
      </Card>
    </div>
  );
};
export default Cards;
