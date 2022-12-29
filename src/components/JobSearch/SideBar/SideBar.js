import React from "react";
import { Layout, Divider, Slider } from "antd";
import CheckBox from "../CheckBox/CheckBox";
import "../CheckBox/CheckBox.css";

const { Sider } = Layout;

const SideBar = ({ close, onClick }) => {
  return (
    <>
      <div style={{ marginLeft: "5px", marginRight: "5px", fontFamily: "RobotoHeading" }}>
        <p style={{ paddingTop: "5%", marginBottom: "-5%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>Filters</strong>
            {close && <span style={{ fontSize: "13px", cursor: "pointer" }} onClick={onClick}><i class="fas fa-times"></i></span>}

          </div>
        </p>
        <Divider />
        <div>
          <p style={{ fontSize: "12px", marginBottom: "0px" }}>
            <strong>Min. Salary</strong>
          </p>
          <Slider defaultValue={30} />
          <p style={{ float: "right", fontSize: "11px", marginRight: "3px" }}>
            <strong>50,000-100,000*</strong>
          </p>
        </div>
        <Divider />

        <div>
          <p style={{ fontSize: "12px" }}>
            <strong>Job Title</strong>
          </p>
          <CheckBox name="Sales Executive" number="42" />
          <CheckBox name="Graphics Designer" number="13" />
          <CheckBox name="UI UX Designer" number="45" />
          <CheckBox name="Manager" number="4" />
          <CheckBox name="Seceratery" number="14" />
          <CheckBox name="Lawyer" number="12" />
          <CheckBox name="Director General" number="24" />
        </div>
        <Divider>
          <span style={{ color: "#0a2c66", fontSize: "12px" }}>show more</span>
        </Divider>
        <div>
          <p style={{ fontSize: "12px" }}>
            <strong>City</strong>
          </p>
          <CheckBox name="Karachi" number="1226" />
          <CheckBox name="Faislabad" number="113" />
          <CheckBox name="Sahiwal" number="965" />
          <CheckBox name="Lahore" number="657" />
          <CheckBox name="Islamabad" number="145" />
          <CheckBox name="Layyah" number="1243" />
          <CheckBox name="Murree" number="432" />
        </div></div>
    </>
  );
};

export default SideBar;
