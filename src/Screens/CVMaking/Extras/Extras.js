import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import "../BasicInfo/BasicInfo.css";
// import Navbar from "./../../../components/Navbar/Navbar";
import seven from "./../../ChooseTemplateScreen/images/ten.jpg";
import { useMediaQuery } from "react-responsive";
import {
  getExtraFields,
  getProfileSumary,
  getSocialLinksInfo,
} from "./../../../actions/resumeDetailsActions";
import Tab from "./../../../components/Utils/CVMaking Components/ActivityBar/Tab";
import NameBadge from "./../../../components/Utils/CVMaking Components/NameBadges/NameBadge";
import InputField from "./../../../components/Utils/CVMaking Components/InputFields/InputField";
import TextArea from "./../../../components/Utils/CVMaking Components/TextArea/TextArea";
import CVMakingButton from "./../../../components/Utils/CVMaking Components/Buttons/CVMakingButton";
// import Footer from "./../../../components/Footer/Footer";
import AddMore from "./AddMore";
import DateField from "./../../../components/Utils/CVMaking Components/DateField/DateField";

import { Redirect } from "react-router-dom";
import ViewCVButton from "../../../components/Utils/CVMaking Components/viewCVButton/viewCVButton";
import UploadButton from "../uploadButton/uploadButton";
import { useQuery } from "../../../services/urlQueryService";
import resumeImages from "../../ChooseTemplateScreen/images";

const ExtraFields = ({
  extraFields,
  setExtraFields,
  profileImage,
  onChangeProfileClick,
  previewResume,
}) => {
  const query = useQuery();

  const resumeImagePath = resumeImages[query.get("resume")];
  const queryName = query.get("resume");
  const handleChange = ({ target: { value, name, props } }) => {
    if (!name) name = props.name;
    setExtraFields({ ...extraFields, [name]: value });
  };
  const handleLanguages = (i, event, key) => {
    const { name, value } = event.target;

    if (!extraFields[name]) extraFields[name] = [];

    const records = extraFields[name];

    if (key) {
      if (!records[i]) records[i] = {};
      records[i][key] = value;
    } else {
      records[i] = value;
    }

    setExtraFields({ ...extraFields, [name]: records });
  };
  const handleReference = (i, event, key) => {
    const { name, value } = event.target;

    if (!extraFields[name]) extraFields[name] = [];

    const records = extraFields[name];

    if (key) {
      if (!records[i]) records[i] = {};
      records[i][key] = value;
    } else {
      records[i] = value;
    }

    setExtraFields({ ...extraFields, [name]: records });
  };
  const handleAddNew = (name, defaultValue) => {
    if (!extraFields[name]) extraFields[name] = [];

    const records = extraFields[name];

    const filteredRecords = records.concat(defaultValue || "");

    setExtraFields({ ...extraFields, [name]: filteredRecords });
  };
  const handleDelete = (ind, name) => {
    const records = extraFields[name];

    const filteredRecords = records.filter((r, i) => ind !== i);

    setExtraFields({ ...extraFields, [name]: filteredRecords });
  };
  const updateWork = (index, name, value) => {
    let updatedList = [extraFields];
    updatedList[index][name] = value;
    setExtraFields(updatedList);
  };
  const [inputIndex, setInputIndex] = useState(0);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  let dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  console.log(extraFields);
  // General Initialisations

  return (
    <div className="transitionfade">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row>
            <Col lg={18} md={18} sm={24} xs={24}>
              <h1 className="basicInfoPageHeading">Add Extra Fields Here</h1>
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
              {/* Basic Info Fields */}
              <NameBadge name="Extra Fields"></NameBadge>
              <Row justify="space-between" style={{ marginTop: "5%" }}>
                {queryName == "Thirteen" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        placeholder="Relationship"
                        name="relation"
                        suffix={true}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.relation}
                      />
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Nationality"
                        name="nationality"
                        suffix={true}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.nationality}
                      />
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Website"
                        name="website"
                        suffix={false}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.website}
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName == "Twelve" ||
                queryName == "Ten" ||
                queryName == "Nine" ||
                queryName == "Two" ? (
                  <Col span={11}>
                    <InputField
                      placeholder="Website"
                      name="website"
                      suffix={false}
                      onChange={handleChange}
                      type="text"
                      value={extraFields.website}
                    />
                  </Col>
                ) : (
                  ""
                )}
                {queryName == "One" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        placeholder="Martial Status"
                        name="status"
                        suffix={false}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.status}
                      />
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Nationality"
                        name="nationality"
                        suffix={false}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.nationality}
                      />
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Kids"
                        name="kids"
                        suffix={false}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.kids}
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName == "Two" || queryName == "One" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        placeholder="Quote"
                        name="quote"
                        suffix={false}
                        onChange={handleChange}
                        type="text"
                        value={extraFields.quote}
                      />
                    </Col>
                    {extraFields.facts.map((d, i) => {
                      return (
                        <>
                          {queryName == "Two" ? (
                            <Col span={22}>
                              <NameBadge name="Facts"></NameBadge>
                            </Col>
                          ) : (
                            ""
                          )}
                          {queryName == "One" ? (
                            <NameBadge name="Add Your Motivations"></NameBadge>
                          ) : (
                            ""
                          )}
                          <Col span={22}>
                            <InputField
                              placeholder="Add Motivations"
                              name="facts"
                              suffix={false}
                              onChange={(e) =>
                                handleReference(i, e, "factName")
                              }
                              type="text"
                              value={d.factName}
                            />
                          </Col>
                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "facts")}
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                        </>
                      );
                    })}
                    <Col span={22}>
                      <AddMore
                        onClick={() =>
                          handleAddNew("facts", {
                            factName: "",
                          })
                        }
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName == "One" ? (
                  <>
                    {extraFields.frustration.map((d, i) => {
                      return (
                        <>
                          <NameBadge name="Frustrations"></NameBadge>
                          <Col span={22}>
                            <InputField
                              placeholder=" Frustration"
                              name="frustration"
                              suffix={false}
                              onChange={(e) =>
                                handleReference(i, e, "frustrationName")
                              }
                              type="text"
                              value={d.frustrationName}
                            />
                          </Col>
                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "frustration")}
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
                      onClick={() =>
                        handleAddNew("frustration", {
                          frustrationName: "",
                        })
                      }
                    />
                  </>
                ) : (
                  ""
                )}
                {queryName == "One" ? (
                  <>
                    <Col span={22}>
                      <NameBadge name="Scenerio"></NameBadge>
                    </Col>
                    <Col span={22}>
                      <TextArea
                        placeholder=" Scenerio"
                        name="scanarios"
                        onChange={handleChange}
                        value={extraFields.scanarios}
                        minRows={4}
                        suffix
                        textArea={true}
                      ></TextArea>
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName == "One" ? (
                  <>
                    {extraFields.personality.map((d, i) => {
                      return (
                        <>
                          <Col span={22}>
                            <NameBadge name="personality"></NameBadge>
                          </Col>
                          <Col span={22}>
                            <InputField
                              placeholder=" personality"
                              name="personality"
                              suffix={false}
                              onChange={(e) =>
                                handleReference(i, e, "personality")
                              }
                              type="text"
                              value={d.personality}
                            />
                          </Col>
                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "personality")}
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
                      onClick={() =>
                        handleAddNew("personality", {
                          personality: "",
                        })
                      }
                    />
                  </>
                ) : (
                  ""
                )}
                {queryName == "Twelve" ||
                queryName == "Ten" ||
                queryName == "Nine" ? (
                  <>
                    {extraFields.references.map((d, i) => {
                      return (
                        <>
                          <Col span={22}>
                            <NameBadge name="References"></NameBadge>
                          </Col>
                          <Col span={11}>
                            <InputField
                              placeholder="Reference Name"
                              name="references"
                              suffix={false}
                              onChange={(e) =>
                                handleReference(i, e, "referenceName")
                              }
                              type="text"
                              value={d.referenceName}
                            />
                          </Col>
                          <Col span={11}>
                            <InputField
                              placeholder="Reference Email"
                              name="references"
                              suffix={false}
                              onChange={(e) =>
                                handleReference(i, e, "referenceEmail")
                              }
                              type="text"
                              value={d.referenceEmail}
                            />
                          </Col>
                          <Col span={11}>
                            <InputField
                              placeholder="Reference Phone"
                              name="references"
                              suffix={false}
                              type="number"
                              value={d.referencePhone}
                              onChange={(e) =>
                                handleReference(i, e, "referencePhone")
                              }
                            />
                          </Col>
                          {queryName == "Ten" || queryName == "Nine" ? (
                            <>
                              <Col span={11}>
                                <InputField
                                  placeholder="Reference Designaton"
                                  name="references"
                                  suffix={false}
                                  type="text"
                                  value={d.referenceDesg}
                                  onChange={(e) =>
                                    handleReference(i, e, "referenceDesg")
                                  }
                                />
                              </Col>
                              <Col span={11}>
                                <InputField
                                  placeholder="Reference Address"
                                  name="references"
                                  suffix={false}
                                  type="text"
                                  value={d.referenceAddress}
                                  onChange={(e) =>
                                    handleReference(i, e, "referenceAddress")
                                  }
                                />
                              </Col>
                            </>
                          ) : (
                            ""
                          )}
                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "references")}
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                          <Col span={11}></Col>
                          <Col span={5}>
                            <AddMore
                              onClick={() =>
                                handleAddNew("references", {
                                  referenceName: "",
                                  referenceEmail: "",
                                  referencePhone: "",
                                })
                              }
                            />
                          </Col>
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {queryName == "Twelve" || queryName == "Eleven" ? (
                  <>
                    <Col span={22}>
                      <NameBadge name="Trainings"></NameBadge>
                    </Col>
                    {extraFields.trainings.map((d, i) => {
                      return (
                        <>
                          <Col span={10}>
                            <InputField
                              placeholder="Trainings Name"
                              name="trainings"
                              suffix={false}
                              type="text"
                              value={d.trainingName}
                              onChange={(e) =>
                                handleReference(i, e, "trainingName")
                              }
                            />
                          </Col>

                          <Col span={10}>
                            <InputField
                              placeholder="Trainings Year"
                              name="trainings"
                              suffix={false}
                              type="date"
                              value={d.trainingYear}
                              onChange={(e) =>
                                handleReference(i, e, "trainingYear")
                              }
                            />
                          </Col>
                          <Col span={1}></Col>
                          <Col span={10}>
                            <InputField
                              placeholder="Course Name"
                              name="trainings"
                              suffix={false}
                              type="text"
                              value={d.courseName}
                              onChange={(e) =>
                                handleReference(i, e, "courseName")
                              }
                            />
                          </Col>
                          <Col span={10}>
                            <InputField
                              placeholder="Duration"
                              name="trainings"
                              suffix={false}
                              type="text"
                              value={d.duration}
                              onChange={(e) =>
                                handleReference(i, e, "duration")
                              }
                            />
                          </Col>
                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "trainings")}
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                          <Col span={11}></Col>
                          <Col span={5}>
                            <AddMore
                              onClick={() =>
                                handleAddNew("trainings", {
                                  trainingName: "",
                                })
                              }
                            />
                          </Col>
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {queryName == "Six" || queryName == "Four" ? (
                  <>
                    <Col span={22}>
                      <NameBadge name="Projects"></NameBadge>
                    </Col>
                    {extraFields.projects.map((d, i) => {
                      return (
                        <>
                          <Col span={10}>
                            <InputField
                              placeholder="Project Name"
                              name="projects"
                              suffix={false}
                              type="text"
                              value={d.projectName}
                              onChange={(e) =>
                                handleReference(i, e, "projectName")
                              }
                            />
                          </Col>
                          <Col span={10}>
                            <InputField
                              placeholder="Project Description"
                              name="projects"
                              suffix={false}
                              type="text"
                              value={d.projectDescription}
                              onChange={(e) =>
                                handleReference(i, e, "projectDescription")
                              }
                            />
                          </Col>

                          <Col span={10}>
                            <InputField
                              placeholder="Projects Number"
                              name="projects"
                              suffix={false}
                              type="number"
                              value={d.projectNumber}
                              onChange={(e) =>
                                handleReference(i, e, "projectNumber")
                              }
                            />
                          </Col>

                          <Col span={1} style={{ marginTop: "2%" }}>
                            <span
                              onClick={() => handleDelete(i, "projects")}
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                          <Col span={11}></Col>
                          <Col span={22}>
                            <AddMore
                              onClick={() =>
                                handleAddNew("projects", {
                                  trainingName: "",
                                })
                              }
                            />
                          </Col>
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}
                {queryName == "Five" || queryName == "Three" ? (
                  <>
                    <Col span={22}>
                      <NameBadge name="Add Data"></NameBadge>
                    </Col>
                    {extraFields.pye.map((d, i) => {
                      return (
                        <>
                          <Col span={10}>
                            <InputField
                              placeholder="Completed Projects"
                              name="pye"
                              suffix={false}
                              type="number"
                              value={d.projectsCompleted}
                              onChange={(e) =>
                                handleReference(i, e, "projectsCompleted")
                              }
                            />
                          </Col>
                          <Col span={10}>
                            <InputField
                              placeholder="Experiences In Years"
                              name="pye"
                              suffix={false}
                              type="number"
                              value={d.experience}
                              onChange={(e) =>
                                handleReference(i, e, "experience")
                              }
                            />
                          </Col>
                          <Col span={10}>
                            <InputField
                              placeholder="Total Customers"
                              name="pye"
                              suffix={false}
                              type="number"
                              value={d.customer}
                              onChange={(e) =>
                                handleReference(i, e, "customer")
                              }
                            />
                          </Col>
                        </>
                      );
                    })}
                  </>
                ) : (
                  ""
                )}

                {extraFields.interestedLanguage.map((d, i) => {
                  return (
                    <>
                      {queryName == "Four" ? (
                        <>
                          <Col span={10}>
                            <select
                              type="text"
                              name="interestedLanguage"
                              style={{ marginBottom: "20px" }}
                              value={d.intrestName}
                              className="form-control mt-4"
                              onChange={(e) =>
                                handleLanguages(i, e, "intrestName")
                              }
                            >
                              <option value=" Scripting Languages">
                                Scripting Languages
                              </option>
                              <option value="Hacking">Hacking</option>
                              <option value="Tech">Tech</option>
                            </select>
                          </Col>

                          <Col span={10}>
                            <InputField
                              placeholder="Add Languages"
                              suffix={true}
                              type="text"
                              name="interestedLanguage"
                              value={d.skillexperience}
                              onChange={(e) =>
                                handleLanguages(i, e, "intrestLang")
                              }
                            />
                          </Col>
                          <Col offset={1} style={{ marginTop: "7%" }} span={1}>
                            <span
                              onClick={() =>
                                handleDelete(i, "interestedLanguage")
                              }
                              span={1}
                              style={{ cursor: "pointer" }}
                            >
                              <i class="far fa-trash-alt"></i>
                            </span>
                          </Col>
                          <Col span={22}>
                            <AddMore
                              onClick={() =>
                                handleAddNew("interestedLanguage", {
                                  intrestName: "Scripted Language",
                                  intrestLang: "",
                                })
                              }
                            />
                          </Col>
                        </>
                      ) : (
                        ""
                      )}
                    </>
                  );
                })}
              </Row>
              {/* Biography fields */}

              {/* SocialLinks */}
            </Col>

            <Col style={{ textAlign: "center" }} lg={6} md={6} sm={14} xs={14}>
              <img
                className="basicInfoCVImage"
                style={{ maxWidth: "70%" }}
                alt="CV is Loading"
                src={resumeImagePath}
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
              justifyContent: "flex-end",
              marginTop: "7%",
              marginBottom: "125px",
            }}
          >
            {/* <div>
                            <CVMakingButton to="" name="Back" />
                        </div> */}
            {/* <div>
              <CVMakingButton to="work" name="Next" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer bgColor="#FAFBFC" border={true} /> */}
    </div>
  );
};

export default ExtraFields;
