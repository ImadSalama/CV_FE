import React from "react";
import "./NameBadge.css";

const NameBadge = ({ name, margin, additional }) => {
  return (
    <>
      <div className={margin ? "NameBadgeWithMargin" : "NameBadge"}>
        {name}
        {additional && (
          <span
            style={{
              marginLeft: "10px",
              fontFamily: "RobotoHeadingMedium",
              opacity: "0.7",
              fontSize: "13px",
              marginTop: "15px",
            }}
          >{`(${additional})`}</span>
        )}
      </div>
    </>
  );
};

export default NameBadge;
