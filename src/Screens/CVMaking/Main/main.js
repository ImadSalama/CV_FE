import React, { useState, useRef } from "react";

import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import BasicInfo from "../BasicInfo/BasicInfo";
import Navbar from "./../../../components/Navbar/Navbar";
import Footer from "./../../../components/Footer/Footer";
import Skills from "../Skills/Skills";
import WorkHistory from "../Work/Work";
import Education from "../Education/Education";
import Extras from "../Extras/Extras";
import ImageModal from "../../../components/ImageModal/ImageModal";

const stepPages = [
  BasicInfo,
  WorkHistory,
  Education,
  Skills,
  Extras,
  ImageModal,
];
import { useQuery } from "../../../services/urlQueryService";
import ShowResume from "../../../components/ShowResume/ShowResume";
import "./main.css";
import { getISMemeberUser } from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default () => {
  const [step, setStep] = React.useState(0);
  const [isMember] = React.useState(() => getISMemeberUser());

  const [personalInfo, setPersonalInfo] = useState({});
  const [extraFields, setExtraFields] = useState({
    references: [
      {
        referenceName: "",
        referenceEmail: "",
        referencePhone: "",
      },
    ],
    trainings: [
      {
        trainingName: "",
        trainingYear: "",
        courseName: "",
        duration: "",
      },
    ],

    projects: [
      {
        projectName: "",
        projectNumber: "",
        projectDescription: "",
      },
    ],
    pye: [
      {
        projectsCompleted: "",
        experience: "",
        customers: "",
      },
    ],
    interestedLanguage: [
      {
        intrestName: "Scripted Languages",
        intrestLang: "",
      },
    ],
    facts: [
      {
        factName: "",
      },
    ],
    frustration: [
      {
        frustrationName: "",
      },
    ],
    scanario: [
      {
        scanarioName: "",
      },
    ],
    personality: [
      {
        personality: "",
      },
    ],
  });
  const [hobbyName, setHobbyName] = useState({
    hobbiesData: [],
  });
  const [workExperienceList, setWorkExperienceList] = useState([{}]);
  const [educationDetailsList, setEducationDetailsList] = useState([{}]);
  const [skillsInfo, setSkillsInfo] = useState({
    softwareSkills: [
      {
        skillName: "",
        rating: 70,
      },
    ],
    professionalSkills: [
      {
        name: "",
        skillHeading: "Object Programming & framework",
        rating: 50,
        skillsName: "",
        skillExperience: "",
      },
    ],
    degreeProgram: [""],
    language: [],
    interest: [],
  });
  const [profileImage, setProfileImage] = useState(null);
  const [previewResume, setPreviewResume] = useState(false);
  const query = useQuery();
  const resumeNumber = query.get("resume");

  const profileImageRef = useRef();
  const [formState, setFormState] = React.useState({});

  const googleTranslateElementInit = () => {
    console.log(
      "window.google.translate",
      window.google.translate.TranslateElement.InlineLayout
    );
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "iw,en",
      },
      "google_translate_element"
    );
    document.getElementById();
  };
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
  const closeModal = () => {
    setPreviewResume(false);
  };

  const [steps, setSteps] = useState([
    {
      label: "Basic Info",
      isValid: undefined,
    },
    {
      label: "Work History",
      isValid: undefined,
    },
    {
      label: "Education",
      isValid: undefined,
    },
    {
      label: "Skills",
      isValid: undefined,
    },
    {
      label: "Extras",
      isValid: undefined,
    },
  ]);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const isPreviousStepsValid =
    steps
      .slice(0, step)
      .findIndex((currentStep) => currentStep.isValid === false) === -1;
  const onStepSubmit = React.useCallback(
    (event) => {
      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isLastStep && isPreviousStepsValid && isValid) {
        setPreviewResume(true);
      }
    },
    [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep]
  );
  const StepPagePrint = stepPages[step];
  const onChangeProfileClick = () => {
    profileImageRef.current.click();
  };

  const onProfileImageSelect = (event) => {
    if (event.target.files && event.target.files[0]) {
      const img = event.target.files[0];
      setProfileImage(img);
    }
  };

  const history = useHistory();

  React.useEffect(() => {
    if (!isMember && resumeNumber !== "One" && resumeNumber !== "Two") {
      history.push("/Payment");
    }
  }, [isMember, resumeNumber]);

  if (!isMember && resumeNumber !== "One" && resumeNumber !== "Two") {
    return null;
  }

  return (
    <>
      {previewResume && (
        <ShowResume
          previewResume={previewResume}
          closeModal={closeModal}
          templateName={resumeNumber}
          personalInfo={personalInfo}
          workExperienceList={workExperienceList}
          hobbyName={hobbyName}
          extraFields={extraFields}
          educationDetailsList={educationDetailsList}
          skillsInfo={skillsInfo}
          profileImage={profileImage && URL.createObjectURL(profileImage)}
        />
      )}
      <Navbar isCvForm={true} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Stepper
          value={step}
          items={steps}
          onChange={(e) => setStep(e.value)}
        />

        <Form
          initialValues={formState}
          onSubmitClick={onStepSubmit}
          render={(formRenderProps) => (
            <div
              style={{
                alignSelf: "center",
              }}
            >
              <FormElement style={{}}>
                {/* {stepPages[step]} */}
                <StepPagePrint
                  personalInfo={personalInfo}
                  setPersonalInfo={setPersonalInfo}
                  setExtraFields={setExtraFields}
                  extraFields={extraFields}
                  hobbyName={hobbyName}
                  setHobbyName={setHobbyName}
                  workExperienceList={workExperienceList}
                  setWorkExperienceList={setWorkExperienceList}
                  educationDetailsList={educationDetailsList}
                  setEducationDetailsList={setEducationDetailsList}
                  profileImage={
                    profileImage && URL.createObjectURL(profileImage)
                  }
                  onChangeProfileClick={onChangeProfileClick}
                  previewResume={() => setPreviewResume(true)}
                  skillsInfo={skillsInfo}
                  setSkillsInfo={setSkillsInfo}
                />

                <div
                  style={{
                    justifyContent: "space-between",
                    alignContent: "center",
                    width: "75%",
                  }}
                  className={"k-form-buttons k-buttons-end margin-auto"}
                >
                  <span
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    Step {step + 1} of 4
                  </span>
                  <div
                    className="prev-next-btn"
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    {step !== 0 ? (
                      <Button
                        style={{
                          marginRight: "16px",
                          backgroundColor: "#fff",
                          fontSize: "12px",
                          padding: "2% 6%",
                          borderRadius: "5px",
                          color: "#0a2c66",
                          fontStyle: "AvenirText",
                          width: "fit-content",
                          boxShadow: "0 5px 15px rgba(255, 255, 255, .4)",
                        }}
                        onClick={onPrevClick}
                      >
                        Previous
                      </Button>
                    ) : undefined}
                    <Button
                      primary={true}
                      disabled={isLastStep ? !isPreviousStepsValid : false}
                      onClick={formRenderProps.onSubmit}
                      style={{
                        marginRight: "16px",

                        backgroundColor: "#fff",
                        fontSize: "12px",
                        padding: "2% 6%",
                        borderRadius: "5px",
                        color: "#0a2c66",
                        fontStyle: "AvenirText",
                        width: "fit-content",
                        boxShadow: "0 5px 15px rgba(255, 255, 255, .4)",
                      }}
                    >
                      {isLastStep ? "Submit" : "Next"}
                    </Button>
                  </div>
                </div>
              </FormElement>
            </div>
          )}
        />
        <input
          type="file"
          accept="image/*"
          multiple={false}
          hidden={true}
          ref={profileImageRef}
          onChange={onProfileImageSelect}
        />
      </div>
      <Footer />
    </>
  );
};
