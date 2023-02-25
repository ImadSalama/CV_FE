import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import styled, { css } from "styled-components";
import images from "./assets";
import { Line } from "react-chartjs-2";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const SkillBar = withStyles({
  root: {
    color: "#0B1D79",
    height: 4,
    width: "75%",
  },
  thumb: {
    height: 12,
    width: 12,
    backgroundColor: "#0B1D79",
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

const Container = styled.div`
  height: auto;
  width: 100%;
  background-color: #fafbfc;
  margin-left: auto;
  margin-right: auto;
`;
const MainSide = styled.div``;
const Heading = styled.h4`
  font-size: 17px;
  color: #1e1950;
  padding: 10px 0;
`;
const PersonalBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -webkit-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -moz-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  border-radius: 10px;
  padding: 25px;
`;

const ProfileImage = styled.img`
  height: 40%;
  border-radius: 50%;
  width: 40%;
  box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 5px -7px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h4`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
  color: #1e1950;
  text-transform: uppercase;
`;
const TitleOrange = styled.h5`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #ec642a;
  text-transform: uppercase;
  letter-spacing: 3px;
`;
const ContentDetails = styled.p`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  color: #5b3f67;
  line-height: 20px;
  margin: 0;
  padding-bottom: 10px;
`;
const Projects = styled.div`
  background-color: #0b1d79;
  color: white !important ;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  margin: 20px 0;
  h4 {
    color: white;
    font-size: 21px;
  }
  h5 {
    color: white;
  }
`;
const SocialBox = styled.div`
  background-color: white;
  box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -webkit-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  -moz-box-shadow: 0px 0px 5px -7px rgba(163, 171, 180, 0.21);
  border-radius: 10px;
  padding: 25px;
  p {
    width: 80%;
  }
`;
const Icon = styled.img``;

const NameImg = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p {
    margin-left: 20px;
    margin-bottom: 0;
  }
`;
const state = {
  labels: ["Job Title", "Job Title", "Job Title"],
  datasets: [
    {
      label: "",
      fill: false,
      lineTension: 0.5,
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 70, 80],
    },
  ],
};
const Label = styled.h4`
  font-size: 16px;
  font-weight: 500;
  color: #5b3f67;
`;
const DetailBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ContentMain = styled.div`
  margin-left: 40px;
  width: 80%;

  p {
    text-align: left;
  }

  h4 {
    text-align: left;
    position: relative;
    :before {
      content: "";
      position: absolute;
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background-color: white;
      border: 1px solid black;
      left: -25px;
      top: 3px;
    }
  }
`;
const TitleSpan = styled.span`
  font-size: 12px;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: 5px;
  margin-left: 50px;
`;

export default ({
  profileImage,
  personalInfo,
  extraFields,
  hobbyName,
  workExperienceList,
  educationDetailsList,
  skillsInfo,
  socialLinksList,
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

    history.push(`/Payment?returnUrl=cvform?resume=Three`);
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
        <div className="my-row">
          <div className="col-4">
            <MainSide>
              <Heading>personal information</Heading>
              <PersonalBox>
                <div class="d-flex justify-content-center">
                  <ProfileImage
                    src={profileImage || images.profileimg}
                  ></ProfileImage>
                </div>
                <Title className="pt-5">
                  {personalInfo.firstName
                    ? `${personalInfo.firstName} ${personalInfo.lastName}`
                    : "Ana Jones"}{" "}
                </Title>
                <TitleOrange>
                  {personalInfo.profession
                    ? `${personalInfo.profession}`
                    : "Software Developer"}
                </TitleOrange>
                <ContentDetails>
                  {personalInfo.history
                    ? `${personalInfo.history}`
                    : `Ana is a graphic designer who works in a web designing
                  company. They often ask for quick designs and she would like
                  to have the help of ready-made graphics, which you can later
                  modify to fit your needs.`}
                </ContentDetails>
              </PersonalBox>
              {extraFields.pye.map((data) => {
                return (
                  <div class="d-flex justify-content-between flex-wrap">
                    <Projects>
                      <Title>+{data.projectsCompleted}</Title>
                      <TitleOrange>Projects</TitleOrange>
                    </Projects>
                    <Projects style={{ backgroundColor: "#EC642A" }}>
                      <Title>+{data.customer}</Title>
                      <TitleOrange>Customer</TitleOrange>
                    </Projects>
                    <Projects style={{ backgroundColor: "#B59C7A" }}>
                      <Title>{data.experience} Years</Title>
                      <TitleOrange>Experience</TitleOrange>
                    </Projects>
                  </div>
                );
              })}

              <SocialBox>
                <NameImg>
                  <Icon src={images.email}></Icon>
                  <ContentDetails>{personalInfo?.email}</ContentDetails>
                </NameImg>
                <NameImg>
                  <Icon src={images.phone}></Icon>
                  <ContentDetails>{personalInfo?.phone}</ContentDetails>
                </NameImg>
                <NameImg>
                  <Icon src={images.location}></Icon>
                  <ContentDetails>{personalInfo?.address}</ContentDetails>
                </NameImg>
                {personalInfo.socialLinks?.map((data) => {
                  return (
                    <NameImg>
                      <Icon src={images[data.socialSite]}></Icon>
                      <ContentDetails>{data.socialLink}</ContentDetails>
                    </NameImg>
                  );
                })}
              </SocialBox>
              <Heading>Professional Goals</Heading>
              <PersonalBox>
                <Line
                  data={state}
                  options={{
                    title: {
                      display: false,
                      text: "Average Rainfall per month",
                      fontSize: 20,
                    },
                    legend: {
                      display: false,
                      position: "right",
                    },
                  }}
                />
              </PersonalBox>
            </MainSide>
          </div>
          <div class="col-8">
            <MainSide>
              <Heading>Experience</Heading>

              <PersonalBox>
                {workExperienceList.map((value) => {
                  return (
                    <DetailBox className="mb-5">
                      <Label>
                        {moment(value?.startDate).format("MM/DD/YYYY")}
                      </Label>
                      <ContentMain>
                        <Title>
                          {value?.title} - {value?.employer}
                          <TitleSpan className="orange-span">
                            {value.currentlyWorkHere == true
                              ? "Current Job"
                              : moment(value?.endDate).format("MM/DD/YYYY")}
                          </TitleSpan>
                        </Title>

                        <ContentDetails>{value?.description}</ContentDetails>
                      </ContentMain>
                    </DetailBox>
                  );
                })}
              </PersonalBox>
              <Heading>Education</Heading>
              <PersonalBox>
                {educationDetailsList.map((value) => {
                  return (
                    <DetailBox className="mb-5">
                      <Label>
                        {moment(value?.graduationStartDate).format(
                          "MM/DD/YYYY"
                        )}
                      </Label>
                      <ContentMain>
                        <Title>
                          {value?.studyField} - {value?.instituteName}
                          <TitleSpan className="orange-span">
                            Current Formation
                          </TitleSpan>
                        </Title>

                        <ContentDetails>{value?.description}</ContentDetails>
                      </ContentMain>
                    </DetailBox>
                  );
                })}
              </PersonalBox>
              <Heading>Professional Skills</Heading>
              <PersonalBox>
                <div className="my-row">
                  {skillsInfo.professionalSkills.map((data) => {
                    return (
                      <div className="col-6">
                        <Label>{data.name}</Label>
                        <SkillBar
                          aria-label="custom thumb label"
                          defaultValue={data.rating}
                        />
                      </div>
                    );
                  })}
                </div>
              </PersonalBox>
              <Heading>Hobbies</Heading>
              <PersonalBox>
                <div className="my-row">
                  {hobbyName.hobbiesData.map((data) => {
                    return (
                      <div className="col-3">
                        <div className="d-flex align-items-center flex-wrap">
                          <img className="customImage" src={data.icon} alt="" />
                          <ContentDetails className="pl-3">
                            {data.name}
                          </ContentDetails>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </PersonalBox>
            </MainSide>
          </div>
        </div>
      </Container>
      {/* </PDFExport> */}
    </div>
  );
};
