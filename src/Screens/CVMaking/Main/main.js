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
import {
  getFormattedDate,
  getISMemeberUser,
  getUserInfo,
  mapModel,
  ModelMapperDir,
} from "../../../helpers";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import {
  getUserProfile,
  updateUserProfile,
} from "../../../actions/userActions";
import { useDispatch } from "react-redux";

export default () => {
  const [step, setStep] = React.useState(0);
  const [isMember] = React.useState(() => getISMemeberUser());
  const dispatch = useDispatch();

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
  const isFromPayment = query.get("fromPayment");
  const profileImageRef = useRef();
  const [formState, setFormState] = React.useState({});

  React.useEffect(() => {
    window.addEventListener("storage", () => {
      setPreviewResume(isFromPayment && getISMemeberUser());
    });
    return () => {
      window.removeEventListener("storage", () => {
        setPreviewResume(isFromPayment && getISMemeberUser());
      });
    };
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false,
        includedLanguages: "iw,en",
      },
      "google_translate_element"
    );
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

  // React.useEffect(() => {
  //   if (!isMember && resumeNumber !== "One" && resumeNumber !== "Two") {
  //     history.push("/Payment");
  //   }
  // }, [isMember, resumeNumber]);

  React.useEffect(() => {
    dispatch(getUserProfile());
    const userInfo = getUserInfo();
    if (!userInfo || !userInfo.user) {
      return;
    }
    const {
      user: {
        firstname,
        lastname,
        email,
        phone_number,
        education,
        hobbies,
        languages,
        software,
        work_experience,
      },
    } = userInfo;

    setWorkExperienceList(
      mapModel(work_experience, "work", ModelMapperDir.FromApiToUi) || []
    );
    setSkillsInfo({
      ...skillsInfo,
      language: languages.map((lang) => lang.name),
      softwareSkills: software.map(({ programming_language, percentage }) => ({
        skillName: programming_language,
        rating: percentage * 100,
      })),
    });
    // setHobbyName({
    //   hobbiesData: (hobbies || []).map((name) => ({ name })) || [],
    // });
    setPersonalInfo({
      firstName: firstname,
      lastName: lastname,
      phone: phone_number,
      email,
      proffession: work_experience[0]?.job_title,
    });
    setEducationDetailsList(
      mapModel(education, "education", ModelMapperDir.FromApiToUi) || []
    );
  }, []);

  const handleSubmit = () => {
    const userInfo = getUserInfo();
    if (!userInfo || !userInfo.user) {
      return;
    }
    dispatch(
      updateUserProfile({
        // education: educationDetailsList.map((ed) => ({
        //   university_name: ed.instituteName,
        //   specialization: ed.studyField,
        //   from: ed.graduationStartDate,
        //   to: ed.graduationEndDate,
        //   description: ed.description,
        // })),
        // work_experience: workExperienceList.map((w) => ({
        //   company_name: w.employer,
        //   job_title: w.title,
        //   from: w.startDate,
        //   to: w.endDate,
        //   description: w.description,
        // })),
        // hobbies: hobbyName.hobbiesData.map((h) => h.name),
        firstname: personalInfo.firstName,
        lastname: personalInfo.lastName,
        phone_number: personalInfo.phone,
        email: personalInfo.email,

        education: mapModel(
          educationDetailsList,
          "education",
          ModelMapperDir.FromUiToApi
        ),
        work_experience: mapModel(
          workExperienceList.map((work) => {
            if (work.currentlyWorkHere) {
              return {
                ...work,
                endDate: null,
              };
            }
            return work;
          }),
          "work",
          ModelMapperDir.FromUiToApi
        ),
        hobbies: hobbyName.hobbiesData.map((h) => h.name),
        languages: skillsInfo.language?.map((name) => ({ name })),
        software: skillsInfo.softwareSkills?.map(({ rating, skillName }) => ({
          programming_language: skillName,
          percentage: rating * 0.01,
        })),
      })
    );
  };

  // if (!isMember && resumeNumber !== "One" && resumeNumber !== "Two") {
  //   return null;
  // }

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
                      onClick={(e) => {
                        // if (isLastStep) {
                        handleSubmit();
                        // }
                        formRenderProps.onSubmit(e);
                      }}
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
