import React, { useState, useEffect } from "react";
import { Col } from "antd";
import { useDispatch } from "react-redux";
import { getProfilePhoto } from "./../../../actions/resumeDetailsActions";
import "./../BasicInfo/BasicInfo.css";
import image from "./../BasicInfo/image.png";

const UploadButton = ({ profileImage, onChangeProfileClick }) => {
  return (
    <Col
      className="uploadPhoto"
      lg={6}
      md={6}
      sm={24}
      xs={24}
      onClick={onChangeProfileClick}
      style={{ marginBottom: 10 }}
    >
      <div>
        <img
          width={100}
          height={100}
          style={{ borderRadius: "50%" }}
          src={profileImage || image}
        ></img>
      </div>

      {!profileImage && (
        <label className="uploadPhotoText" for="actual-btn">
          Choose your photo
        </label>
      )}
    </Col>
  );
};

export default UploadButton;
