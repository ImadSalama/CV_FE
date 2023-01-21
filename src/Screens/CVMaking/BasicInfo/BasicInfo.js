import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import "./BasicInfo.css";
// import Navbar from "./../../../components/Navbar/Navbar";
import seven from "./../../ChooseTemplateScreen/images/ten.jpg";
import { useMediaQuery } from "react-responsive";
import {
  getPersonalInfo,
  getProfileSumary,
  getSocialLinksInfo,
} from "./../../../actions/resumeDetailsActions";
import Tab from "./../../../components/Utils/CVMaking Components/ActivityBar/Tab";
import NameBadge from "./../../../components/Utils/CVMaking Components/NameBadges/NameBadge";
import InputField from "./../../../components/Utils/CVMaking Components/InputFields/InputField";
import TextArea from "./../../../components/Utils/CVMaking Components/TextArea/TextArea";
import CVMakingButton from "./../../../components/Utils/CVMaking Components/Buttons/CVMakingButton";
// import Footer from "./../../../components/Footer/Footer";
import { Redirect } from "react-router-dom";
import ViewCVButton from "../../../components/Utils/CVMaking Components/viewCVButton/viewCVButton";
import UploadButton from "../uploadButton/uploadButton";
import { useQuery } from "../../../services/urlQueryService";
import resumeImages from "../../ChooseTemplateScreen/images";
import DateField from "../../../components/Utils/CVMaking Components/DateField/DateField";

const BasicInfo = ({
  personalInfo,
  setPersonalInfo,
  extraFields,
  setExtraFields,
  profileImage,
  onChangeProfileClick,
  previewResume,
}) => {
  const query = useQuery();
  console.log("extra Fields", extraFields);
  const resumeImagePath = resumeImages[query.get("resume")];
  const queryName = query.get("resume");
  const handleChange = ({ target: { value, name, props } }) => {
    if (!name) name = props.name;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  console.log(personalInfo);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  let dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  // General Initialisations
  const [inputIndex, setInputIndex] = useState(0);
  // Social Links
  const [socialLinksList, setSocialLinksList] = useState([{}]);

  const updateSocialLinks = (index, name, value) => {
    let updatedList = [...socialLinksList];
    updatedList[index][name] = value;
    setSocialLinksList(updatedList);
  };
  const deleteSocialLinks = (index) => {
    let updatedList = [...socialLinksList];
    let removedItem = updatedList.splice(index, 1);
    updatedList.filter((x) => x !== removedItem[0]);
    setSocialLinksList(updatedList);
    setInputIndex(inputIndex - 1);
  };
  const updateWork = (name, value) => {
    setPersonalInfo({ ...personalInfo, [name]: value });
  };
  console.log("preview Resume", previewResume);
  useEffect(() => {
    setPersonalInfo({ ...personalInfo, socialLinks: socialLinksList });
  }, [socialLinksList]);

  return (
    <div className="transitionfade">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="basicInfoDislay">
          <Row>
            <Col lg={18} md={18} sm={24} xs={24}>
              <h1 className="basicInfoPageHeading">
                What’s the best way for employers to contact you?
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
              {/* Basic Info Fields */}
              <NameBadge name="Basic Information"></NameBadge>
              <Row justify="space-between" style={{ marginTop: "5%" }}>
                <Col span={11}>
                  <InputField
                    placeholder="First Name"
                    suffix={true}
                    type="text"
                    name="firstName"
                    value={personalInfo.firstName}
                    onChange={handleChange}
                  />
                </Col>

                <Col span={11}>
                  <InputField
                    placeholder="Last Name"
                    name="lastName"
                    suffix={true}
                    value={personalInfo.lastName}
                    onChange={handleChange}
                    type="text"
                  />
                </Col>

                <Col span={24}>
                  <InputField
                    placeholder="Profession"
                    name="profession"
                    suffix={true}
                    onChange={handleChange}
                    value={personalInfo.profession}
                    type="text"
                  />
                </Col>
                {queryName != "One" &&
                queryName != "Four" &&
                queryName != "Eight" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        name="city"
                        placeholder="City"
                        suffix={true}
                        onChange={handleChange}
                        value={personalInfo.city}
                        type="text"
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName != "One" &&
                queryName != "Four" &&
                queryName != "Eight" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        placeholder="State/Province"
                        name="address"
                        suffix={true}
                        onChange={handleChange}
                        value={personalInfo.address}
                        type="text"
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName != "Eight" ? (
                  <>
                    <Col span={11}>
                      <InputField
                        placeholder="Phone Number"
                        name="phone"
                        suffix={true}
                        onChange={handleChange}
                        value={personalInfo.phone}
                        type="text"
                      />
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Email Address"
                        name="email"
                        suffix={true}
                        onChange={handleChange}
                        value={personalInfo.email}
                        type="text"
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
                {queryName == "Thirteen" ||
                queryName == "Ten" ||
                queryName == "Nine" ||
                queryName == "One" ||
                queryName == "Seven" ? (
                  <>
                    <Col span={11}>
                      <DateField
                        placeholder="DOB"
                        name="dob"
                        value={personalInfo.dob}
                        onChange={(date, dateString) =>
                          updateWork("dob", dateString)
                        }
                      />
                    </Col>
                  </>
                ) : (
                  ""
                )}
              </Row>
              {/* Biography fields */}
              <NameBadge name="Biography"></NameBadge>
              <Row>
                <Col style={{ marginTop: "5%", marginBottom: "7%" }} span={24}>
                  <TextArea
                    value={personalInfo.history}
                    onChange={handleChange}
                    placeholder="Brief History"
                    name="history"
                    minRows={4}
                    suffix
                    textArea={true}
                  ></TextArea>
                </Col>
              </Row>
              {/* SocialLinks */}
              <NameBadge name="Add Social Links"></NameBadge>
              {socialLinksList.map((d, i) => {
                return (
                  <Row justify="space-between" style={{}}>
                    <Col span={11}>
                      <select
                        type="text"
                        value={d.socialSite}
                        name="socialimage"
                        className="form-control mt-4"
                        onChange={(e) =>
                          updateSocialLinks(i, "socialSite", e.target.value)
                        }
                      >
                        {queryName == "Six" ||
                        queryName == "Eight" ||
                        queryName == "Twelve" ? (
                          <>
                            <option value="ln">LinkedIn</option>
                            <option value="behance">Behance</option>
                            <option value="facebook">Facebook</option>
                            <option value="twitter">Twitter</option>
                          </>
                        ) : (
                          <>
                            <option value="ln">LinkedIn</option>
                            <option value="behance">Behance</option>
                            {queryName == "Three" ? (
                              <>
                                <option value="drible">Dribble</option>
                              </>
                            ) : (
                              <>
                                <option value="twitter">Twitter</option>
                              </>
                            )}
                          </>
                        )}
                      </select>
                    </Col>
                    <Col span={11}>
                      <InputField
                        placeholder="Social Links"
                        type="text"
                        value={d.socialLink}
                        onChange={(e) =>
                          updateSocialLinks(i, "socialLink", e.target.value)
                        }
                      />
                    </Col>
                    <Col
                      offset={23}
                      span={1}
                      onClick={() => deleteSocialLinks(i)}
                      style={{
                        cursor: "pointer",
                        zIndex: "1000",
                        position: "relative",
                        right: isMobile ? "-23px" : "-50px",
                        top: "-35px",
                      }}
                      span={1}
                    >
                      <i class="far fa-trash-alt"></i>
                    </Col>
                  </Row>
                );
              })}
              {inputIndex < 4 && (
                <Row>
                  <Col style={{}} span={22}>
                    <p
                      onClick={() => {
                        setInputIndex(inputIndex + 1);
                        setSocialLinksList([
                          ...socialLinksList,
                          { socialSite: "ln", socialLink: "" },
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
            <h6 className="fieldsMessage">
              Please make sure to fill all{" "}
              <span style={{ color: "red" }}>*</span>
              mandatory fields
            </h6>
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

export default BasicInfo;
