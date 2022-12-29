import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "antd";
import "./test.css";
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

const BasicInfo = () => {
  const query = useQuery();
  const resumeImagePath = query.get("resume");

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
  let dispatch = useDispatch();
  const isMobile = useMediaQuery({ maxWidth: 600 });
  const a = JSON.parse(localStorage.getItem("personalInfo"));
  // General Initialisations
  const [inputIndex, setInputIndex] = useState(0);
  const basicInfo = useSelector((state) => state.resumeDetails.personalInfo);
  const profileSumm = useSelector(
    (state) => state.resumeDetails.profileSummary
  );
  const socialLinks = useSelector((state) => state.resumeDetails.socialLinks);

  // Personal Info
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profession, setProfession] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [personalInfo, setPersonalInfo] = useState({
    firstName,
    lastName,
    profession,
    city,
    address,
    phone,
    email,
  });

  //seting Loding Data
  useEffect(() => {
    const { firstName, lastName, city, address, profession, phone, email } =
      basicInfo;
    setFirstName(firstName);
    setLastName(lastName);
    setCity(city);
    setProfession(profession);
    setPhone(phone);
    setEmail(email);
    setAddress(address);
    setProfileSummary(profileSumm);
    setSocialLinksList(socialLinks);
  }, []);
  // Use Effect for personalInfo
  useEffect(() => {
    setPersonalInfo({
      firstName,
      lastName,
      profession,
      city,
      address,
      phone,
      email,
    });
  }, [firstName, lastName, profession, city, address, phone, email]);
  useEffect(() => {
    dispatch(getPersonalInfo(personalInfo));
  }, [dispatch, personalInfo]);

  // Profile Summary
  const [profileSummary, setProfileSummary] = useState("");
  useEffect(() => {
    dispatch(getProfileSumary(profileSummary));
  }, [dispatch, profileSummary]);

  // Social Links
  const [socialLinksList, setSocialLinksList] = useState([]);
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
  const [socialLinksInfo, setSocialLinksInfo] = useState({
    socialLinksList,
  });

  // Use Effect for Social Links
  useEffect(() => {
    setSocialLinksInfo({
      socialLinksList,
    });
  }, [socialLinksList]);

  useEffect(() => {
    dispatch(getSocialLinksInfo(socialLinksInfo));
  }, [dispatch, socialLinksInfo]);

  return (
    <>
      {/* <Navbar border={true} /> */}
      {/* Tabs */}
     

      {/* Heading and UploadButton */}
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
            <UploadButton />
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
              <Row justify="center" style={{ marginTop: "5%" }}>
                <Col span={11}>
                  <InputField
                    placeholder="First Name"
                    suffix={true}
                    type="text"
                    value={basicInfo.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </Col>

                <Col span={2}></Col>
                <Col span={11}>
                  <InputField
                    placeholder="Last Name"
                    suffix={true}
                    value={basicInfo.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                  />
                </Col>

                <Col style={{ marginTop: "7%", marginBottom: "5%" }} span={24}>
                  <InputField
                    placeholder="Profession"
                    suffix={true}
                    onChange={(e) => setProfession(e.target.value)}
                    value={basicInfo.profession}
                    type="text"
                  />
                </Col>
                <Col span={11}>
                  <InputField
                    placeholder="City"
                    suffix={true}
                    onChange={(e) => setCity(e.target.value)}
                    value={basicInfo.city}
                    type="text"
                  />
                </Col>
                <Col span={2}></Col>
                <Col span={11}>
                  <InputField
                    placeholder="State/Province"
                    suffix={true}
                    onChange={(e) => setAddress(e.target.value)}
                    value={basicInfo.address}
                    type="text"
                  />
                </Col>

                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                  <InputField
                    placeholder="Phone Number"
                    suffix={true}
                    onChange={(e) => setPhone(e.target.value)}
                    value={basicInfo.phone}
                    type="text"
                  />
                </Col>
                <Col
                  style={{ marginTop: "7%", marginBottom: "7%" }}
                  span={2}
                ></Col>
                <Col style={{ marginTop: "7%", marginBottom: "7%" }} span={11}>
                  <InputField
                    placeholder="Email Address"
                    suffix={true}
                    onChange={(e) => setEmail(e.target.value)}
                    value={basicInfo.email}
                    type="text"
                  />
                </Col>
              </Row>
              {/* Biography fields */}
              <NameBadge name="Biography"></NameBadge>
              <Row>
                <Col style={{ marginTop: "5%", marginBottom: "7%" }} span={24}>
                  <TextArea
                    value={profileSumm}
                    onChange={(e) => setProfileSummary(e.target.value)}
                    placeholder="Brief History"
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
                  <Row justify="center" style={{ marginTop: "5%" }}>
                    <Col span={11}>
                      <InputField
                        placeholder="Social Website"
                        type="text"
                        value={d.socialSite}
                        onChange={(e) =>
                          updateSocialLinks(i, "socialSite", e.target.value)
                        }
                      />
                    </Col>
                    <Col span={2}></Col>
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
              {inputIndex < 2 && (
                <Row>
                  <Col style={{ marginTop: "5%" }} span={22}>
                    <p
                      onClick={() => {
                        setInputIndex(inputIndex + 1);
                        setSocialLinksList([
                          ...socialLinksList,
                          { socialSite: "", socialLink: "" },
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
                <ViewCVButton />
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
          
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <Footer bgColor="#FAFBFC" border={true} /> */}
    </>
  );
};

export default BasicInfo;
