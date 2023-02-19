import React, { useState } from "react";
import { Row, Col, Modal, Button, Checkbox } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import TextArea from "./../../../components/Utils/CVMaking Components/TextArea/TextArea";
import DateField from "./../../../components/Utils/CVMaking Components/DateField/DateField";
import "./../BasicInfo/BasicInfo.css";
import Navbar from "./../../../components/Navbar/Navbar";
import seven from "./../../ChooseTemplateScreen/images/ten.jpg";
import image from "./../BasicInfo/image.png";
import { useMediaQuery } from "react-responsive";
import Tab from "./../../../components/Utils/CVMaking Components/ActivityBar/Tab";
import NameBadge from "./../../../components/Utils/CVMaking Components/NameBadges/NameBadge";
import InputField from "./../../../components/Utils/CVMaking Components/InputFields/InputField";
import CVMakingButton from "./../../../components/Utils/CVMaking Components/Buttons/CVMakingButton";
import Footer from "./../../../components/Footer/Footer";
import AddMore from "./AddMore";
import { useQuery } from "../../../services/urlQueryService";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

import ImageModal from "./../../../components/ImageModal/ImageModal";
import resumeImages from "../../ChooseTemplateScreen/images";
import UploadButton from "../uploadButton/uploadButton";
import ViewCVButton from "../../../components/Utils/CVMaking Components/viewCVButton/viewCVButton";
const SkillBar = withStyles({
  root: {
    color: "#0B1D79",
    height: 4,
    width: "75%",
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#0B1D79",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);
const Education = ({
  profileImage,
  onChangeProfileClick,
  hobbyName,
  setHobbyName,
  previewResume,
  skillsInfo,
  setSkillsInfo,
}) => {
  const query = useQuery();
  const queryName = query.get("resume");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  const isMobile = useMediaQuery({ maxWidth: 600 });

  const [isModalVisible, setIsModalVisible] = useState(false);
  const resumeImagePath = resumeImages[query.get("resume")];

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleChange = (i, event, key) => {
    const { name, value } = event.target;

    if (!skillsInfo[name]) skillsInfo[name] = [];

    const records = skillsInfo[name];

    if (key) {
      if (!records[i]) records[i] = {};
      records[i][key] = value;
    } else {
      records[i] = value;
    }

    setSkillsInfo({ ...skillsInfo, [name]: records });
  };

  const handleDelete = (ind, name) => {
    const records = skillsInfo[name];

    const filteredRecords = records.filter((r, i) => ind !== i);

    setSkillsInfo({ ...skillsInfo, [name]: filteredRecords });
  };
  const handleDeleteHobbies = (ind, name) => {
    const records = hobbyName[name];

    const filteredRecords = records.filter((r, i) => ind !== i);

    setHobbyName({ ...hobbyName, [name]: filteredRecords });
  };
  const handleAddNew = (name, defaultValue) => {
    if (!skillsInfo[name]) skillsInfo[name] = [];

    const records = skillsInfo[name];

    const filteredRecords = records.concat(defaultValue || "");

    setSkillsInfo({ ...skillsInfo, [name]: filteredRecords });
  };
  console.log(hobbyName);
  return (
    <div className="transitionfade">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row>
            <Col lg={18} md={18} sm={24} xs={24}>
              <h1 className="basicInfoPageHeading">
                Tell us about your Skills
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
              <Row style={{ marginTop: "7%" }}>
                <Col span={isMobile ? 22 : 11}>
                  <Row>
                    {skillsInfo.professionalSkills.map((d, i) => {
                      return (
                        <>
                          {queryName == "Four" ? (
                            <>
                              {/* <NameBadge name="Add Professional Skills"></NameBadge>

                              <select
                                type="text"
                                name="professionalSkills"
                                style={{ marginBottom: "20px" }}
                                className="form-control mt-4"
                                onChange={(e) =>
                                  handleChange(i, e, "skillHeading")
                                }
                              >
                                <option value="Object programming & frameworks">
                                  Object programming & frameworks
                                </option>
                                <option value="Design Integration">
                                  Design Integration
                                </option>
                                <option value="Linux">Linux</option>
                              </select> */}
                              {/* <Col span={22}>
                                <InputField
                                  placeholder="Skill Experience"
                                  suffix={true}
                                  type="number"
                                  name="professionalSkills"
                                  value={d.skillexperience}
                                  onChange={(e) =>
                                    handleChange(i, e, "skillExperience")
                                  }
                                />
                              </Col>
                              <Col span={22}>
                                <InputField
                                  placeholder="Skill Name"
                                  suffix={true}
                                  type="text"
                                  name="professionalSkills"
                                  value={d.skillname}
                                  onChange={(e) =>
                                    handleChange(i, e, "skillsName")
                                  }
                                />
                              </Col> */}
                            </>
                          ) : (
                            <>
                              {queryName != "One" ? (
                                <Col span={22}>
                                  <InputField
                                    placeholder="Professional Skills"
                                    suffix={true}
                                    type="text"
                                    name="professionalSkills"
                                    value={d.name}
                                    onChange={(e) => handleChange(i, e, "name")}
                                  />
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    name="professionalSkills"
                                    value={d.rating}
                                    onChange={(e) =>
                                      handleChange(i, e, "rating")
                                    }
                                    className="w-100"
                                  />
                                </Col>
                              ) : (
                                ""
                              )}
                            </>
                          )}
                          {/* {queryName != "One" ? (
                            <Col
                              offset={1}
                              style={{ marginTop: "7%" }}
                              span={1}
                            >
                              <span
                                onClick={() =>
                                  handleDelete(i, "professionalSkills")
                                }
                                span={1}
                                style={{ cursor: "pointer" }}
                              >
                                <i class="far fa-trash-alt"></i>
                              </span>
                            </Col>
                          ) : (
                            ""
                          )} */}
                        </>
                      );
                    })}
                    {/* {queryName != "One" ? (
                      <AddMore
                        onClick={() =>
                          handleAddNew("professionalSkills", {
                            name: "",
                            rating: 50,
                          })
                        }
                      />
                    ) : (
                      ""
                    )} */}
                  </Row>
                  <Row>
                    <Col span={22}>
                      <NameBadge name="Hobbies"></NameBadge>
                    </Col>
                    <Col span={22}>
                      <div style={{ display: "flex", marginTop: "20px" }}>
                        <Button
                          style={{
                            backgroundColor: "#F4F4F4",
                            textAlign: "center",
                            color: "#0A2C66",
                            border: "none",
                            padding: "0px 15px",
                          }}
                          shape="round"
                          onClick={showModal}
                          icon={
                            <EyeOutlined
                              style={{ all: "unset", color: "#FF4309" }}
                            />
                          }
                          size={1}
                        >
                          View Hobbies
                        </Button>
                      </div>
                      <Modal
                        title={
                          <div style={{ color: "#0a2c66", fontSize: "20px" }}>
                            <strong>Select Hobby</strong>
                          </div>
                        }
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        width={650}
                        footer={null}
                      >
                        <ImageModal
                          hobbyName={hobbyName}
                          setHobbyName={setHobbyName}
                          setIsModalVisible={setIsModalVisible}
                        />
                      </Modal>
                    </Col>

                    <Col span={2}></Col>
                    <Col span={22}>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                        }}
                      >
                        {hobbyName.hobbiesData.map((data, index) => {
                          return (
                            <>
                              <span
                                onClick={() =>
                                  handleDeleteHobbies(index, "hobbiesData")
                                }
                                span={1}
                                style={{ cursor: "pointer" }}
                              >
                                <i class="far fa-trash-alt"></i>
                              </span>
                              <div className="mr-2 mt-3">
                                <img className="mr-1" src={data.icon} />
                                <p>{data?.name}</p>
                              </div>
                            </>
                          );
                        })}
                      </div>
                    </Col>
                  </Row>
                  {/* <Row style={{ marginBottom: "10%" }}>
                    {skillsInfo.degreeProgram.map((d, i) => {
                      return (
                        <>
                          <Col span={22}>
                            <InputField
                              placeholder="Degree Program"
                              suffix={true}
                              type="text"
                              name="degreeProgram"
                              value={d}
                              onChange={(e) => handleChange(i, e)}
                            />
                          </Col>
                          <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                            <span
                              onClick={() => {
                                handleDelete(i, "degreeProgram");
                              }}
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                        </>
                      );
                    })}

                    <AddMore onClick={() => handleAddNew("degreeProgram")} />
                  </Row> */}
                  {queryName != "Eight" && queryName != "One" ? (
                    <>
                      <Col span={22}>
                        <NameBadge name="Language"></NameBadge>
                      </Col>
                      <Row>
                        {skillsInfo.language?.map((d, i) => {
                          return (
                            <>
                              <Col span={22}>
                                <InputField
                                  placeholder="Language"
                                  suffix={true}
                                  type="text"
                                  name="language"
                                  value={d}
                                  onChange={(e) => handleChange(i, e)}
                                />
                              </Col>
                              <Col
                                offset={1}
                                style={{ marginTop: "7%" }}
                                span={1}
                              >
                                <span
                                  onClick={() => {
                                    handleDelete(i, "language");
                                  }}
                                  span={1}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i class="far fa-trash-alt"></i>
                                </span>
                              </Col>
                            </>
                          );
                        })}

                        <AddMore onClick={() => handleAddNew("language")} />
                      </Row>
                    </>
                  ) : (
                    ""
                  )}
                </Col>
                <Col span={2}></Col>
                <Col span={isMobile ? 22 : 11}>
                  {queryName != "Eight" &&
                  queryName != "Three" &&
                  queryName != "Two" &&
                  queryName != "One" ? (
                    <>
                      <NameBadge name="Add Software Skills"></NameBadge>
                      <Row>
                        {skillsInfo.softwareSkills.map((d, i) => {
                          return (
                            <>
                              <Col span={22}>
                                <InputField
                                  placeholder="Software Skill"
                                  suffix={true}
                                  type="text"
                                  name="softwareSkills"
                                  value={d.skillName}
                                  onChange={(e) =>
                                    handleChange(i, e, "skillName")
                                  }
                                />
                                {queryName != "Six" ? (
                                  <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    name="softwareSkills"
                                    value={d.rating}
                                    onChange={(e) =>
                                      handleChange(i, e, "rating")
                                    }
                                    className="w-100"
                                  />
                                ) : (
                                  ""
                                )}
                              </Col>
                              <Col
                                offset={1}
                                style={{ marginTop: "7%" }}
                                span={1}
                              >
                                <span
                                  onClick={() => {
                                    handleDelete(i, "softwareSkills");
                                  }}
                                  span={1}
                                  style={{ cursor: "pointer" }}
                                >
                                  <i class="far fa-trash-alt"></i>
                                </span>
                              </Col>
                            </>
                          );
                        })}

                        <AddMore
                          onClick={() => handleAddNew("softwareSkills")}
                        />
                      </Row>
                    </>
                  ) : (
                    " "
                  )}
                </Col>
              </Row>
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
                <ViewCVButton previewResume={previewResume}></ViewCVButton>
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
              <CVMakingButton name="Back" />
            </div> */}
            {/* <div>
              <CVMakingButton name="Next" />
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
