import React from "react";
import "./CardTabs.css";
const CardTabs = (props) => {
  return (
    <div className="alignChange">
      <div
        className={
          props.checkPage === "home" ? "mainBorder home" : "mainBorder pricing"
        }
      >
        {/* cardVal={cardVal}} */}
        {props.cardVal && (
          <div onClick={props.onClick} className="innerBorder">
            Monthly
          </div>
        )}
        {!props.cardVal && (
          <div onClick={props.onClick} className="firstCategoryDiv">
            <span className="firstCategory">Monthly</span>
          </div>
        )}

        {!props.cardVal && (
          <div onClick={props.onClick} className="innerBorder">
            Quartely <span style={{ color: "#229954" }}>-33%</span>
          </div>
        )}
        {props.cardVal && (
          <div onClick={props.onClick} className="firstCategoryDiv">
            <span className="firstCategory">Quartely -33%</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardTabs;
