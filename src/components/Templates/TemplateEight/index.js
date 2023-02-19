import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import "react-circular-progressbar/dist/styles.css";
import ProgressBar from "@ramonak/react-progress-bar";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useQuery } from "../../../services/urlQueryService";

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  position: relative;
`;
const MainSec = styled.div`
  background: url(${images.bg}) no-repeat;
  background-size: contain;
  width: 100%;
  padding: 150px 0 30px 0;
`;
const ProfileName = styled.h2`
  font-size: 1.37em;
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
  line-height: 1.182;
  text-align: center;
  text-transform: uppercase;
  z-index: 19;
`;
const ProfileDesg = styled.h4`
  font-size: 0.6em;
  font-family: "Montserrat";
  color: rgb(255, 255, 255);
  line-height: 3;
  text-align: center;
  z-index: 22;
  text-transform: uppercase;
`;
const SocialLinks = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: space-around;
`;

const SocialName = styled.span`
  font-size: 0.7em;
  color: rgb(255, 255, 255);
  font-weight: bold;
  line-height: 2.333;
  text-align: left;
  padding-left: 20px;
`;
const Anchor = styled.a``;
const Title = styled.h2`
  font-size: 1.18em;
  font-family: "Montserrat";
  color: rgb(1, 1, 1);
  font-weight: bold;
  line-height: 2.7;
  text-align: left;
  text-transform: uppercase;
`;
const InnerContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  padding: 40px 100px;
`;
const Divider = styled.div`
  width: 100%;
  background-color: rgb(54, 54, 54);
  height: 2px;
  margin: 50px 0;
`;
const TitleE = styled.h4`
  font-size: 0.85em;
  font-weight: 500;
  text-transform: uppercase;
  color: #1a1818;
`;
const About = styled.h5`
  font-size: 0.72em;
  color: #464749;
`;
const Description = styled.p`
  font-size: 0.72em;
  color: #6d6f72;
`;
const Education = styled.div`
  position: relative;

  :before {
    content: "";
    position: absolute;
    height: 8px;
    width: 8px;
    background-color: rgb(54, 54, 54);
    top: -88%;
    left: 30%;
    border-radius: 50%;
  }
`;
const DetailBox = styled.div`
  margin: 40px 0;
  position: relative;
  :before {
    content: "";
    height: 8px;
    width: 8px;
    position: absolute;
    border-radius: 50%;
    background-color: rgb(54, 54, 54);
    top: 5px;
    left: -35px;
  }
`;
const VerticalBox = styled.div`
  border-left: 1px solid rgb(54, 54, 54);
  padding-left: 30px;
  margin-top: 50px;
  h2 {
    position: relative;
    line-height: 1;
    :before {
      content: "";
      height: 15px;
      width: 15px;
      position: absolute;
      border-radius: 50%;
      top: 0px;
      left: -38px;
      background-color: white;
      border: 1px solid rgb(54, 54, 54);
    }
  }
`;
const Interest = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const InterestBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h4 {
    color: #939598;
  }
`;
export default ({
  profileImage,
  personalInfo,
  workExperienceList,
  hobbyName,
  educationDetailsList,
  skillsInfo,
}) => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const history = useHistory();
  const query = useQuery();
  const [isMember, setIsMember] = useState(() => getISMemeberUser());
  const handleSubmit = () => {
    if (isMember) {
      handlePrint();
      return;
    }

    history.push(`/Payment?returnUrl=cvform?resume=Four`);
  };

  // React.useEffect(() => {
  //   if (query.get("fromPayment") === "true") {
  //     setIsMember(true);
  //   }
  // }, [query.get("fromPayment")]);

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
          <MainSec>
            <ProfileName>
              {personalInfo?.firstName
                ? `${personalInfo.firstName} ${personalInfo.lastName} `
                : "Ana Jones"}
            </ProfileName>
            <ProfileDesg>{personalInfo?.profession}</ProfileDesg>

            <SocialLinks>
              {personalInfo.socialLinks?.map((data) => {
                return (
                  <Anchor>
                    <img src={images[data.socialSite]} alt="" />
                    <SocialName>{data.socialLink}</SocialName>
                  </Anchor>
                );
              })}
            </SocialLinks>
            <InnerContainer>
              <Title>Education</Title>
              <Divider></Divider>
              <div className="my-row">
                {educationDetailsList.map((data) => {
                  return (
                    <div className="col-4 p-0">
                      <Education>
                        <TitleE>{data?.studyField}</TitleE>
                        <About>
                          {data?.instituteName} {data?.graduationStartDate} -{" "}
                          {data.graduationEndDate}
                        </About>
                        <Description>{data?.description}</Description>
                      </Education>
                    </div>
                  );
                })}
              </div>

              <div className="my-row">
                <div className="col-6">
                  <VerticalBox>
                    <Title>Experience</Title>
                    {workExperienceList.map((data) => {
                      return (
                        <DetailBox>
                          <TitleE>{data.title}</TitleE>
                          <About>
                            {data.employer} | {data.startDate} - {data.endDate}
                          </About>
                          <Description>{data.description}</Description>
                        </DetailBox>
                      );
                    })}
                  </VerticalBox>
                </div>
                <div className="col-6">
                  <VerticalBox>
                    <Title>Skills</Title>
                    {skillsInfo.professionalSkills.map((data) => {
                      return (
                        <DetailBox>
                          <TitleE>{data.name}</TitleE>
                          <ProgressBar
                            completed={data.rating}
                            bgColor="rgb(54, 54, 54)"
                            height="5px"
                            isLabelVisible={false}
                            baseBgColor="#EBF0F1"
                          />
                        </DetailBox>
                      );
                    })}
                  </VerticalBox>
                </div>
                <div className="col-12">
                  <Title>Interests</Title>
                  <Interest>
                    {hobbyName.hobbiesData.map((data) => {
                      return (
                        <InterestBox>
                          <img src={data.icon} alt="" />
                          <TitleE>{data.name}</TitleE>
                        </InterestBox>
                      );
                    })}
                  </Interest>
                </div>
              </div>
            </InnerContainer>
          </MainSec>
        </Container>
      </PDFExport>
    </div>
  );
};
