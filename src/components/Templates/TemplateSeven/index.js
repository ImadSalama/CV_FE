import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { useReactToPrint } from "react-to-print";
import { data } from "../../../Assets/icons/Icons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import jsPDF from "jspdf";
import Printer, { print } from "react-pdf-print";
import html2canvas from "html2canvas";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #f3f3f3;
  padding: 40px;
  position: relative;

  :before {
    content: "";
    position: absolute;
    background: url("${images.shape4}");
    height: 100%;
    width: 20%;
    background-size: cover;
    top: 0;
    left: -14%;
  }
  :after {
    content: "";
    position: absolute;
    background: url("${images.shape1}");
    height: 200px;
    width: 200px;
    background-size: cover;
    top: -70px;
    right: 0;
  }
`;
const LightTemplate = styled.div`
  color: #3b2828;
`;
const Profile = styled.div`
  background-color: #ffe32c;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 400px;
`;
const ProfileName = styled.h3`
  font-size: 2em;
  font-weight: bold;
  color: #3b2828;
`;
const ProfileDesg = styled.h4`
  font-size: 1.2em;
  color: #232323;
`;
const PersonalInfo = styled.div`
  background-color: white;
  padding: 40px 20px;
  position: relative;
  z-index: 55555;
`;
const InfoTitle = styled.h3`
  color: #3b2828;
  font-size: 1em;
  opacity: 54%;
  margin-top: 20px;
`;
const InfoDetail = styled.div`
  margin: 30px 0;
`;
const Title = styled.h4`
  color: #3b2828;
  font-size: 0.8em;
  font-weight: bold;
`;
const Description = styled.h6`
  color: #3b2828;
  font-size: 0.6em;
`;
const FullDivider = styled.div`
  height: 1px;
  width: 100%;
  background: #000000;
  opacity: 20%;
  margin: 10px 0;
`;
const DetailBox = styled.div`
  background: white;
  padding: 40px 20px;
  position: relative;
  z-index: 5555;

  h3 {
    opacity: 1;
    margin-bottom: 20px;
  }
`;
const TitleRight = styled.h1`
  font-size: 2.2em;
  color: #ffe32c;
  font-weight: bold;
`;
const AboutMe = styled.p`
  font-size: 1em;
  color: #3b2828;
`;
const ProgressBarMain = styled.div`
  margin-right: 10px;
  h4 {
    text-align: center;
  }
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  height: 70%;
`;
const SkillName = styled.h5`
  color: #3b2828;
  font-size: 1em;
  font-weight: bold;
`;
const FlexBetween = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;
const Badge = styled.div`
  background-color: #ffe32c;
  padding: 5px 0;
  color: #3b2828;
  text-align: center;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  width: 30%;
  font-size: 0.7em;
  position: relative;
`;
const BoxFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;
const Details = styled.div`
  margin-left: 20px;
  width: 58%;
  border-left: 1px solid #c1e3e7;
  padding-left: 20px;
  position: relative;

  :before {
    content: "";
    height: 4px;
    width: 4px;
    border-radius: 50%;
    background-color: black;
    position: absolute;
    top: 5px;
    left: -3px;
  }
`;
const DetailsHeading = styled.h2`
  font-size: 1.2em;
  color: #3b2828;
`;
const DetailsDesg = styled.h4`
  font-size: 1.1em;
  color: #3b2828;
  opacity: 54%;
`;
const DetailsContent = styled.p`
  font-size: 0.8em;
  color: #3b2828;
`;
const IntrestName = styled.span`
  font-size: 1em;
  color: #3b2828;
  padding-left: 20px;
`;
const Interest = styled.div`
  img {
    height: 20px;
    width: 40px;
    margin-bottom: 10px;
  }
`;
export default ({
  profileImage,
  personalInfo,
  workExperienceList,
  educationDetailsList,
  skillsInfo,
  hobbyName,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const reportTemplateRef = useRef(null);
  const history = useHistory();
  const [isMember] = useState(() => getISMemeberUser());
  const handleSubmit = () => {
    if (isMember) {
      html2canvas(componentRef.current).then((canvas) => {
        const img = canvas.toDataURL("image/jpeg", 1);
        const pdf = new jsPDF();
        pdf.addImage(img, "jpeg", 0, 0, 220, 300);
        pdf.save("cv.pdf");
      });
      return;
    }

    history.push(`/Payment?returnUrl=cvform?resume=Seven`);
  };
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };
  return (
    <div className="custom_container">
      <div className="d-flex justify-content-between">
        {/* <button
          type="button"
          className="bg-gray-500 border border-gray-500 p-2 mb-4"
          onClick={exportPDFWithComponent}
        >
          {" "}
          Download Resume{" "}
        </button> */}
        <button
          type="button"
          className="bg-gray-500 border border-gray-500 p-2 mb-4"
          onClick={handleSubmit}
        >
          {" "}
          {isMember ? "Download Resume" : "Go With Pro"}{" "}
        </button>
        <div ref={reportTemplateRef} fileName={`Resume`}></div>
      </div>
      {/* <PDFExport
        ref={pdfExportComponent}
        fileName={`Resume`}
        paperSize="auto"
        margin={40}
      > */}

      <Container ref={componentRef} id="canvas">
        <LightTemplate>
          <div className="my-row">
            <div className="col-4">
              <Profile>
                <ProfileName>
                  {personalInfo.firstName
                    ? `${personalInfo.firstName} ${personalInfo.lastName}`
                    : "Jon Snow"}
                </ProfileName>
                <ProfileDesg>
                  {personalInfo.profession
                    ? personalInfo.profession
                    : "Graphic Designer"}
                </ProfileDesg>
              </Profile>
              <PersonalInfo>
                <InfoTitle>Personal Information</InfoTitle>
                <InfoDetail>
                  <Title>Name</Title>
                  <Description>{personalInfo?.firstName}</Description>
                </InfoDetail>
                <InfoDetail>
                  <Title>D . O . B</Title>
                  <Description>{personalInfo?.dob}</Description>
                </InfoDetail>
                <InfoDetail>
                  <Title>Address</Title>
                  <Description>
                    {personalInfo?.address} , {personalInfo?.city}
                  </Description>
                </InfoDetail>
                <InfoDetail>
                  <Title>Email</Title>
                  <Description>{personalInfo?.email}</Description>
                </InfoDetail>
                <InfoDetail>
                  <Title>Phone</Title>
                  <Description>{personalInfo?.phone}</Description>
                </InfoDetail>
                <FullDivider></FullDivider>
                <InfoTitle>Languages</InfoTitle>
                <InfoDetail>
                  <Description>
                    {skillsInfo.language.map((data) => {
                      return <Description>{data}</Description>;
                    })}
                  </Description>
                </InfoDetail>
              </PersonalInfo>
            </div>
            <div className="col-8">
              <DetailBox>
                <TitleRight>
                  Hello, I’m {personalInfo?.firstName} {personalInfo?.lastName}!
                </TitleRight>
                <AboutMe>{personalInfo?.history}</AboutMe>
                <FullDivider></FullDivider>
                <div className="my-row">
                  <div className="col-6">
                    <InfoTitle>Software Skills</InfoTitle>
                    <FlexBox>
                      {skillsInfo.softwareSkills.map((data) => {
                        return (
                          <ProgressBarMain>
                            <CircularProgressbar
                              styles={{
                                root: {
                                  height: 70,
                                  width: 70,
                                },
                                path: {
                                  stroke: "#FFE32C",
                                  strokeWidth: "5px",
                                },
                                text: {
                                  fontSize: 10,
                                },
                                trail: {
                                  stroke: "white",
                                },
                              }}
                              counterClockwise={true}
                              value={data.rating}
                              text={data.rating + "%"}
                            />
                            <Title>{data.name}</Title>
                          </ProgressBarMain>
                        );
                      })}
                    </FlexBox>
                  </div>
                  <div className="col-6">
                    <InfoTitle>Professional Skills</InfoTitle>
                    {skillsInfo.professionalSkills.map((data) => {
                      return (
                        <>
                          <FlexBetween>
                            <SkillName>{data?.name}</SkillName>
                            <SkillName>{data?.rating}%</SkillName>
                          </FlexBetween>

                          <ProgressBar
                            completed={data?.rating}
                            bgColor="#FFE32C"
                            height="5px"
                            isLabelVisible={false}
                            baseBgColor="#EBF0F1"
                          />
                        </>
                      );
                    })}
                  </div>
                </div>
                <FullDivider style={{ margin: "30px 0" }}></FullDivider>
                <div className="my-row">
                  <div className="col-6">
                    <InfoTitle>Work Experience</InfoTitle>
                    {workExperienceList.map((data) => {
                      return (
                        <BoxFlex>
                          <Badge>
                            {data.currentlyWorkHere == true
                              ? "Current Job"
                              : `${moment(data.startDate).format(
                                  "MM/DD/YYYY"
                                )} - ${moment(data.endDate).format(
                                  "MM/DD/YYYY"
                                )}`}
                          </Badge>

                          <Details>
                            <DetailsHeading>{data.title}</DetailsHeading>
                            <DetailsDesg>{data.employer}</DetailsDesg>
                            <DetailsContent>{data.description}</DetailsContent>
                          </Details>
                        </BoxFlex>
                      );
                    })}
                  </div>
                  <div className="col-6">
                    <InfoTitle>Education</InfoTitle>
                    {educationDetailsList.map((data) => {
                      return (
                        <BoxFlex>
                          <Badge>
                            {moment(data.graduationStartDate).format(
                              "MM/DD/YYYY"
                            )}{" "}
                            -{" "}
                            {moment(data.graduationEndDate).format(
                              "MM/DD/YYYY"
                            )}
                          </Badge>
                          <Details>
                            <DetailsHeading>{data.studyField}</DetailsHeading>
                            <DetailsDesg>{data.instituteName}</DetailsDesg>
                            <DetailsContent>{data.description}</DetailsContent>
                          </Details>
                        </BoxFlex>
                      );
                    })}
                  </div>
                </div>
                <FullDivider></FullDivider>
                <InfoTitle>Interests</InfoTitle>
                <Interest>
                  <div className="my-row">
                    {hobbyName.hobbiesData.map((data) => {
                      return (
                        <div className="col-4">
                          <img src={data.icon} alt="" />
                          <IntrestName>{data.name}</IntrestName>
                        </div>
                      );
                    })}
                  </div>
                </Interest>
              </DetailBox>
            </div>
          </div>
        </LightTemplate>
      </Container>
      {/* </PDFExport> */}
    </div>
  );
};
