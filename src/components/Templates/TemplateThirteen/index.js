import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from "react-circular-progressbar";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
`;
const TopBar = styled.div`
  height: 50px;
  width: 100%;
  background-color: #3f2f36;
`;
const ProfileBox = styled.div`
  background-color: #57444d;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ProfileImg = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;
const ProfileName = styled.h1`
  font-size: 3em;
  font-family: "RobotoBold";

  color: #ffffff;
`;
const ProfileDesg = styled.h3`
  color: #93a0a8;
  font-size: 1.5em;
`;
const ProfileContent = styled.div``;
const ProfileDescription = styled.p`
  font-size: 1em;
  color: #3e4f58;
  padding: 20px 50px;
  background-color: #c8bdc3;
`;
const Bio = styled.div`
  background-color: #f6f6f6;
`;
const Title = styled.h2`
  font-size: 1.3em;
  color: #3e4f58;
  padding: 20px 0;
`;
const WhiteBox = styled.div`
  background-color: white;
  box-shadow: 7px 0px 5px 0px rgba(200, 189, 195, 0.75);
  -webkit-box-shadow: 7px 0px 5px 0px rgba(200, 189, 195, 0.75);
  -moz-box-shadow: 7px 0px 5px 0px rgba(200, 189, 195, 0.75);
  padding: 20px 50px;
`;
const FlexBox = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;
  h3 {
    width: 30%;
  }
`;
const TitleSmall = styled.h3`
  font-size: 0.9em;
  color: #90325a;
  font-weight: 600;
`;
const Descriptions = styled.p`
  font-size: 0.9em;
  color: #90325a;
  font-weight: 400;
`;
const Hobbiesbox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const HobbyImg = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #c8bdc3;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  margin-top: 25px;
  img {
    height: 25px;
    width: 25px;
  }
`;
const RightSide = styled.div`
  padding: 20px 50px;
`;
const WorkBox = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin: 25px 0;
  margin-left: 35px;
  padding-bottom: 20px;
  border-bottom: 1px solid #90325a40;

  :before {
    content: "";
    background: url(${images.circle}) no-repeat;
    background-size: contain;
    position: absolute;
    height: 20px;
    width: 20px;
    top: 0;
    left: -45px;
  }
`;
const WorkText = styled.div``;
const Work = styled.div`
  width: 75%;
  border-left: 1px solid #90325a;
  margin-left: 3px;
`;
const CircleProgress = styled.div`
  display: flex;
  justify-content: space-between;
  width: 85%;
`;
const Footer = styled.div`
  background-color: #57444d;
  display: flex;
  width: 100%;
  padding: 30px 0;
`;
const FooterContent = styled.div`
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
const FooterBox = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const FooterImg = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: #3f2f36;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
`;
const FooterText = styled.h5`
  color: white;
  font-size: 0.9em;
`;
const BottomFooter = styled.div`
  background-color: #3f2f36;
  padding: 30px;
  display: flex;
  justify-content: space-between;
`;
export default ({
  profileImage,
  personalInfo,
  extraFields,
  hobbyName,
  setExtraFields,
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
    <div className="container">
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
      <PDFExport ref={pdfExportComponent} fileName={`Resume`} paperSize="auto">
        <Container ref={componentRef}>
          <TopBar></TopBar>
          <ProfileBox>
            <ProfileContent>
              <ProfileName>
                {personalInfo.firstName || "Ana"}{" "}
                {personalInfo.lastName || " Jones"}
              </ProfileName>
              <ProfileDesg>{personalInfo?.profession}</ProfileDesg>
            </ProfileContent>
            <ProfileImg>
              <img src={profileImage || images.profile} alt="" />
            </ProfileImg>
          </ProfileBox>
          <ProfileDescription>{personalInfo?.history}</ProfileDescription>
          <Bio>
            <div className="my-row">
              <div className="col-4 p-0">
                <WhiteBox>
                  <Title>Personal</Title>
                  <FlexBox>
                    <TitleSmall>Name</TitleSmall>
                    <Descriptions className="ml-5">
                      {personalInfo.firstName || "Ana"}{" "}
                      {personalInfo.lastName || " Jones"}
                    </Descriptions>
                  </FlexBox>
                  <FlexBox>
                    <TitleSmall>Birthday</TitleSmall>
                    <Descriptions className="ml-5">
                      {personalInfo?.dob}
                    </Descriptions>
                  </FlexBox>
                  <FlexBox>
                    <TitleSmall>Relationship</TitleSmall>
                    <Descriptions className="ml-5">
                      {extraFields?.relation}
                    </Descriptions>
                  </FlexBox>
                  <FlexBox>
                    <TitleSmall>Nationality</TitleSmall>
                    <Descriptions className="ml-5">
                      {extraFields?.nationality}
                    </Descriptions>
                  </FlexBox>
                  <FlexBox>
                    <TitleSmall>Languages</TitleSmall>
                    {skillsInfo.language.map((data) => {
                      return <Descriptions>{data + ","}</Descriptions>;
                    })}
                  </FlexBox>
                  <FlexBox>
                    <TitleSmall>Telephone</TitleSmall>
                    <Descriptions className="ml-5">
                      {personalInfo?.phone}
                    </Descriptions>
                  </FlexBox>
                  <Title>Software</Title>
                  {skillsInfo.softwareSkills.map((data) => {
                    return (
                      <FlexBox>
                        <TitleSmall>{data.skillName}</TitleSmall>
                        <ProgressBar
                          completed={data.rating}
                          bgColor="#8f0c3a"
                          height="5px"
                          isLabelVisible={false}
                          baseBgColor="#e2dfe2"
                          className="w-60"
                          margin="0 30px"
                        />
                      </FlexBox>
                    );
                  })}

                  <Title>Hobbies</Title>
                  <Hobbiesbox>
                    {hobbyName.hobbiesData.map((data) => {
                      return (
                        <HobbyImg>
                          <img src={data.icon} alt="" />
                        </HobbyImg>
                      );
                    })}
                  </Hobbiesbox>
                </WhiteBox>
              </div>
              <div className="col-8">
                <RightSide>
                  <Title>Work</Title>
                  <Work>
                    {workExperienceList.map((data) => {
                      return (
                        <WorkBox>
                          <WorkText>
                            <TitleSmall>
                              {data.title} @ {data.employer}
                            </TitleSmall>
                            <Descriptions>{data.description}</Descriptions>
                          </WorkText>
                          <TitleSmall>{data.startDate}</TitleSmall>
                        </WorkBox>
                      );
                    })}
                  </Work>
                  <Title>Prfessional Skills</Title>
                  <CircleProgress>
                    {skillsInfo.professionalSkills.map((data) => {
                      return (
                        <CircularProgressbar
                          styles={{
                            root: {
                              height: 100,
                              width: 100,
                            },
                            path: {
                              stroke: "#57444d",
                            },
                            text: {
                              fontSize: 12,
                              fill: "#57444d",
                            },
                          }}
                          value={data.rating}
                          text={data.name}
                        />
                      );
                    })}
                  </CircleProgress>
                  <Title>Education</Title>
                  <Work>
                    {educationDetailsList.map((data) => {
                      return (
                        <WorkBox>
                          <WorkText>
                            <TitleSmall>
                              {data.studyField} @ {data.instituteName}
                            </TitleSmall>
                            <Descriptions>{data.description}</Descriptions>
                          </WorkText>
                          <TitleSmall>{data.graduationStartDate}</TitleSmall>
                        </WorkBox>
                      );
                    })}
                  </Work>
                </RightSide>
              </div>
            </div>
          </Bio>
          <Footer>
            <FooterContent>
              {personalInfo.socialLinks.map((data) => {
                return (
                  <FooterBox>
                    <FooterImg>
                      <img src={images[data.socialSite]} alt="" />
                    </FooterImg>
                    <FooterText>{data.socialLink}</FooterText>
                  </FooterBox>
                );
              })}
            </FooterContent>
          </Footer>
          <BottomFooter>
            <FooterText>
              {personalInfo?.address} {personalInfo?.city}. Call:{" "}
              {personalInfo?.phone}
              Email: {personalInfo?.email}
            </FooterText>
            <FooterText>{extraFields?.website}</FooterText>
          </BottomFooter>
        </Container>
      </PDFExport>
    </div>
  );
};
