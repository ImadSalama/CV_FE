import React, { useState, useEffect } from "react";
import { Row, Col, Button, Checkbox } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { EyeOutlined } from "@ant-design/icons";
import TextArea from "./../../../components/Utils/CVMaking Components/TextArea/TextArea";
import DateField from "./../../../components/Utils/CVMaking Components/DateField/DateField";
import "./../BasicInfo/BasicInfo.css";
import { getEducationInfo } from "./../../../actions/resumeDetailsActions";

import Navbar from "./../../../components/Navbar/Navbar";
import seven from "./../../ChooseTemplateScreen/images/ten.jpg";
import image from "./../BasicInfo/image.png";
import { useMediaQuery } from "react-responsive";
import Tab from "./../../../components/Utils/CVMaking Components/ActivityBar/Tab";
import NameBadge from "./../../../components/Utils/CVMaking Components/NameBadges/NameBadge";
import InputField from "./../../../components/Utils/CVMaking Components/InputFields/InputField";
import CVMakingButton from "./../../../components/Utils/CVMaking Components/Buttons/CVMakingButton";
import Footer from "./../../../components/Footer/Footer";
import { useQuery } from "../../../services/urlQueryService";
import resumeImages from "../../ChooseTemplateScreen/images";
import UploadButton from "../uploadButton/uploadButton";
import ViewCVButton from "../../../components/Utils/CVMaking Components/viewCVButton/viewCVButton";

const Education = ({
  educationDetailsList,
  setEducationDetailsList,
  profileImage,
  onChangeProfileClick,
  previewResume,
}) => {
  const query = useQuery();
  const queryName = query.get("resume");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const [inputIndex, setInputIndex] = useState(0);
  const resumeImagePath = resumeImages[query.get("resume")];

  const updateEducation = (index, name, value) => {
    let updatedList = [...educationDetailsList];
    updatedList[index][name] = value;
    setEducationDetailsList(updatedList);
  };
  console.log(educationDetailsList);
  const deleteEducation = (index) => {
    let updatedList = [...educationDetailsList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter((x) => x !== removedItem[0]);
    setEducationDetailsList(updatedList);
    setInputIndex(inputIndex - 1);
  };

  return (
    <div className="transitionfade">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row>
            <Col lg={18} md={18} sm={24} xs={24}>
              <h1 className="basicInfoPageHeading">
                Tell us about your Education History
              </h1>
              <h6 className="fieldsMessage">
                Fields with <span style={{ color: "red" }}>*</span> are
                mandatory
              </h6>
            </Col>
            <UploadButton
              profileImage={profileImage}
              onChangeProfileClick={onChangeProfileClick}
            />
          </Row>
        </div>
      </div>
      {/* Input Fields */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row justify={isTabletOrMobile ? "center" : "start"}>
            <Col lg={16} md={16} sm={24} xs={24}>
              <NameBadge name="Education Details"></NameBadge>

              {/* <WorkFields onClick={() => settingList(i)} /> */}
              {educationDetailsList.map((d, i) => {
                return (
                  <>
                    <Row justify="space-between" style={{ marginTop: "5%" }}>
                      <Col span={11}>
                        <InputField
                          placeholder="School Name"
                          suffix={true}
                          type="text"
                          value={d.instituteName}
                          onChange={(e) =>
                            updateEducation(i, "instituteName", e.target.value)
                          }
                        />
                      </Col>

                      <Col span={11}>
                        <InputField
                          placeholder="Study Field"
                          suffix={true}
                          type="text"
                          value={d.studyField}
                          onChange={(e) =>
                            updateEducation(i, "studyField", e.target.value)
                          }
                        />
                      </Col>
                      {queryName == "Eleven" ||
                      queryName == "Ten" ||
                      queryName == "Nine" ? (
                        <>
                          <Col span={11}>
                            <InputField
                              placeholder="GPA"
                              suffix={true}
                              type="text"
                              value={d.gpa}
                              onChange={(e) =>
                                updateEducation(i, "gpa", e.target.value)
                              }
                            />
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                      {queryName == "Eleven" ? (
                        <>
                          <Col span={11}>
                            <InputField
                              placeholder="Degree Program"
                              suffix={true}
                              type="text"
                              value={d.degreeProgram}
                              onChange={(e) =>
                                updateEducation(
                                  i,
                                  "degreeProgram",
                                  e.target.value,
                                )
                              }
                            />
                          </Col>
                        </>
                      ) : (
                        ""
                      )}

                      <Col span={11}>
                        <DateField
                          placeholder="Start Date"
                          value={d.graduationStartDate}
                          onChange={(date, dateString) =>
                            updateEducation(
                              i,
                              "graduationStartDate",
                              dateString,
                            )
                          }
                        />
                      </Col>
                      <Col span={11}>
                        <DateField
                          placeholder="End Date"
                          value={d.graduationEndDate}
                          onChange={(date, dateString) =>
                            updateEducation(i, "graduationEndDate", dateString)
                          }
                        />
                      </Col>
                    </Row>

                    <Row>
                      <Col span={24}>
                        <TextArea
                          placeholder="Add Description"
                          suffix
                          textArea={true}
                          minRows={3}
                          value={d.description}
                          onChange={(e) =>
                            updateEducation(i, "description", e.target.value)
                          }
                        ></TextArea>
                      </Col>
                      {i != 0 && (
                        <Col
                          offset={23}
                          span={1}
                          onClick={() => deleteEducation(i)}
                          style={{
                            cursor: "pointer",
                            zIndex: "1000",
                            position: "relative",
                            right: isMobile ? "-15px" : "-50px",
                            top: "-50px",
                          }}
                          span={1}
                        >
                          <i class="far fa-trash-alt"></i>
                        </Col>
                      )}{" "}
                    </Row>
                  </>
                );
              })}
              {inputIndex < 2 && (
                <Row>
                  <Col style={{ marginTop: "5%" }} span={22}>
                    <p
                      onClick={() => {
                        setInputIndex(inputIndex + 1);
                        setEducationDetailsList([
                          ...educationDetailsList,
                          {
                            instituteName: "",
                            instituteLocation: "",
                            studyField: "",
                            studyStatus: false,
                            graduationStartDate: "",
                            graduationEndDate: "",
                          },
                        ]);
                      }}
                      style={{
                        fontFamily: "AvenirTextBlack",
                        color: "#FF4309",
                        cursor: "pointer",
                      }}
                    >
                      Add More{" "}
                      <i style={{ color: "#0A2C66" }} class="fas fa-plus"></i>
                    </p>
                  </Col>
                </Row>
              )}
            </Col>
            <Col span={2} />
            <Col style={{ textAlign: "center" }} lg={6} md={6} sm={14} xs={14}>
              <img
                className="basicInfoCVImage"
                style={{ maxWidth: "70%" }}
                src={resumeImagePath}
                alt="CV is Loading"
              ></img>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ViewCVButton previewResume={previewResume} />
              </div>
            </Col>
          </Row>

          {/* Back and Next Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "7%",
              marginBottom: "125px",
            }}
          >
            {/* <div>
              <CVMakingButton to="work" name="Back" />
            </div>
            <div>
              <CVMakingButton to="skills" name="Next" />
            </div> */}
          </div>
        </div>
      </div>
      {/* Footer */}
      {/* <Footer bgColor="#FAFBFC" border={true} /> */}
    </div>
  );
};

export default Education;
