import React, { useRef, useState } from "react";
import styled from "styled-components";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import images from "./assets";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { useHistory, useLocation } from "react-router-dom";
import { getISMemeberUser } from "../../../helpers";
import moment from "moment";
import jsPDF from "jspdf";
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #d5d8eb;
  padding: 50px;
  position: relative;
`;
const ProfileName = styled.h1`
  font-size: 2em;
  font-family: "Montserrat";
  color: #626db7;
  text-transform: uppercase;
  line-height: 0.938;
  text-align: center;
`;
const ProfileDesg = styled.h3`
  font-size: 1em;
  font-family: "Montserrat";
  color: #626db7;
  text-transform: uppercase;
  line-height: 1;
  text-align: center;
`;
const Divider = styled.div`
  height: 5px;
  width: 100%;
  background-color: #626db7;
  margin: 30px 0;
`;
const Box = styled.div`
  border-radius: 19px;
  background-color: #d5d8eb;
  box-shadow: 0px 0px 28.13px 0.87px #626db7;
  padding: 25px;
  margin: 25px 0;
`;
const Title = styled.h3`
  font-size: 1.5em;
  font-family: "Montserrat";
  color: #626db7;
  text-transform: uppercase;
  line-height: 0.938;
  text-align: left;
  font-weight: bold;
`;
const Content = styled.p`
  font-size: 0.8em;
  font-family: "Roboto";
  color: #626db7;
  line-height: 1.556;
`;
const Summary = styled.div`
  border-right: 1px solid #626db7;
  p {
    width: 75%;
  }
`;
const Profile = styled.div`
  margin-left: auto;
  width: 75%;
`;
const ProfileContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const ProfileDetail = styled.div`
  font-size: 0.8em;
  font-family: "Roboto";
  color: #626db7;
  border-left: 1px solid #626db7;
  padding-left: 20px;
  margin-left: 10px;
`;
const Experience = styled.div`
  margin-top: 20px;
  .my-row .col-4 {
    border-right: 1px solid #626db7;
    padding-left: 80px !important;
  }
  .my-row .col-4:last-child {
    border: 0;
  }
  .my-row .col-4:first-child {
    padding-left: 0px !important;
  }
`;
const TitleSmall = styled.h4`
  font-size: 1em;
  font-weight: bold;
  color: #626db7;
`;
const NumberBullet = styled.li`
  margin-left: 15px;
  list-style: decimal;
  color: #626db7;
  font-size: 0.8em;
`;
const SkillsBox = styled.div`
  display: flex;
  align-items: center;
  span {
    padding: 0px 20px 0 0;
  }
  span:last-child {
    padding: 0 20px;
  }
`;
const Span = styled.span`
  font-size: 0.8em;
  color: #626db7;
  font-weight: bold;
  width: 50%;
`;
const Hobbies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
const HobbiesBox = styled.div`
  max-width: 30%;
  width: 30%;
  margin-right: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export default ({
  profileImage,
  personalInfo,
  workExperienceList,
  extraFields,
  hobbyName,
  educationDetailsList,
  skillsInfo,
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
      const doc = new jsPDF({
        format: "a4",
        unit: "px",
      });

      doc.html(componentRef.current, {
        async callback(doc) {
          await doc.save("CVPDF");
        },
        html2canvas: { scale: 0.4 },
      });
      return;
    }

    history.push(`/Payment?returnUrl=cvform?resume=Four`);
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
        <div ref={reportTemplateRef} fileName={`ResumeSeven`}></div>
      </div>
      {/* <PDFExport ref={pdfExportComponent} fileName={`Resume`} paperSize="auto"> */}
      <Container ref={componentRef}>
        <ProfileName>
          {personalInfo.firstName
            ? `${personalInfo.firstName} ${personalInfo.lastName}`
            : "Ana Jones"}
        </ProfileName>
        <ProfileDesg>
          {personalInfo.profession ? personalInfo.profession : "Web Designer"}
        </ProfileDesg>
        <Divider></Divider>
        <Box>
          <div className="my-row">
            <div className="col-6">
              <Summary>
                <Title>Summary</Title>
                <Content>{personalInfo?.history}</Content>
              </Summary>
            </div>
            <div className="col-6">
              <Profile>
                <Title>Profile</Title>
                <ProfileContent>
                  <img src={images.name} alt="" />
                  <ProfileDetail>
                    {" "}
                    {personalInfo.firstName
                      ? `${personalInfo.firstName} ${personalInfo.lastName}`
                      : "Ana Jones"}
                  </ProfileDetail>
                </ProfileContent>
                <ProfileContent>
                  <img src={images.dob} alt="" />
                  <ProfileDetail>{personalInfo?.dob}</ProfileDetail>
                </ProfileContent>
                <ProfileContent>
                  <img src={images.address} alt="" />
                  <ProfileDetail>
                    {personalInfo.address
                      ? `${personalInfo.address} , ${personalInfo.city} `
                      : "108 W Skillet Ave, Dayton, 50530"}
                  </ProfileDetail>
                </ProfileContent>
                <ProfileContent>
                  <img src={images.phone} alt="" />
                  <ProfileDetail>
                    {personalInfo.phone
                      ? personalInfo.phone
                      : "(609) 5 5555 454 "}
                  </ProfileDetail>
                </ProfileContent>
                <ProfileContent>
                  <img src={images.mail} alt="" />
                  <ProfileDetail>
                    {personalInfo.email
                      ? personalInfo.email
                      : "youremailid@gmail.com"}
                  </ProfileDetail>
                </ProfileContent>
                <ProfileContent>
                  <img src={images.website} alt="" />
                  <ProfileDetail>{extraFields?.website}</ProfileDetail>
                </ProfileContent>
              </Profile>
            </div>
          </div>
        </Box>
        <Box>
          <Title>Experience</Title>
          <Experience>
            <div className="my-row">
              {workExperienceList.map((data) => {
                return (
                  <div className="col-4 p-0">
                    <TitleSmall>{data.title}</TitleSmall>
                    <Content>
                      {data.employer} |{" "}
                      {moment(data.startDate).format("MM/YYYY")} {" - "}
                      {data.currentlyWorkHere == true
                        ? "Present"
                        : moment(data.endDate).format("MM/YYYY")}
                    </Content>
                    <TitleSmall>Major Job Responsibilities:</TitleSmall>
                    <ul>
                      <NumberBullet>{data.description}</NumberBullet>
                    </ul>
                  </div>
                );
              })}
            </div>
          </Experience>
        </Box>
        <Box>
          <Title>Education</Title>
          <Experience>
            <div className="my-row">
              {educationDetailsList.map((data) => {
                return (
                  <div className="col-4 p-0">
                    <TitleSmall>{data.studyField}</TitleSmall>
                    <Content className="font-weight-bold">
                      {data.instituteName}
                    </Content>
                    <Content>
                      {moment(data.graduationStartDate).format("MM/DD/YYYY")} -{" "}
                      {moment(data.graduationEndDate).format("MM/DD/YYYY")} |
                      GPA {data.gpa}
                    </Content>
                  </div>
                );
              })}
            </div>
          </Experience>
        </Box>
        <div className="my-row">
          <div className="col-4 p-0">
            <Box className="mr-5">
              <Title>Skills</Title>
              {skillsInfo.professionalSkills.map((data) => {
                return (
                  <SkillsBox>
                    <Span>{data.name}</Span>
                    <ProgressBar
                      completed={data.rating}
                      bgColor="#626db7"
                      height="3px"
                      isLabelVisible={false}
                      baseBgColor="#EBF0F1"
                      className="w-100"
                    />
                    <Span>{data.rating}%</Span>
                  </SkillsBox>
                );
              })}
            </Box>
          </div>
          <div className="col-4 p-0">
            <Box className="mr-5">
              <Title>Hobbies</Title>
              <Hobbies>
                {hobbyName.hobbiesData.map((data) => {
                  return (
                    <HobbiesBox>
                      <img src={data.icon} alt="" />
                      <Content className="font-weight-bold">
                        {data.name}
                      </Content>
                    </HobbiesBox>
                  );
                })}
              </Hobbies>
            </Box>
          </div>
          <div className="col-4 p-0">
            <Box className="mr-5">
              <Title>References</Title>
              {extraFields.references.map((data) => {
                return (
                  <>
                    <Content className="font-weight-bold m-0">
                      {data.referenceName}
                    </Content>
                    <Content className="font-weight-bold m-0">
                      {data.referenceDesg}
                    </Content>
                    <Content className="m-0">{data.referenceAddress}</Content>
                    <Content className="font-weight-bold m-0">
                      Email: <Span>{data.referenceEmail}</Span>
                    </Content>
                    <Content className="font-weight-bold">
                      Phone: <Span>{data.referencePhone}</Span>
                    </Content>
                  </>
                );
              })}
            </Box>
          </div>
        </div>
      </Container>
      {/* </PDFExport> */}
    </div>
  );
};
