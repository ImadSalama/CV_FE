import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const PlanDetailPackageCard = ({ title, extra, name, price, bill }) => {
  return (
    <Card
      hoverable
      bordered={true}
      style={{
        borderRadius: "2px",
        // marginTop: "2%",
        height: "auto",
      }}
    >
      <div>{title}</div>
      <div>{extra}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{bill}</div>
    </Card>
  );
};

export default PlanDetailPackageCard;
