import React, { useRef } from "react";
import styled from "styled-components";
import images from "./assets";
import ReactStars from "react-rating-stars-component";
import ProgressBar from "@ramonak/react-progress-bar";
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
const ratingChanged = (newRating) => {
  console.log(newRating);
};
const TopBar = styled.div`
  height: 100px;
  width: 100%;
  background-color: #98559d;
`;
const MainBody = styled.div`
  padding: 20px 50px;
`;
const ProfileImg = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -90px;
  img {
    height: 150px;
    width: 150px;
    border-radius: 50%;
  }
`;
const ProfileName = styled.h1`
  font-size: 3em;
  font-weight: bold;
  color: #362c30;
  text-align: center;
`;
const ProfileDesg = styled.h3`
  font-size: 1.5em;
  color: #8d8d8e;
  text-align: center;
  span {
    color: #98559d;
  }
`;
const Bio = styled.div`
  background-color: #f0eff0;
  padding: 0 50px;
  margin-top: 25px;
  p {
    width: 80%;
  }
`;
const TitleSmall = styled.h5`
  font-size: 1em;
  font-weight: bold;
  color: #525456;
  text-transform: uppercase;
  span {
    color: #98559d;
  }
`;
const Content = styled.p`
  font-size: 1em;
  color: #8d8d8e;
`;
const ContactDetails = styled.div`
  background-color: #e2dfe2;
  padding: 20px;
`;
const ContactBox = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  p {
    margin-left: 15px;
  }
  img {
    height: 25px;
    width: 25px;
    object-fit: contain;
  }
`;
const About = styled.div`
  padding: 20px 0;
`;
const Social = styled.div`
  padding: 20px 35px;
`;
const Body = styled.div`
  background-color: #f5f4f5;
  padding: 30px 50px;
`;
const Title = styled.h1`
  font-size: 1.7em;
  color: #54474f;
  font-weight: bold;
`;
const Experience = styled.div`
  h5 {
    padding-top: 20px;
  }
  .my-row {
    p {
      color: #8d8d8e;
    }
  }
`;
const Description = styled.h3`
  font-size: 1.2em;
  color: #8d8d8e;
  text-transform: uppercase;
`;
const Education = styled.div`
  background-color: white;
  h1 {
    color: #98559d;
  }
  border: 1px solid #98559d;
`;
const EducationBody = styled.div`
  width: 80%;
  margin: 25px auto;
  text-align: center;
  background-color: white;
  padding-bottom: 25px;
`;
const Header = styled.div`
  h1 {
    text-align: center;
    padding: 25px;
    background-color: #98559d;
    color: white;
  }
`;
const Trainings = styled.p`
  font-size: 0.9em;
  color: #8d8d8e;
  text-align: center;
  padding: 10px 0;
  border: 1px solid #8d8d8e;
  border-radius: 25px;
  margin: 15px 0;
`;
const Languages = styled.div`
  background-color: white;
  padding: 20px 0;
  h1 {
    text-align: center;
  }
`;
const LanguageFlex = styled.div`
  width: 80%;
  display: flex;
  background-color: #f5f4f5;
  border-radius: 20px;
  margin: 20px auto 10px;
  span:first-child {
    background-color: #98559d;
    border-radius: 20px;
    color: white;
  }
`;
const LanguageBox = styled.span`
  width: 33.33%;
  padding: 10px 25px;
  font-size: 0.7em;
  text-align: center;
`;
const StarsRating = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;
const Reference = styled.div`
  margin: 25px 0;
  background-color: white;
  padding: 20px;
`;
const UserBox = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 0;
  img {
    height: 35px;
    width: 35px;
    object-fit: contain;
  }
  p {
    margin: 0 !important;
  }
`;
const UserContent = styled.div`
  margin-left: 20px;
`;
const CallBox = styled.div`
  background-color: white;
  padding: 20px 0;
  h5 {
    font-size: 1em;
    text-align: center;
    position: relative;
  }
  p {
    text-align: center;
    width: 80%;
    margin: 20px auto 0;
  }
`;
const ContentSmall = styled.h3`
  color: #98559d;
  font-size: 1em;
  text-align: center;
`;
const CallIcon = styled.div`
  height: 40px;
  width: 40px;
  border: 1px solid #98559d;
  border-radius: 50%;
  position: absolute;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  img {
    height: 25px;
    width: 25px;
  }
`;
const Skills = styled.div`
  background-color: white;
  padding: 20px;
  margin-bottom: 3px;
  h1 {
    text-align: center;
  }
`;
const SkillsBox = styled.div`
  padding: 20px;
  background-color: white;
  h5 {
    text-align: center;
    padding: 9px 0;
    font-size: 1em;
  }
`;
const CreativeSkills = styled.div`
  text-align: center;
  background-color: white;
  padding-bottom: 20px;
  h5 {
    color: #b3b2b2;
    padding-bottom: 15px;
    padding-top: 30px;
  }
  p {
    color: #b3b2b2;
  }
`;
const Setting = styled.div`
  background-color: white;
`;
const ImgBox = styled.div`
  width: 50%;
  margin: 20px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 35px;
    width: 35px;
    object-fit: contain;
    margin: 27px 0;
  }
`;
const HeadIcon = styled.div`
  background-color: #98559d;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 30px;
    width: 30px;
  }
`;
const SettingBox = styled.div`
  background-color: white;
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
          <TopBar></TopBar>
          <MainBody>
            <ProfileImg>
              <img src={profileImage || images.bg} alt="" />
            </ProfileImg>
            <ProfileName>
              {personalInfo.firstName || "Ana"}
              {personalInfo.lastName || " Jones"}
            </ProfileName>
            <ProfileDesg>{personalInfo?.profession}</ProfileDesg>
          </MainBody>
          <Bio>
            <div className="my-row">
              <div className="col-6 p-0">
                <About>
                  <TitleSmall>About Me</TitleSmall>
                  <Content>{personalInfo?.history}</Content>
                </About>
              </div>
              <div className="col-3 p-0">
                <ContactDetails>
                  <ContactBox>
                    <img src={images.website} alt="" />
                    <Content>{extraFields.website}</Content>
                  </ContactBox>
                  <ContactBox>
                    <img src={images.email} alt="" />
                    <Content>{personalInfo?.email}</Content>
                  </ContactBox>
                  <ContactBox>
                    <img src={images.phone} alt="" />
                    <Content>{personalInfo?.phone}</Content>
                  </ContactBox>
                  <ContactBox>
                    <img src={images.location} alt="" />
                    <Content>
                      {personalInfo?.address} , {personalInfo?.city}
                    </Content>
                  </ContactBox>
                </ContactDetails>
              </div>
              <div className="Col-3 p-0">
                <Social>
                  {personalInfo.socialLinks.map((data) => {
                    return (
                      <ContactBox>
                        <img src={images[data.socialSite]} alt="" />
                        <Content>{data.socialLink}</Content>
                      </ContactBox>
                    );
                  })}
                </Social>
              </div>
            </div>
          </Bio>
          <Body>
            <Experience>
              <Title>Experience</Title>
              <ProgressBar
                completed={30}
                bgColor="#98559d"
                height="5px"
                isLabelVisible={false}
                baseBgColor="#e2dfe2"
                className="w-100"
                margin="20px 0 10px"
              />
              <div className="my-row">
                {workExperienceList.map((data) => {
                  return (
                    <div className="col-4">
                      <TitleSmall>{data.employer}</TitleSmall>
                      <Description className="p-0">
                        {data.title} |{" "}
                        <span>
                          {data.startDate}-{data.endDate}{" "}
                        </span>
                      </Description>
                      <Content>{data.description}</Content>
                    </div>
                  );
                })}
              </div>
            </Experience>
            <div className="my-row mt-3">
              <div className="col-4">
                <Education>
                  <Header>
                    <Title>Education</Title>
                  </Header>

                  <EducationBody>
                    {educationDetailsList.map((data) => {
                      return (
                        <>
                          {" "}
                          <TitleSmall>
                            {data.studyField} |{" "}
                            <span>
                              {data.graduationStartDate}-
                              {data.graduationEndDate}
                            </span>
                          </TitleSmall>
                          <Content>{data.instituteName}</Content>
                        </>
                      );
                    })}

                    <Title className="mt-5">Trainings</Title>
                    <TitleSmall className="font-weight-normal">
                      {extraFields?.website}
                    </TitleSmall>
                    {extraFields.trainings.map((data) => {
                      return <Trainings>{data.trainingName}</Trainings>;
                    })}
                  </EducationBody>
                </Education>
              </div>
              <div className="col-4">
                <Languages>
                  <Title>Languages</Title>
                  <LanguageFlex>
                    {skillsInfo.language.map((data) => {
                      return <LanguageBox>{data}</LanguageBox>;
                    })}
                  </LanguageFlex>
                  {/* <StarsRating>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    value={3}
                    edit={false}
                    activeColor="#dcd9dd"
                  />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    value={3}
                    edit={false}
                    activeColor="#dcd9dd"
                  />
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={16}
                    value={3}
                    edit={false}
                    activeColor="#dcd9dd"
                  />
                </StarsRating> */}
                </Languages>
                <Reference>
                  <Title>Reference</Title>
                  {extraFields.references.map((data) => {
                    return (
                      <UserBox>
                        <img src={images.user} alt="" />
                        <UserContent>
                          <Content>{data.referenceName}</Content>
                          <Content>
                            T: {data.referencePhone} | E: {data.referenceEmail}
                          </Content>
                        </UserContent>
                      </UserBox>
                    );
                  })}
                </Reference>
                <CallBox>
                  <TitleSmall>
                    Thank you for your time
                    <CallIcon>
                      <img src={images.phoneicon} alt="" />
                    </CallIcon>
                  </TitleSmall>

                  <Content>
                    Please contact me if you need more information about my
                    background and qualifications. Your Sincerely,{" "}
                  </Content>
                  <ContentSmall>
                    {personalInfo?.firstName} {personalInfo?.lastName}
                  </ContentSmall>
                </CallBox>
              </div>
              <div className="col-3">
                <Skills>
                  <Title>Skills</Title>
                </Skills>
                <SkillsBox>
                  {skillsInfo.professionalSkills.map((data) => {
                    return <TitleSmall>{data.name}</TitleSmall>;
                  })}
                </SkillsBox>
                <CreativeSkills>
                  <TitleSmall>Creative Skills</TitleSmall>
                  {skillsInfo.softwareSkills.map((data) => {
                    return <Content>{data.name}</Content>;
                  })}
                </CreativeSkills>
              </div>
              <div className="col-1">
                <Setting>
                  <HeadIcon>
                    <img src={images.setting} alt="" />
                  </HeadIcon>
                  {hobbyName.hobbiesData.map((data) => {
                    return (
                      <ImgBox>
                        <img src={data.icon} alt="" />
                      </ImgBox>
                    );
                  })}
                </Setting>
              </div>
            </div>
          </Body>
        </Container>
      </PDFExport>
    </div>
  );
};
