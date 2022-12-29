import React from "react";
import { Card, Divider } from "antd";
import "antd/dist/antd.css";
import "./ContactCard.css";

const ContactCard = ({
  title,
  extra,
  uppertext,
  country,
  number,
  waitingTime,
  opening,
  time,
}) => {
  return (
    <div className="site-card-wrapper " style={{ marginRight: "2%" }}>
      <Card
        hoverable
        title={title}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "10px",
          margin: "20px",
          fontFamily: "AvenirTextBlack",
          width: "100%",
        }}
      >
        <p className="text-center">{uppertext}</p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontWeight: 900,
          }}
        >
          <span>{country}</span>
          <span>{number}</span>
        </p>

        <Divider style={{ border: "1px solid grey" }} />
        <p className="text-center">{waitingTime}</p>
        <p
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontWeight: 900,
          }}
        >
          <span>{opening}</span>
          <span>{time}</span>
        </p>
      </Card>
    </div>
  );
};
export default ContactCard;
