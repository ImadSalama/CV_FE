import React from "react";
import "./../InputFields/InputField.css";
import { DatePicker, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";

const DateField = ({ placeholder, onChange, disabled, value }) => {
  const monthFormat = "MMM-YYYY";
  return (
    <div style={{ padding: "7px 12px" }} id="CVMakingInputField">
      <DatePicker
        onChange={onChange}
        disabled={disabled}
        suffixIcon={
          <Tooltip title="Extra information">
            <span
              style={{
                fontSize: "20px",
                color: "#FF0000",
                fontStyle: "oblique",
              }}
            >
              *
            </span>
          </Tooltip>
        }
        id="dateFields"
        picker="month"
        placeholder={placeholder}
        allowClear
        format={monthFormat}
        style={{ width: "100%", all: "unset" }}
        value={value}
      />
      {/* <Input
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            bordered={false}
            allowClear
            style={textArea ? { paddingBottom: "10%", wordWrap: "break-word" } : {}}
            id="antInputField"
            suffix={suffix ?
                <Tooltip title="Extra information">
                    <span style={{ fontSize: "20px", color: "#FF0000", fontStyle: "oblique" }}>*</span>
                </Tooltip> :
                <Tooltip title="Extra information">
                    <span style={{ fontSize: "20px", color: "#FFFFFF", fontStyle: "oblique" }}>*</span>
                </Tooltip>
            }

        /> */}
    </div>
  );
};
export default DateField;
