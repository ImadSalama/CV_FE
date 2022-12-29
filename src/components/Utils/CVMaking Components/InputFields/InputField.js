import React, { useState, useEffect } from "react";
import "./InputField.css";
import { StarFilled } from "@ant-design/icons";

import { Input, Tooltip } from "antd";
const InputField = ({
  placeholder,
  type,
  onChange,
  suffix,
  textArea,
  value,
  name,
  className,
}) => {
  return (
    <div id="CVMakingInputField">
      <Input
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        bordered={false}
        allowClear
        className={className}
        name={name}
        value={value}
        style={textArea ? { paddingBottom: "10%", wordWrap: "break-word" } : {}}
        id="antInputField"
        suffix={
          suffix ? (
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
          ) : (
            <Tooltip title="Extra information">
              <span
                style={{
                  fontSize: "20px",
                  color: "#FFFFFF",
                  fontStyle: "oblique",
                }}
              >
                *
              </span>
            </Tooltip>
          )
        }
      />
    </div>
  );
};

export default InputField;
