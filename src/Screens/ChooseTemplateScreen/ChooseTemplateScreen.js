import React, { useState, useEffect } from "react";
import useWindowDimensions from "../../components/windowDimensions";
import resumeImages from "./images";
import { useDispatch, useSelector } from "react-redux";
import { getChoosenResume } from "../../actions/chooseResumeActions";
import { Link } from "react-router-dom";
import "./styles.css";
import { getISMemeberUser } from "../../helpers";

function ChooseTemplateScreen() {
  const [selectedImage, setSelectedImage] = useState("");
  const [choosenResume, setChoosenResume] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [isMember] = useState(() => getISMemeberUser());
  const { width } = useWindowDimensions();
  const dispatch = useDispatch();

  const data = useSelector((state) => state);
  console.log("data in choose template==>", data);

  useEffect(() => {
    dispatch(getChoosenResume(choosenResume));
  }, [dispatch, choosenResume]);

  return (
    <div className="template-screen">
      <div
        id="myModal"
        className={`modal ${modalStatus ? "d-block" : "d-none"}`}
      >
        <div className={`modal-content ${width <= 420 ? "point-three" : ""}`}>
          <div className="modal-header">
            {width <= 820 ? (
              <>
                <div className="back">
                  <i
                    onClick={() => setModalStatus(false)}
                    class="fa fa-arrow-left"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="text">
                  <h2>Your Resume</h2>
                </div>
                <div>
                  <p>a</p>
                </div>
              </>
            ) : (
              <>
                <span onClick={() => setModalStatus(false)} className="close">
                  &times;
                </span>
                {/* <h2>Your Choosen Template</h2> */}
              </>
            )}
          </div>
          <div className="modal-body">
            <img src={selectedImage} alt="" />
          </div>
        </div>
        {width <= 820 ? (
          <div className="mobile-tools">
            <button onClick={() => setModalStatus(false)}>Close Preview</button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <div className="first-portion">
        <div className="text">
          <p className="first-text">Professional</p>
          <p className="second-text"> Resume Maker</p>
          <p className="third-text">
            {" "}
            For <b>Profession</b> Lover
          </p>
        </div>
        <div className="steps-part">
          <div className="info">
            <p>How To Do :</p>
          </div>
          <div className="steps">
            <div>
              <span className="first-circle current"></span>
              <p>Choose Template</p>
            </div>
            <div>
              <span className="second-circle"></span>
              <p>Fill Up Out</p>
            </div>
            <div>
              <span className="third-circle"></span>
              <p>Setup</p>
            </div>
          </div>
        </div>
      </div>
      <div className="second-portion">
        <div className="container">
          <img src={selectedImage} alt="" />
        </div>
      </div>
      <div className="third-portion">
        <div className="gallery">
          {Object.entries(resumeImages).map(([key, value]) => {
            return (
              <div
                className={`column ${choosenResume === key ? "selected" : ""}`}
                key={key}
              >
                <img
                  src={value}
                  alt=""
                  onClick={() => {
                    setSelectedImage(value);
                    setChoosenResume(key);
                  }}
                />
              </div>
            );
          })}
        </div>
        {width <= 600 ? <p className="select">Select Any Design :</p> : <></>}
        <div className="buttons">
          {selectedImage === "" ? (
            <></>
          ) : (
            <>
              <button onClick={() => setModalStatus(true)} className="preview">
                Preview
              </button>
              {choosenResume === "One" ||
              choosenResume === "Two" ||
              isMember ? (
                <Link
                  to={{
                    pathname: "/cvform",
                    search: `?resume=${choosenResume}`,

                    state: { fromDashboard: true },
                  }}
                >
                  <button className="create">Create Resume</button>
                </Link>
              ) : (
                <Link
                  to={{
                    pathname: "/Payment",
                    state: { fromDashboard: true },
                  }}
                >
                  <button className="create">Go With Pro</button>
                </Link>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChooseTemplateScreen;
