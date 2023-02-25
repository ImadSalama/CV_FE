import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import { CircularProgressbar } from "react-circular-progressbar";
import { Line } from "react-chartjs-2";
import "react-circular-progressbar/dist/styles.css";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import jsPDF from "jspdf";
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: #ffe0e9;
  padding: 40px;
`;
const MainBox = styled.div`
  background-color: #fcfcfc;
  padding: 40px 60px;
`;
const ProfileDetail = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`;
const ProfileName = styled.h1`
  font-size: 36px;
  font-weight: 500;
  color: #522e38;
  text-transform: uppercase;
`;
const ProfileDesg = styled.h3`
  font-size: 18px;
  color: #ff9ebb;
  border-bottom: 1px solid #602437;
  text-transform: uppercase;
  width: 44%;
  padding-bottom: 8px;
`;
const WhiteBox = styled.div`
  position: relative;
  padding: 40px 15px 20px;
  background: white;
  box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -webkit-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -moz-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  border-radius: 20px;
  margin: 20px 0;
`;

const Footer = styled.div`
  background-color: #f0f3f9;
  padding: 50px 0;

  p {
    color: #1e1950;
    text-align: center;
  }
`;
const SocialFooter = styled.div`
  display: flex;
  justify-content: center;
`;
const Heading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #1e1950;
  position: relative;
`;
const ProfileDetails = styled.div``;

const Title = styled.h4`
  font-size: 12px;
  font-weight: 600;
  color: #522e3840;
  text-align: center;
  padding-top: 10px;
`;
const Description = styled.p`
  font-size: 18px;
  color: #522e3840;
`;
const ContentDetail = styled.p`
  font-size: 10px;
  color: #ff9ebb;
  margin: 0;
  padding-left: 10px;
  margin: 7px 0;
`;

const TitleName = styled.h5`
  font-size: 12px;
  font-weight: 600;
  color: white;
  background-color: #522e38;
  border-top-left-radius: 20px;
  padding: 10px 30px;
  position: absolute;
  top: 0;
  left: 0;
`;
const BorderBox = styled.div`
  border-top-left-radius: 20px;
  background-color: #8a2846;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Number = styled.h4`
  font-size: 28px;
  font-weight: normal;
  color: white;
  padding-left: 5px;
`;
const Name = styled.h6`
  font-size: 12px;
  font-weight: normal;
  color: white;
  padding-left: 25px;
`;
const Leasure = styled.div`
  background-color: white;
  box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -webkit-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  -moz-box-shadow: 0px 2px 20px 0px rgba(74, 85, 137, 0.08);
  border-radius: 20px;
  position: relative;
  margin-top: 20px;
  padding-top: 50px;
  display: flex;
  justify-content: center;

  ::before {
    content: "Leasure";
    position: absolute;
    background-color: #522e38;
    height: 29px;
    width: 100%;
    top: 0;
    color: white;
    text-align: center;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }
`;
const Label = styled.h4`
  font-size: 12px;
  font-weight: 500;
  color: #5b3f67;
  width: 15%;
`;
const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContentMain = styled.div`
  margin-left: 40px;
  width: 70%;

  p {
    text-align: left;
  }

  h4 {
    text-align: left;
    position: relative;
    :before {
      content: "";
      position: absolute;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background-color: white;
      border: 1px solid black;
      left: -20px;
      top: 4px;
    }
  }
`;
const ContentDetails = styled.p`
  font-size: 10px;
  font-weight: 500;
  text-align: center;
  color: #522e3840;
  line-height: 20px;
  margin: 0;
  padding-bottom: 10px;
`;
const TitleSpan = styled.span`
  font-size: 8px;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  margin-left: auto;
`;
const LeasureBox = styled.div`
  img {
    margin-top: 20px;
  }
`;
const PersonalBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -webkit-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -moz-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  border-radius: 10px;
  padding: 25px 10px;
`;
const TitleDark = styled.h4`
  font-size: 10px;
  color: #522e38;
  display: flex;
`;
const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const SkillsCircle = styled.div`
  height: 133px;
  width: 133px;
  border-radius: 50%;
  border: 8px solid #ff7aa2;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SkillsContent = styled.p`
  font-size: 9px;
  font-weight: 600;
  color: #522e38;
  margin: 0;
`;

export default ({
  profileImage,
  personalInfo,
  workExperienceList,
  hobbyName,
  extraFields,
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

    history.push(`/Payment?returnUrl=cvform?resume=Five`);
  };
  const jobsTitles = workExperienceList.map((work) => work.title);
  const data = workExperienceList.map((work) =>
    new Date(work.startDate).getMonth()
  );

  const state = {
    labels: jobsTitles,
    datasets: [
      {
        label: "",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "white",
        borderColor: "#FF9EBB34",
        borderWidth: 5,
        data: data,
      },
    ],
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
      <Container ref={componentRef}>
        <MainBox>
          <ProfileDetail>
            <ProfileDetails>
              <ProfileName>
                {personalInfo.firstName
                  ? `${personalInfo.firstName} ${personalInfo.lastName}`
                  : "Ana Jones"}
              </ProfileName>
              <ProfileDesg>
                {personalInfo.profession
                  ? `${personalInfo.profession}`
                  : "Engineer"}
              </ProfileDesg>
            </ProfileDetails>
            <ProfileDetails>
              <div className="d-flex align-items-center">
                <img src={images.email} alt="" />
                <ContentDetail>
                  {personalInfo.email
                    ? `${personalInfo.email}`
                    : "xyz@website.com"}
                </ContentDetail>
              </div>
              <div className="d-flex align-items-center">
                <img src={images.phone} alt="" />
                <ContentDetail>
                  {personalInfo.phone ? `${personalInfo.phone}` : "+12 445678"}
                </ContentDetail>
              </div>
              <div className="d-flex align-items-center">
                <img src={images.location} alt="" />
                <ContentDetail>
                  {personalInfo.address
                    ? `${personalInfo.address} , ${personalInfo.city}`
                    : "Address"}
                </ContentDetail>
              </div>
            </ProfileDetails>
          </ProfileDetail>
          <WhiteBox>
            <TitleName>Brief Summary</TitleName>
            <Description>
              {personalInfo.history
                ? `${personalInfo.history}`
                : ` Ana is a graphic designer who works in a web designing company.
              They often ask for quick designs and she would like to have the
              help of ready-made graphics, which you can later modify to fit
              your needs. She likes her job a lot but what her passion is
              traveling and meeting people. Whenever she can, she hangs out with
              her friends and always says love to travel.`}
            </Description>
          </WhiteBox>
          <div className="my-row">
            <div className="col-2">
              {extraFields.pye.map((data) => {
                return (
                  <>
                    <BorderBox>
                      <Number>+{data.projectsCompleted}</Number>
                      <Name>Projects</Name>
                    </BorderBox>
                    <BorderBox style={{ backgroundColor: "#B9375E" }}>
                      <Number>+{data.customer}</Number>
                      <Name>Customers</Name>
                    </BorderBox>
                    <BorderBox style={{ backgroundColor: "#E05780" }}>
                      <Number>+{data.experience}</Number>
                      <Name>Years Experience</Name>
                    </BorderBox>
                  </>
                );
              })}
              <Leasure>
                <LeasureBox>
                  {hobbyName.hobbiesData.map((data) => {
                    return (
                      <>
                        <img src={data.icon} alt="" className="imagebgcustom" />
                        <Title>{data.name}</Title>
                      </>
                    );
                  })}
                </LeasureBox>
              </Leasure>
            </div>
            <div className="col-10">
              <div className="my-row">
                <div className="col-6">
                  <WhiteBox className="m-0">
                    <TitleName>Experience</TitleName>

                    <PersonalBox>
                      {workExperienceList.map((data) => {
                        return (
                          <DetailBox className="mb-1">
                            <Label>
                              {moment(data?.startDate).format("MM/YYYY")}
                            </Label>
                            <ContentMain>
                              <TitleDark>
                                {data?.title} - {data?.employer}
                                <TitleSpan className="pink-span">
                                  {data.currentlyWorkHere == true
                                    ? "Current Job"
                                    : `${moment(data?.endDate).format(
                                        "MM/YYYY"
                                      )}`}
                                </TitleSpan>
                              </TitleDark>

                              <ContentDetails>
                                {data?.description}
                              </ContentDetails>
                            </ContentMain>
                          </DetailBox>
                        );
                      })}
                    </PersonalBox>
                  </WhiteBox>
                </div>
                <div className="col-6">
                  <WhiteBox className="m-0">
                    <TitleName>Education</TitleName>

                    <PersonalBox>
                      {educationDetailsList.map((data) => {
                        return (
                          <DetailBox className="mb-1">
                            <Label>
                              {moment(data?.graduationStartDate).format(
                                "MM/DD/YYYY"
                              )}
                            </Label>
                            <ContentMain>
                              <TitleDark>
                                {data?.studyField} - {data?.instituteName}
                                <TitleSpan className="pink-span">
                                  {moment(data?.graduationEndDate).format(
                                    "MM/DD/YYYY"
                                  )}
                                </TitleSpan>
                              </TitleDark>

                              <ContentDetails>
                                {data?.description}
                              </ContentDetails>
                            </ContentMain>
                          </DetailBox>
                        );
                      })}
                    </PersonalBox>
                  </WhiteBox>
                </div>
                <div className="col-12">
                  <WhiteBox>
                    <TitleName>Software Skills</TitleName>
                    <Skills>
                      {skillsInfo.professionalSkills.map((data) => {
                        return (
                          <CircularProgressbar
                            styles={{
                              root: {
                                height: 133,
                                width: 133,
                              },
                              path: {
                                stroke: "#FF7AA2",
                              },
                              text: {
                                fontSize: 10,
                              },
                            }}
                            value={data.rating ? `${data.rating}` : 50}
                            text={data?.name}
                          />
                        );
                      })}
                    </Skills>
                  </WhiteBox>
                </div>
              </div>
            </div>
          </div>
          <WhiteBox>
            <TitleName>Professional Goals</TitleName>
            <Line
              data={state}
              options={{
                legend: {
                  display: false,
                  position: "right",
                },
              }}
            />
          </WhiteBox>
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
      {/* </PDFExport> */}
    </div>
  );
};
