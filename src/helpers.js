import jwtDecode from "jwt-decode";
const CryptoJS = require("crypto-js");

export const setIsLoggedIn = (token) => {
  const expirationDate = new Date().setHours(new Date().getHours() + 8);
  const encriptedExpiration = CryptoJS.AES.encrypt(
    expirationDate.toString(),
    process.env.REACT_APP_ENCRIPTION_SECRET
  );
  localStorage.setItem("token", token);
  localStorage.setItem("tokenExpiration", encriptedExpiration);
};

export const getIsLoggedIn = () => {
  const token = localStorage.getItem("token");
  return token;
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const forceLogout = () => {
  const encriptedExpiration = localStorage.getItem("tokenExpiration");
  if (!encriptedExpiration && getIsLoggedIn()) {
    removeToken();
    window.location.reload();
    return;
  }
  const decriptedBytes = CryptoJS.AES.decrypt(
    encriptedExpiration,
    process.env.REACT_APP_ENCRIPTION_SECRET
  );
  const tokenExpiration = decriptedBytes.toString(CryptoJS.enc.Utf8);

  if (
    new Date(+tokenExpiration).valueOf() < new Date().valueOf() &&
    getIsLoggedIn()
  ) {
    removeToken();
    window.location.reload();
  }
};

export const setUserInfo = (userInfo, dispatchEvent = false) => {
  localStorage.setItem("userInfo", userInfo);
  if (dispatchEvent) {
    window.dispatchEvent(new Event("storage"));
  }
};

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};

export const getISMemeberUser = () => {
  const userInfo = getUserInfo();
  if (!userInfo || !userInfo.user) {
    return false;
  }
  return new Date(userInfo.user.exp_date).valueOf() >= Date.now();
};

export const setIsMember = () => {
  const userInfo = getUserInfo();
  if (!userInfo || !userInfo.user) {
    return;
  }
  userInfo.user.exp_date = new Date().setHours(new Date().getHours() + 1);
  localStorage.setItem("userInfo", userInfo);
};

export const ModelMapperDir = {
  FromUiToApi: "fromUiToApi",
  FromApiToUi: "fromApiToUi",
};

const modelMapper = {
  work: {
    fromApiToUi: {
      company_name: "employer",
      job_title: "title",
      from: "startDate",
      to: "endDate",
      description: "description",
    },
    fromUiToApi: {
      employer: "company_name",
      title: "job_title",
      startDate: "from",
      endDate: "to",
      description: "description",
    },
  },
  education: {
    fromApiToUi: {
      university_name: "instituteName",
      specialization: "studyField",
      from: "graduationStartDate",
      to: "graduationEndDate",
      description: "description",
    },
    fromUiToApi: {
      instituteName: "university_name",
      studyField: "specialization",
      graduationStartDate: "from",
      graduationEndDate: "to",
      description: "description",
    },
  },
  //hobbies: {},
};

export const mapModel = (model, modelType, direction) => {
  let fields = modelMapper[modelType][direction];
  const currentFields = Object.keys(fields);
  let newData = [];
  model.forEach((m) => {
    let item = {};
    currentFields.forEach((field) => {
      item[fields[field]] = m[field];
    });
    if (!Object.values(item).every((v) => !v)) {
      newData.push(item);
    }
  });

  return newData;
};

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const getFormattedDate = (date) => {
  if (!date) {
    return;
  }
  const dateObj = new Date(date);
  const month = months[dateObj.getMonth()];
  return `${month}-${dateObj.getFullYear()}`;
};
