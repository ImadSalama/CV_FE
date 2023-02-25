import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import ReactStars from "react-rating-stars-component";
import { useReactToPrint } from "react-to-print";
import { data } from "../../../Assets/icons/Icons";
import ExtraFields from "../../../Screens/CVMaking/Extras/Extras";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import jsPDF from "jspdf";
const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  margin-left: auto;
  margin-right: auto;
  padding: 80px 40px;
`;
const ratingChanged = (newRating) => {
  console.log(newRating);
};
const ProfileName = styled.h1`
  font-size: 3em;
  font-weight: 500;
  color: #6715f8;
  width: 25%;
  line-height: 1;
  span {
    font-weight: normal;
  }
`;
const Desg = styled.h3`
  font-size: 1.5em;
  font-weight: normal;
  color: #666666;
  padding: 5px 0;
`;
const ProfileDivider = styled.div`
  height: 3px;
  width: 15%;
  background-color: #6715f8;
`;
const ContactDetails = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;
const DetailBox = styled.div`
  display: flex;
  align-items: center;
  width: 46%;
  margin: 15px 4% 15px 0;
  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
`;
const ContactText = styled.h5`
  font-size: 1em;
  font-weight: normal;
  color: #333333;
  padding-left: 20px;
`;
const Bio = styled.div`
  margin-top: 50px;
`;
const BioTitle = styled.h3`
  font-size: 1.2em;
  color: #6715f8;
  font-weight: bold;
  border-bottom: 2px solid #000000;
  padding-bottom: 10px;
  text-transform: uppercase;
`;
const Education = styled.div`
  width: 90%;
`;
const BioDetails = styled.div`
  display: flex;
  position: relative;
  margin: 50px 0;
`;
const BioHeading = styled.h3`
  font-size: 1.2em;
  font-weight: 600;
  color: black;
`;
const BioText = styled.h5`
  font-size: 0.9em;
  color: black;
  font-weight: 400;
`;
const Year = styled.div``;
const BioDivider = styled.div`
  margin-left: 25px;
  margin-top: 15px;
  h5 {
    transform: rotate(90deg);

    :after {
      content: "";
      position: absolute;
      height: 1px;
      width: 70px;
      background-color: black;
      bottom: 7px;
    }
  }
`;
const BioContent = styled.div`
  margin-left: 50px;
`;

const About = styled.div`
  width: 90%;
  h5 {
    width: 70%;
    margin-top: 50px;
    line-height: 1.5;
  }
`;
const ExperienceBox = styled.div`
  margin-top: 50px;

  .before-icon {
    position: relative;
    :before {
      content: "";
      position: absolute;
      left: -30px;
      top: 12px;
      height: 2px;
      width: 15px;
      background-color: black;
    }
  }
`;
const Skills = styled.div`
  width: 90%;
  margin-top: 30px;
`;
const SkillsBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  align-items: center;

  h5 {
    font-weight: bold;
  }
  span {
    margin-right: 15px !important;
  }
`;
const ImgCircle = styled.div`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  border: 1px solid #6715f8;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 25px;
    width: 25px;
  }
`;
const InterestBox = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  margin-right: 20px;
  align-items: center;
`;
const Interest = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const DotBar = styled.div``;
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

    history.push(`/Payment?returnUrl=cvform?resume=Eleven`);
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
        <div className="my-row align-items-center">
          <div className="col-4">
            <ProfileName>
              {personalInfo.firstName || "Ana"}
              <br></br>
              <span>{personalInfo.lastName || " Jones"}</span>
            </ProfileName>
            <Desg>{personalInfo?.profession}</Desg>
            <ProfileDivider></ProfileDivider>
          </div>
          <div className="col-8">
            <ContactDetails>
              <DetailBox>
                <img src={images.mobile} alt="" />
                <ContactText>{personalInfo?.phone}</ContactText>
              </DetailBox>
              {personalInfo.socialLinks?.map((data) => {
                return (
                  <DetailBox>
                    <img src={images[data.socialSite]} alt="" />
                    <ContactText>{data.socialLink}</ContactText>
                  </DetailBox>
                );
              })}

              <DetailBox>
                <img src={images.envelope} alt="" />
                <ContactText>{personalInfo?.email}</ContactText>
              </DetailBox>
              <DetailBox>
                <img src={images.compass} alt="" />
                <ContactText>
                  {personalInfo?.address} , {personalInfo?.city}
                </ContactText>
              </DetailBox>
            </ContactDetails>
          </div>
        </div>
        <Bio>
          <div className="my-row">
            <div className="col-6">
              <Education>
                <BioTitle>Education</BioTitle>
                {educationDetailsList.map((data) => {
                  return (
                    <BioDetails>
                      <Year>
                        <BioText>
                          {moment(data.graduationStartDate).format(
                            "MM/DD/YYYY"
                          )}
                        </BioText>
                      </Year>
                      <BioDivider>
                        <BioText>{data.degreeProgram}</BioText>
                      </BioDivider>
                      <BioContent>
                        <BioHeading>{data.studyField}</BioHeading>
                        <BioHeading>{data.instituteName}</BioHeading>
                        <BioText>{data.description}</BioText>
                        <BioText>CGPA-{data.gpa}</BioText>
                      </BioContent>
                    </BioDetails>
                  );
                })}
              </Education>
              <Skills>
                <BioTitle>Skills</BioTitle>
                {skillsInfo.professionalSkills.map((data) => {
                  return (
                    <SkillsBox>
                      <BioText>{data.name}</BioText>
                      <DotBar>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          size={14}
                          value={data?.rating / 20}
                          edit={false}
                          activeColor="#6715f8"
                          isHalf={false}
                          emptyIcon={<i className="fas fa-circle" />}
                          halfIcon={<i className="fas fa-circle" />}
                          filledIcon={<i className="fas fa-circle" />}
                        />
                      </DotBar>
                    </SkillsBox>
                  );
                })}
              </Skills>
              <BioTitle>Interests</BioTitle>
              <Interest>
                {hobbyName.hobbiesData.map((data) => {
                  return (
                    <InterestBox>
                      <ImgCircle>
                        <img src={data.icon} alt="" />
                      </ImgCircle>
                      <BioText>{data.name}</BioText>
                    </InterestBox>
                  );
                })}
              </Interest>
            </div>
            <div className="col-6">
              <About>
                <BioTitle>ABOUT Me</BioTitle>
                <BioText>{personalInfo?.history}</BioText>
              </About>
              <ExperienceBox>
                <BioTitle>Experience</BioTitle>
                {workExperienceList.map((data) => {
                  return (
                    <BioDetails>
                      <Year>
                        <BioHeading>
                          {moment(data.startDate).format("MM/DD/YYYY")}
                        </BioHeading>
                      </Year>

                      <BioContent className="before-icon">
                        <BioHeading>
                          {data.currentlyWorkHere == true
                            ? "Present"
                            : moment(data.endDate).format("MM/DD/YYYY")}
                        </BioHeading>
                        <BioHeading>{data.title}</BioHeading>
                        <BioHeading>{data.employer}</BioHeading>
                        <BioText>{data.description}</BioText>
                      </BioContent>
                    </BioDetails>
                  );
                })}
              </ExperienceBox>
              <ExperienceBox>
                <BioTitle>Training</BioTitle>
                {extraFields.trainings.map((data) => {
                  return (
                    <BioDetails>
                      <Year>
                        <BioHeading>{data.trainingYear}</BioHeading>
                      </Year>

                      <BioContent>
                        <BioHeading>{data.trainingName}</BioHeading>
                        <BioHeading>{data.courseName}</BioHeading>
                        <BioText>Duration - {data.duration}</BioText>
                      </BioContent>
                    </BioDetails>
                  );
                })}
              </ExperienceBox>
            </div>
          </div>
        </Bio>
      </Container>
      {/* </PDFExport> */}
    </div>
  );
};
