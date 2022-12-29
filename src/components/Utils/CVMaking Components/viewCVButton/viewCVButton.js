import React from "react";
import { Button } from "antd";
import { EyeOutlined } from "@ant-design/icons";

const ViewCVButton = ({ previewResume }) => {
  return (
    <>
      <Button
        style={{
          backgroundColor: "#F4F4F4",
          textAlign: "center",
          marginTop: "30px",
          color: "#0A2C66",
          border: "none",
        }}
        onClick={previewResume}
        shape="round"
        icon={<EyeOutlined style={{ all: "unset", color: "#FF4309" }} />}
        size={5}
      >
        Preview
      </Button>
    </>
  );
};

export default ViewCVButton;
