import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import { useReactToPrint } from "react-to-print";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  padding: 20px;
`;
const MainBox = styled.div`
  border-bottom: 31px solid #253237;
`;
const HeaderBox = styled.div`
  background-color: #ffeedd;
  padding: 30px;
`;
const ProfileName = styled.h3`
  font-size: 2.25em;
  color: #9381ff;
  text-transform: uppercase;
  letter-spacing: 6px;
`;
const ProfileDesg = styled.h5`
  font-size: 1.1em;
  color: #253237;
  position: relative;
  text-transform: uppercase;
  ::after {
    content: "";
    position: absolute;
    height: 1px;
    width: 10%;
    background-color: #b8b8ff;
    left: 20%;
    top: 12px;
  }
`;
const BodyBox = styled.div`
  background-color: #fff9f3;
  padding: 50px;
  span {
    font-size: 0.6em;
    color: #253237;
    font-weight: 300;
    padding-left: 10px;
  }
`;
const TitleHeading = styled.h5`
  font-size: 0.8em;
  font-weight: 600;
  color: #253237;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const SocialDetail = styled.div``;
const ContentDetail = styled.p`
  font-size: 1em;
  font-weight: normal;
  color: #25323751;
`;

const FullDivider = styled.div`
  height: 1px;
  width: 98%;
  margin: 30px auto;
  background-color: #b8b8ff;
`;
const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-top: 20px;
`;
const Year = styled.h5`
  font-size: 1.1em;
  color: #253237;
  width: 20%;
`;
const ExperienceDetail = styled.div`
  position: relative;
  margin-left: 59px;
  width: 68%;
  :before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: white;
    left: -30px;
    border: 1px solid black;
    top: 6px;
  }
`;
const ContentHeading = styled.h4`
  font-size: 1.1em;
  color: #9381ff;
  font-weight: 600;
  text-transform: uppercase;
`;
const CompanyName = styled.h6`
  font-size: 0.75em;
  color: #253237;
  font-weight: 600;
`;
const SkillCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #253237;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.5em;
  margin: 10px 5px 0 0;
`;
const SkillsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;

  img {
    margin: 10px 30px 0 0;
  }
`;
const SkillsName = styled.p`
  font-size: 0.5em;
  color: #25323751;
  font-weight: normal;
`;
const ProjectsFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;

  p {
    margin-left: 40px;
  }
`;
const Number = styled.h5`
  font-size: 1.37em;
  color: #253237;
  font-weight: 600;
  position: relative;

  span {
    font-size: 1.37em;
    color: #9381ff;
    font-weight: 500;
    padding: 0;
    position: absolute;
    top: -20px;
    left: 20px;
  }
`;

const SocialLinks = styled.div`
  margin-left: 20px;

  h5 {
    color: #909393;
  }
`;
export default ({
  profileImage,
  personalInfo,
  hobbyName,
  extraFields,
  workExperienceList,
  educationDetailsList,
  skillsInfo,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  const history = useHistory();
  const [isMember] = useState(() => getISMemeberUser());
  const handleSubmit = () => {
    if (isMember) {
      handlePrint();
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
      </div>
      <PDFExport
        ref={pdfExportComponent}
        fileName={`Resume`}
        paperSize="auto"
        margin={40}
      >
        <Container ref={componentRef}>
          <MainBox>
            <HeaderBox>
              <ProfileName>
                {personalInfo.firstName
                  ? `${personalInfo.firstName} ${personalInfo.lastName}`
                  : "Melissa cambage"}
              </ProfileName>
              <ProfileDesg>
                {personalInfo.profession
                  ? personalInfo.profession
                  : "Developer"}
              </ProfileDesg>
            </HeaderBox>
            <BodyBox>
              <div className="my-row">
                <div
                  className="col-2"
                  style={{ borderRight: "1px solid #B8B8FF" }}
                >
                  <TitleHeading>Contact</TitleHeading>
                  <SocialDetail>
                    <img src={images.email} alt="" />
                    <span>{personalInfo?.email}</span>
                  </SocialDetail>
                  <SocialDetail>
                    <img src={images.phone} alt="" />
                    <span>{personalInfo?.phone}</span>
                  </SocialDetail>
                  <SocialDetail>
                    <img src={images.location} alt="" />
                    <span>
                      {personalInfo?.address} , {personalInfo.city}
                    </span>
                  </SocialDetail>
                  {personalInfo.socialLinks.map((data) => {
                    return (
                      <SocialDetail>
                        <img src={images[data.socialSite]} alt="" />
                        <span>{data.socialLink}</span>
                      </SocialDetail>
                    );
                  })}
                </div>
                <div className="col-8">
                  <TitleHeading>Introduction</TitleHeading>
                  <ContentDetail>{personalInfo?.history}</ContentDetail>
                </div>
                <FullDivider></FullDivider>
              </div>
              <div className="my-row">
                <div className="col-8">
                  <TitleHeading>Work Experience</TitleHeading>
                  {workExperienceList.map((data) => {
                    return (
                      <FlexBox>
                        <Year>
                          {data?.startDate} - {data?.endDate}
                        </Year>
                        <ExperienceDetail>
                          <ContentHeading>{data?.title}</ContentHeading>
                          <CompanyName>{data?.employer}</CompanyName>
                          <ContentDetail>{data?.description}</ContentDetail>
                        </ExperienceDetail>
                      </FlexBox>
                    );
                  })}
                </div>
                <div className="col-4">
                  <TitleHeading>Software Skills</TitleHeading>
                  <SkillsFlex>
                    {skillsInfo.softwareSkills.map((data) => {
                      return <SkillCircle>{data?.skillName}</SkillCircle>;
                    })}
                  </SkillsFlex>
                  <TitleHeading className="mt-4">Skills</TitleHeading>
                  {skillsInfo.professionalSkills.map((data) => {
                    return (
                      <>
                        {" "}
                        <SkillsName>{data.name}</SkillsName>
                        <ProgressBar
                          completed={data.rating}
                          bgColor="#253237"
                          height="3px"
                          isLabelVisible={false}
                        />
                      </>
                    );
                  })}
                </div>
                <FullDivider></FullDivider>
              </div>
              <div className="my-row">
                <div className="col-8">
                  <TitleHeading>Eduction Details</TitleHeading>
                  {educationDetailsList.map((data) => {
                    return (
                      <FlexBox>
                        <Year>
                          {data?.graduationStartDate} -{" "}
                          {data?.graduationEndDate}
                        </Year>
                        <ExperienceDetail>
                          <ContentHeading>{data?.studyField}</ContentHeading>
                          <CompanyName>{data?.instituteName}</CompanyName>
                          <ContentDetail>{data?.description}</ContentDetail>
                        </ExperienceDetail>
                      </FlexBox>
                    );
                  })}
                </div>
                <div className="col-4">
                  <TitleHeading>Interests</TitleHeading>
                  <SkillsFlex>
                    {hobbyName.hobbiesData.map((data) => {
                      return <img src={data.icon} alt="" />;
                    })}
                  </SkillsFlex>
                </div>
                <FullDivider></FullDivider>
              </div>
              <div className="my-row">
                <div className="col-8">
                  {extraFields.projects.map((data) => {
                    return (
                      <>
                        <TitleHeading>{data.projectName}</TitleHeading>
                        <ProjectsFlex>
                          <Number>
                            {data.projectNumber} <span>+</span>
                          </Number>
                          <ContentDetail>
                            {data.projectDescription}
                          </ContentDetail>
                        </ProjectsFlex>
                      </>
                    );
                  })}
                </div>
                <div className="col-4">
                  <TitleHeading>Social Links</TitleHeading>
                  {personalInfo.socialLinks.map((data) => {
                    return (
                      <FlexBox>
                        <img src={images[data.socialSite]} alt="" />
                        <SocialLinks>
                          <Year>{data?.socialSite}</Year>
                          <ContentDetail>{data.socialLink}</ContentDetail>
                        </SocialLinks>
                      </FlexBox>
                    );
                  })}
                </div>
              </div>
            </BodyBox>
          </MainBox>
        </Container>
      </PDFExport>
    </div>
  );
};
