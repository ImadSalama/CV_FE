import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #9b91ff0a;
  padding: 25px;
`;
const MainBox = styled.div`
  background-color: white;
  padding: 25px;
`;
const ProfileDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ProfileName = styled.h1`
  font-size: 45px;
  font-weight: normal;
  color: #1e1950;
  text-transform: uppercase;
  border-bottom: 6px solid #d8e0f2;
`;
const ContentDetail = styled.p`
  font-size: 12px;
  color: #d8e0f2;
  margin: 0;
  padding-left: 10px;
`;

const ProfileDetails = styled.div``;
const ImageSide = styled.div`
  img {
    height: 114px;
    width: 114px;
    border-radius: 50%;
    box-shadow: 0px 9px 5px 0px rgba(216, 224, 242, 0.12);
    -webkit-box-shadow: 0px 9px 5px 0px rgba(216, 224, 242, 0.12);
    -moz-box-shadow: 0px 9px 5px 0px rgba(216, 224, 242, 0.12);
  }
`;
const DevelopmentTitle = styled.div`
  background-color: #d8e0f233;
  padding: 25px;

  h2 {
    font-size: 35px;
    font-weight: 500;
    color: #1e1950;
    text-align: center;
  }
`;
const Heading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1e1950;
  position: relative;
`;
const Title = styled.h4`
  font-size: 14px;
  font-weight: 500;

  color: #3a3095;
`;
const Description = styled.div`
  margin-bottom: 30px;
  width: 75%;
`;
const ProjectBox = styled.div`
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -webkit-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -moz-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  padding: 30px 15px;
  border-radius: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 15px;
  color: #8c8b9140;
  margin-left: 25px;
`;
const ProjectsMain = styled.div`
  img {
    margin-top: 50px;
  }
`;
const ExperienceDivider = styled.div`
  background-color: #f0f3f9;
  height: 1px;
  width: 100%;
  margin: 30px 0;
  position: relative;

  :before {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #ff8a23;
    top: -5px;
    left: 0;
  }
  :after {
    content: "";
    position: absolute;
    height: 10px;
    width: 10px;
    border-radius: 50%;
    background-color: #ff8a23;
    top: -5px;
    left: 50%;
  }
`;
const Footer = styled.div`
  background-color: #f0f3f9;
  padding: 20px 0;
  border-bottom: 31px solid #1e1950;

  p {
    color: #1e1950;
    text-align: center;
  }
`;
const SocialFooter = styled.div`
  display: flex;
  justify-content: center;
`;
export default ({
  profileImage,
  personalInfo,
  extraFields,
  hobbyName,
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
            <ProfileDetail>
              <ProfileDetails>
                <ProfileName>
                  {personalInfo.firstName
                    ? `${personalInfo.firstName} ${personalInfo.lastName}`
                    : "Ana Jones"}
                </ProfileName>
                <div className="d-flex align-items-center">
                  <img src={images.email} alt="" />
                  <ContentDetail>
                    {personalInfo.email
                      ? `${personalInfo.email}`
                      : "example@email.com"}
                  </ContentDetail>
                </div>
                <div className="d-flex align-items-center">
                  <img src={images.phone} alt="" />
                  <ContentDetail>
                    {personalInfo.phone
                      ? `${personalInfo.phone}`
                      : "+12 3456 789"}
                  </ContentDetail>
                </div>
              </ProfileDetails>
              <ImageSide>
                <img src={profileImage || images.profileimg} alt="" />
                <ContentDetail className="orange-color text-center">
                  {personalInfo.profession
                    ? `${personalInfo.profession}`
                    : "Software Engineer"}
                </ContentDetail>
              </ImageSide>
            </ProfileDetail>
          </MainBox>
          <DevelopmentTitle>
            <h2>
              {personalInfo.history
                ? `${personalInfo.history}`
                : ` Development and design of web applications
            for startups and large companies`}
            </h2>
          </DevelopmentTitle>
          <MainBox>
            <div className="my-row">
              <div className="col-4">
                <img src={images.graduation} alt="" />

                <Heading>Skills</Heading>
                {skillsInfo.professionalSkills.map((data) => {
                  return (
                    <div className="d-flex flex-wrap ">
                      <Description>
                        <Title>{data?.skillHeading}</Title>
                        <Title style={{ color: "#8C8B9140" }}>
                          {data?.skillsName}
                        </Title>
                      </Description>
                      <Heading>
                        {data?.skillExperience}{" "}
                        <span className="orange-color">Years</span>
                      </Heading>
                    </div>
                  );
                })}
              </div>
              <div className="col-4">
                <img src={images.heart} alt="" />

                <Heading>Intrest In Languages</Heading>
                {extraFields.interestedLanguage.map((data) => {
                  return (
                    <div className="d-flex flex-wrap justify-content-between">
                      <Description>
                        <Title>{data.intrestName}</Title>
                        <Title style={{ color: "#8C8B9140" }}>
                          {data.intrestLang}
                        </Title>
                      </Description>
                    </div>
                  );
                })}
              </div>
              <div className="col-4">
                <img src={images.heart} alt="" />

                <Heading>Hobbies</Heading>
                <div className="d-flex flex-wrap justify-content-between">
                  <Description>
                    <Title>Hobbies Name</Title>
                    {hobbyName.hobbiesData.map((data) => {
                      return (
                        <>
                          <Title style={{ color: "#8C8B9140" }}>
                            {data.name}
                          </Title>
                        </>
                      );
                    })}
                  </Description>
                </div>
              </div>
            </div>
            <ProjectsMain>
              <div className="my-row">
                {extraFields.projects.map((data) => {
                  return (
                    <>
                      <div className="col-6">
                        <img src={images.projects} alt="" />

                        <Heading>{data.projectName}</Heading>
                        <ProjectBox>
                          <div className="d-flex">
                            <Heading>
                              {data.projectNumber}{" "}
                              <span className="plus">+</span>
                            </Heading>
                            <ProjectDescription>
                              {data.projectDescription}
                            </ProjectDescription>
                          </div>
                        </ProjectBox>
                      </div>
                    </>
                  );
                })}
              </div>
            </ProjectsMain>
          </MainBox>
          <MainBox>
            <div className="my-row">
              <div className="col-6 p-0">
                <Heading>Experiences</Heading>
                <ExperienceDivider></ExperienceDivider>
                <div className="my-row">
                  {workExperienceList.map((data) => {
                    return (
                      <div className="col-6 p-0">
                        <Title>
                          {data?.title} @{data?.employer}
                        </Title>
                        <Title style={{ color: "#8C8B9140" }}>
                          {data?.endDate} - {data?.startDate}
                        </Title>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="col-6 p-0">
                <Heading>Education</Heading>
                <ExperienceDivider></ExperienceDivider>
                <div className="my-row">
                  {educationDetailsList.map((data) => {
                    return (
                      <div className="col-6 p-0">
                        <Title>
                          {data?.studyField} @ {data?.instituteName}
                        </Title>
                        <Title style={{ color: "#8C8B9140" }}>
                          {data?.graduationStartDate} -{" "}
                          {data?.graduationEndDate}
                        </Title>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </MainBox>
          <Footer>
            <div className="my-row">
              {personalInfo.socialLinks?.map((data) => {
                return (
                  <div className="col-4">
                    <SocialFooter>
                      <img src={images[data.socialSite]} alt="" />
                    </SocialFooter>
                    <ContentDetail>{data.socialLink}</ContentDetail>
                  </div>
                );
              })}
            </div>
          </Footer>
        </Container>
      </PDFExport>
    </div>
  );
};
