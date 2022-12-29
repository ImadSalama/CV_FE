import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressBar from "@ramonak/react-progress-bar";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { useReactToPrint } from "react-to-print";
import { data } from "../../../Assets/icons/Icons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  background-color: white;
  position: relative;
`;
const ProfileBox = styled.div`
  background-color: #a8c8d2;
  padding: 20px 80px;
`;
const ProfileName = styled.h1`
  color: #443c3c;
  font-size: 3em;
  font-weight: normal;
  width: 25%;
  text-transform: uppercase;
  span {
    font-weight: bold;
  }
`;
const ProfileDesg = styled.h4`
  font-size: 1.5em;
  color: #47403b;
  text-transform: uppercase;
`;
const Content = styled.p`
  font-size: 1em;
  color: #636567;
  margin: 0;
  span {
    font-weight: bold;
  }
`;
const ContactDetails = styled.div`
  display: flex;
  margin: 15px 0;

  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
  p {
    border-left: 1px solid white;
    padding-left: 15px;
    margin-left: 10px;
  }
`;
const ContactBox = styled.div`
  border-top: 2px solid #5d808c;
  border-bottom: 2px solid #5d808c;
  margin-top: 20px;
`;
const WhiteBox = styled.div`
  background: #f0edf1;
  padding: 2px 80px;
`;
const Box = styled.div`
  border-radius: 19px;
  background-color: #d9e1e7;
  padding: 10px 30px;
  margin: 10px 0;
`;
const Title = styled.h3`
  font-size: 1.5em;
  font-family: "Montserrat";
  color: #5d808c;
  text-transform: uppercase;
  text-align: left;
  font-weight: bold;
  position: relative;
  margin-bottom: 0 !important;
`;
const TitleBox = styled.div`
  display: flex;
`;
const TitleDivider = styled.div`
  height: 2px;
  width: 70%;
  margin-left: auto;
  margin-top: 20px;
  background-color: #5d808c;
`;
const Experience = styled.div`
  margin-top: 20px;
`;
const TitleSmall = styled.h4`
  font-size: 1em;
  font-weight: bold;
  color: #636567;
  margin-top: 20px;
`;
const NumberBullet = styled.li`
  margin-left: 15px;
  list-style: decimal;
  color: #636567;
  font-size: 0.8em;
`;
const Hobbies = styled.div``;
const SkillsBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 75%;
  h4 {
    margin: 10px 0 0 0;
  }
`;
const SkillBar = withStyles({
  root: {
    color: "#636567",
    height: 4,
    width: "75%",
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#636567",
    border: "2px solid currentColor",
    marginTop: -4,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    height: 4,
    borderRadius: 4,
  },
})(Slider);

const HobbiesBox = styled.div`
  width: 30%;
  margin-right: 2%;
  margin: 0 0 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
`;
const HobbiesFlex = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
`;
const ReferenceBox = styled.div``;
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
          <ProfileBox>
            <div className="my-row">
              <div className="col-4">
                <ProfileName>
                  {personalInfo.firstName ? personalInfo.firstName : "Ana"}{" "}
                  <span>
                    {personalInfo.lastName ? personalInfo.lastName : "Jones"}
                  </span>
                </ProfileName>
                <ProfileDesg>{personalInfo?.profession}</ProfileDesg>
              </div>
              <div className="col-8">
                <Content>
                  <span>
                    {personalInfo?.firstName} {personalInfo?.lastName}
                  </span>
                  <br />
                  {personalInfo?.history}
                </Content>
                <ContactBox>
                  <div className="my-row">
                    <div className="col-6 p-0">
                      <ContactDetails>
                        <img src={images.name} alt="" />
                        <Content>
                          {personalInfo.firstName
                            ? `${personalInfo.firstName} ${personalInfo.lastName} `
                            : "Ana Jones"}
                        </Content>
                      </ContactDetails>
                      <ContactDetails>
                        <img src={images.dob} alt="" />
                        <Content>{personalInfo?.dob}</Content>
                      </ContactDetails>
                      <ContactDetails>
                        <img src={images.address} alt="" />
                        <Content>
                          {personalInfo?.address} ,{personalInfo.city}
                        </Content>
                      </ContactDetails>
                    </div>
                    <div className="col-6 p-0">
                      <ContactDetails>
                        <img src={images.call} alt="" />
                        <Content>{personalInfo?.phone}</Content>
                      </ContactDetails>
                      <ContactDetails>
                        <img src={images.mail} alt="" />
                        <Content>{personalInfo?.email}</Content>
                      </ContactDetails>
                      <ContactDetails>
                        <img src={images.website} alt="" />
                        <Content>{extraFields?.website}</Content>
                      </ContactDetails>
                    </div>
                  </div>
                </ContactBox>
              </div>
            </div>
          </ProfileBox>
          <WhiteBox>
            <Box>
              <TitleBox>
                <Title>Experience</Title>
                <TitleDivider></TitleDivider>
              </TitleBox>

              <Experience>
                <div className="my-row">
                  {workExperienceList.map((data) => {
                    return (
                      <div className="col-4 p-0">
                        <TitleSmall>{data.employer}</TitleSmall>
                        <Content>
                          {data.title} | {data.startDate} -{" "}
                          {data.currentlyWorkHere == true
                            ? "Present"
                            : data.endDate}
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
          </WhiteBox>
          <WhiteBox>
            <Box>
              <TitleBox>
                <Title>Education</Title>
                <TitleDivider></TitleDivider>
              </TitleBox>
              <Experience>
                <div className="my-row">
                  {educationDetailsList.map((data) => {
                    return (
                      <div className="col-4 p-0">
                        <TitleSmall>{data.studyField}</TitleSmall>
                        <Content>{data.instituteName}</Content>
                        <Content>
                          {data.graduationStartDate} - {data.graduationEndDate}{" "}
                          | GPA {data.gpa}
                        </Content>
                      </div>
                    );
                  })}
                </div>
              </Experience>
            </Box>
          </WhiteBox>
          <WhiteBox>
            <Box>
              <TitleBox>
                <Title>Skills</Title>
                <TitleDivider></TitleDivider>
              </TitleBox>
              <Experience>
                <div className="my-row">
                  {skillsInfo.professionalSkills.map((data) => {
                    return (
                      <div className="col-4 p-0">
                        <SkillsBar>
                          <Content>{data.name}</Content>
                          <Content>{data.rating}%</Content>
                        </SkillsBar>
                        <SkillBar
                          aria-label="custom thumb label"
                          defaultValue={data.rating}
                        />
                      </div>
                    );
                  })}
                </div>
              </Experience>
            </Box>
          </WhiteBox>
          <WhiteBox>
            <div className="my-row">
              <div className="col-4 pl-0">
                <Box>
                  <Hobbies>
                    <TitleBox>
                      <Title>Hobbies</Title>
                      <TitleDivider></TitleDivider>
                    </TitleBox>
                    <HobbiesFlex>
                      {hobbyName.hobbiesData.map((data) => {
                        return (
                          <HobbiesBox>
                            <img src={data.icon} alt="" />
                            <Content>{data.name}</Content>
                          </HobbiesBox>
                        );
                      })}
                    </HobbiesFlex>
                  </Hobbies>
                </Box>
              </div>
              <div className="col-8">
                <Box>
                  <ReferenceBox>
                    <TitleBox>
                      <Title>References</Title>
                      <TitleDivider></TitleDivider>
                    </TitleBox>
                    <div className="my-row">
                      {extraFields.references.map((data) => {
                        return (
                          <div className="col-6">
                            <TitleSmall>{data.referenceName}</TitleSmall>
                            <Content>{data.referenceDesg}</Content>
                            <Content>{data.referenceAddress}</Content>
                            <Content className="mt-2">
                              Phone: {data.referencePhone}
                            </Content>
                            <Content>Email: {data.referenceEmail}</Content>
                          </div>
                        );
                      })}
                    </div>
                    *
                  </ReferenceBox>
                </Box>
              </div>
            </div>
          </WhiteBox>
        </Container>
      </PDFExport>
    </div>
  );
};
