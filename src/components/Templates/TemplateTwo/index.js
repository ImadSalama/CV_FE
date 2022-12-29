import React, { useRef } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import icons from "../TemplateOne/assets";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useReactToPrint } from "react-to-print";
import ExtraFields from "../../../Screens/CVMaking/Extras/Extras";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

const Container = styled.div`
  height: auto;
  width: 95%;
  margin-left: auto;
  margin-right: auto;
`;

const ProfileImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  height: 168px;
  width: 168px;
  margin: 0 auto;
  border: 2px solid black;
  border-radius: 50%;
`;
const ProfileDetail = styled.div`
  width: 55%;
  margin: 10px auto;
  padding: 0 20px;
`;

const UserName = styled.h1`
  font-size: 51px;
  text-align: center;
  font-weight: 300;
`;
const SkillSet = styled.h5`
  font-size: 13px;
  text-align: center;
  color: #343240;
  letter-spacing: 3px;
  text-transform: uppercase;
`;
const DetailBox = styled.div`
  margin: 20px 0;
`;
const HeadingContent = styled.h3`
  font-size: 17px;
  font-weight: bold;
  letter-spacing: 2px;
  text-align: center;
  color: #343240;
  text-transform: uppercase;
`;
const HeadingDivider = styled.div`
  height: 1px;
  width: 100%;
  background: #343240;
  margin: 20px 0;
`;
const ContentDetail = styled.p`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: #343240;
  letter-spacing: 2px;
  padding: 10px 0;
  line-height: 18px;
`;
const ContentBox = styled.div`
  margin: 50px 0 0;
`;
const InterestIcons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const HeadingWithDivider = styled.div`
  // height:1px;
  // width:100%;
  // background-color:black;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const PortfolioSec = styled.div`
  margin: 40px 0;
`;

const SkillBox = styled.div`
  height: 77px;
  width: 77px;
  border-radius: 50%;
  border: 1px solid #343240;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EducationDetail = styled.div`
  display: flex;
  margin-left: 100px;
`;

const EducationYear = styled.div`
  width: 20%;
`;

const EducationDivider = styled.div`
  width: 1px;
  background-color: black;
  margin-left: 50px;
  position: relative;
  :before {
    content: "";
    height: 10px;
    width: 10px;
    background-color: black;
    position: absolute;
    border-radius: 50%;
    left: -4px;
  }
`;

const EducationInst = styled.div`
  margin-left: 50px;
  width: 70%;
`;
const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
          onClick={handlePrint}
        >
          {" "}
          Download Resume{" "}
        </button>
      </div>
      <PDFExport
        ref={pdfExportComponent}
        fileName={`Resume`}
        paperSize="auto"
        margin={40}
      >
        <Container ref={componentRef}>
          <div className="my-row">
            <div className="col-4">
              <ProfileDetail>
                <DetailBox>
                  <ProfileImage>
                    <img src={profileImage || icons.dp} />
                  </ProfileImage>
                </DetailBox>
                <DetailBox>
                  <UserName>
                    {personalInfo?.firstName
                      ? `${personalInfo?.firstName} ${personalInfo?.lastName}`
                      : "Ana Jones"}
                  </UserName>
                  <SkillSet>
                    {personalInfo?.profession || "Software Engineer"}
                  </SkillSet>
                </DetailBox>
                <ContentBox>
                  <HeadingContent>Profile</HeadingContent>
                  <HeadingDivider></HeadingDivider>
                  <ContentDetail>{extraFields?.quote}</ContentDetail>
                </ContentBox>

                <ContentBox>
                  <HeadingContent>Contact</HeadingContent>
                  <HeadingDivider></HeadingDivider>
                  <ContentDetail>{personalInfo?.phone}</ContentDetail>
                  <ContentDetail>
                    {personalInfo?.address ||
                      " 993 Carson Stwest New York, NJ 07093"}
                  </ContentDetail>
                  <ContentDetail>
                    {extraFields?.website}
                    <br />
                    {personalInfo?.email}
                  </ContentDetail>
                </ContentBox>
                <ContentBox>
                  <HeadingContent>Interests</HeadingContent>
                  <HeadingDivider></HeadingDivider>
                  <div className="row">
                    {hobbyName.hobbiesData.map((data) => {
                      return (
                        <div className="col-6">
                          <InterestIcons>
                            <img src={data.icon} />
                          </InterestIcons>
                        </div>
                      );
                    })}
                  </div>
                </ContentBox>
              </ProfileDetail>
            </div>
            <div className="col-8">
              <PortfolioSec>
                <HeadingWithDivider>
                  <HeadingContent className="text-left">About</HeadingContent>
                  <HeadingDivider className="width-70"></HeadingDivider>
                </HeadingWithDivider>
                <ContentDetail className="width-70 text-left">
                  {personalInfo?.history ||
                    `I am Amber Bris a 25 year old Lead Visual Designer & Freelance
                UI/UX Expert from New York. I loves everything that has to do
                with App Design, IJI/UX, Graphic design, Packaging, Industrial
                design and feel true devotion for typography. I have 4 years of
                experience working as a designer and working with a studio
                during studies..`}
                </ContentDetail>
              </PortfolioSec>
              <PortfolioSec>
                <HeadingWithDivider>
                  <HeadingContent className="text-left">
                    Education
                  </HeadingContent>
                  <HeadingDivider className="width-70"></HeadingDivider>
                </HeadingWithDivider>
                <PortfolioSec>
                  {educationDetailsList.map((data) => {
                    return (
                      <EducationDetail>
                        <EducationYear>
                          <p>
                            {data.graduationStartDate} -{" "}
                            {data.graduationEndDate}
                          </p>
                        </EducationYear>
                        <EducationDivider></EducationDivider>
                        <EducationInst>
                          <h3>{data.studyField}</h3>
                          <h5>{data.instituteName}</h5>
                          <p>{data.description}</p>
                        </EducationInst>
                      </EducationDetail>
                    );
                  })}
                </PortfolioSec>
              </PortfolioSec>
              <PortfolioSec>
                <HeadingWithDivider>
                  <HeadingContent className="text-left">
                    Language Skills
                  </HeadingContent>
                  <HeadingDivider className="width-70"></HeadingDivider>
                </HeadingWithDivider>
                <ContentDetail className="width-70 text-left">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </ContentDetail>
                <div className="my-row">
                  {skillsInfo.professionalSkills.map((data) => {
                    return (
                      <div className="col-3">
                        <FlexBox>
                          <CircularProgressbar
                            styles={{
                              root: {
                                height: 100,
                                width: 100,
                              },
                              path: {
                                stroke: "black",
                              },
                              text: {
                                fontSize: 10,
                              },
                            }}
                            value={data.rating}
                            text={data.rating + "%"}
                          />

                          <p>{data.name}</p>
                        </FlexBox>
                      </div>
                    );
                  })}
                </div>
              </PortfolioSec>
              <PortfolioSec>
                <HeadingWithDivider>
                  <HeadingContent className="text-left">Facts</HeadingContent>
                  <HeadingDivider className="width-70"></HeadingDivider>
                </HeadingWithDivider>
                <ContentDetail className="width-70 text-left">
                  <ul className="ml-3">
                    {extraFields.facts.map((data) => {
                      return <li>{data.factName}</li>;
                    })}
                  </ul>
                </ContentDetail>
              </PortfolioSec>
              <PortfolioSec>
                <HeadingWithDivider>
                  <HeadingContent className="text-left">
                    Employment History
                  </HeadingContent>
                  <HeadingDivider className="width-70"></HeadingDivider>
                </HeadingWithDivider>
                <PortfolioSec>
                  {workExperienceList.map((value) => {
                    return (
                      <EducationDetail>
                        <EducationYear>
                          <p>
                            {value.startDate} - {value.endDate}
                          </p>
                        </EducationYear>
                        <EducationDivider></EducationDivider>
                        <EducationInst>
                          <h3>{value.title}</h3>
                          <h5>{value.employer}</h5>
                          <p>{value.description}</p>
                        </EducationInst>
                      </EducationDetail>
                    );
                  })}
                </PortfolioSec>
              </PortfolioSec>
            </div>
          </div>
        </Container>
      </PDFExport>
    </div>
  );
};
