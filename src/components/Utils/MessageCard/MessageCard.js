import React from "react";
import { Card, Divider, Button } from "antd";
import "antd/dist/antd.css";
import "../ContactCard/ContactCard.css";

const MessageCard = ({ title, extra, uppertext, lowertext, btnText }) => {
  return (
    <div className="site-card-wrapper" style={{ marginLeft: "2%" }}>
      <Card
        hoverable
        title={title}
        headStyle={{
          backgroundColor: "#e8f1ff",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
        extra={extra}
        bordered={true}
        style={{
          borderRadius: "10px",
          width: "100%",
          // backgroundColor: "#d9f4eb",
          backgroundColor: "#f7faff",
          margin: "20px",
          fontFamily: "AvenirTextBlack",
        }}
      >
        <p className="text-center">{uppertext}</p>

        <Divider style={{ border: "1px solid grey" }} />
        <p className="text-center">{lowertext}</p>
        <Button
          style={{
            backgroundColor: "#6984ae",
            color: "white",
            width: "200px",
            marginLeft: "10%",
            marginBottom: "9%",
          }}
        >
          {btnText}
        </Button>
      </Card>
    </div>
  );
};
export default MessageCard;
