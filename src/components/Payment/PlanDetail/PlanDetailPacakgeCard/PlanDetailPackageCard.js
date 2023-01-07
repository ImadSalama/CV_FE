import React from "react";
import { Card } from "antd";
import "antd/dist/antd.css";

const PlanDetailPackageCard = ({ title, extra, name, price, bill, onClick, borderColor }) => {
  return (
    <Card
      hoverable
      bordered={true}
      
      style={{
        borderRadius: "2px",
        // marginTop: "2%",
        height: "auto",
        borderColor
      }}
      onClick={onClick}
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
