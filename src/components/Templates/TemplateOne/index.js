import React, { useRef } from "react";
import styled from "styled-components";
import icons from "./assets";
import { useReactToPrint } from "react-to-print";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import moment from "moment";
import jsPDF from "jspdf";

const Container = styled.div`
  /* width: 850px; */
  margin-left: auto;
  margin-right: auto;
`;

const BlockQuote = styled.blockquote`
  position: relative;
  text-align: center;
  padding: 1rem 1.2rem;
  color: #484748;
  margin: 1rem 0px 2rem;
  height: fit-content;
  background-color: rgba(237, 185, 15, 0.29);

  /* background: linear-gradient(to right, #039be5 4px, transparent 4px) 0 100%,
      linear-gradient(to left, #039be5 4px, transparent 4px) 100% 0,
      linear-gradient(to bottom, #039be5 4px, transparent 4px) 100% 0,
      linear-gradient(to top, #039be5 4px, transparent 4px) 0 100%;
    background-repeat: no-repeat;
    background-size: 20px 20px; */
  :before {
  }
  :after {
  }
`;

const BiographyContainer = styled.div``;

const BiographyTitle = styled.strong`
  font-size: 1.56em;
  color: #edb910;
`;

const Biography = styled.p`
  text-align: justify;
`;

const PersonalityContainer = styled.div``;

const PersonalityTitle = styled.strong`
  font-size: 1.56em;
  color: #edb910;
`;

const Personality = styled.div`
  display: flex;
`;

const PersonalityDiv = styled.div`
  border: 1px solid #edb910;
  border-radius: 20px;
  padding: 5px;
  width: 25%;
  text-align: center;
  margin-right: 10px;
`;

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #2d323a;
  padding: 20px 0px;
`;

const FullName = styled.strong`
  font-size: 2.31em;
  color: white;
`;

const Occupation = styled.strong`
  color: #edb910;
  font-size: 1.56em;
`;

const UserDetails = styled.div`
  color: white;
`;

const Detail = styled.div`
  width: 100%;
  font-size: 0.8em;
  margin: 5px 0px;
  display: flex;
`;

const DetailIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  color: white;
`;

const DetailText = styled.p`
  color: white;
  margin-bottom: 0px;
  display: inline;
`;

const DetailsImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
`;

const NatureContianer = styled.div``;

const MotivationsContainer = styled.div`
  display: flex;
`;
const GreenStraightLine = styled.div`
  border-left: 3px solid #d8ffc2;
`;

const RedStraightLine = styled.div`
  border-left: 3px solid #ffdcdc;
`;

const Motivations = styled.div``;

const ScenerioContainer = styled.div`
  background-color: #f6f6f6;
  padding: 10px;
  border-radius: 5px;
  margin-top: 50px;
`;

const ScenerioTitle = styled.strong`
  font-size: 1.56em;
  color: #edb910;
`;

const Scenerio = styled.div`
  text-align: justify;
`;

const References = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 20%;
`;

const RefText = styled.strong`
  font-size: 1.56em;
  color: #edb910;
`;

const Influences = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const InfluenceIcon = styled.img`
  height: 1.5em;
  width: 1.5em;
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
  const container = React.useRef(null);
  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (pdfExportComponent.current) {
      pdfExportComponent.current.save();
    }
  };

  const reportTemplateRef = useRef(null);

  const handleGeneratePdf = () => {
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
          onClick={handleGeneratePdf}
        >
          {" "}
          Download Resume{" "}
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
            <ProfileImage>
              <img
                src={profileImage || "https://picsum.photos/600"}
                height={600}
              />
            </ProfileImage>
            <PersonalInfo>
              <FullName>{`${personalInfo?.firstName} ${personalInfo?.lastName}`}</FullName>
              <Occupation>Software Engineer</Occupation>
              <UserDetails>
                <Detail>
                  <div className="col-2 my-row justify-content-center">
                    <DetailIcon src={icons.cake} />
                  </div>
                  <div className="col-10">
                    <DetailText>{personalInfo?.dob}</DetailText>
                  </div>
                </Detail>
                <Detail>
                  <div className="col-2 my-row justify-content-center">
                    <DetailIcon src={icons.heart} />
                  </div>
                  <div className="col-10">
                    <DetailText>{extraFields?.status}</DetailText>
                  </div>
                </Detail>
                <Detail>
                  <div className="col-2 my-row justify-content-center">
                    <DetailIcon src={icons.destination} />
                  </div>
                  <div className="col-10 ">
                    <DetailText>{extraFields?.nationality}</DetailText>
                  </div>
                </Detail>
                <Detail>
                  <div className="col-2 my-row justify-content-center">
                    <DetailIcon src={icons.bear} />
                  </div>
                  <div className="col-10">
                    <DetailText>{extraFields.kids}</DetailText>
                  </div>
                </Detail>
                <Detail>
                  <div className="col-2 my-row justify-content-center">
                    <DetailIcon src={icons.graduation} />
                  </div>
                  <div className="col-10">
                    <DetailText>{personalInfo?.profession} </DetailText>
                  </div>
                </Detail>
              </UserDetails>
            </PersonalInfo>
            <References>
              <RefText> References and Influences</RefText>
              <div className="my-row pt-5">
                {hobbyName.hobbiesData.map((data) => {
                  return (
                    <Influences className="col-6">
                      <InfluenceIcon src={data.icon} />
                      <div>{data.name}</div>
                    </Influences>
                  );
                })}
              </div>
            </References>
          </div>
          <div className="col-8">
            <BlockQuote>
              {extraFields?.quote}
              <cite>
                {" "}
                - {personalInfo?.firstName} {personalInfo?.lastName}
              </cite>
            </BlockQuote>
            <BiographyContainer>
              <BiographyTitle>Biography</BiographyTitle>
              <Biography>{personalInfo?.history}</Biography>
            </BiographyContainer>
            <PersonalityContainer>
              <PersonalityTitle>Personality</PersonalityTitle>
              <Personality>
                {extraFields.personality.map((data) => {
                  return <PersonalityDiv> {data.personality} </PersonalityDiv>;
                })}
              </Personality>
              <div className="row mt-4">
                <NatureContianer className="col-6">
                  <MotivationsContainer>
                    <GreenStraightLine></GreenStraightLine>
                    <Motivations className="ml-4">
                      <div>
                        {/* <i className="fa fa-thumbs-up"></i> */}

                        <DetailsImg src={icons.like} />
                        <strong className="ml-2">Motivations</strong>
                      </div>
                      <div>
                        <div>
                          {extraFields.facts.map((data) => {
                            return <div>-{data.factName}</div>;
                          })}
                        </div>
                      </div>
                    </Motivations>
                  </MotivationsContainer>
                </NatureContianer>
                <NatureContianer className="col-6">
                  <MotivationsContainer>
                    <RedStraightLine></RedStraightLine>
                    <Motivations className="ml-4">
                      <div>
                        <DetailsImg src={icons.dislike} />
                        <strong className="ml-2">Frustration</strong>
                      </div>
                      <div>
                        <div>
                          {extraFields.frustration.map((data) => {
                            return <div>- {data.frustrationName}.</div>;
                          })}
                        </div>
                      </div>
                    </Motivations>
                  </MotivationsContainer>
                </NatureContianer>
              </div>
            </PersonalityContainer>
            <ScenerioContainer>
              <ScenerioTitle>Scenerio</ScenerioTitle>
              <Scenerio>{extraFields.scanarios}</Scenerio>
            </ScenerioContainer>
          </div>
        </div>
      </Container>
      {/* </PDFExport> */}
    </div>
  );
};
