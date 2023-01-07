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

export const setUserInfo = (userInfo) => {
  localStorage.setItem("userInfo", userInfo);
};

export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem("userInfo"));
};

export const getISMemeberUser = () => {
  const { user } = getUserInfo();
  return new Date(user.exp_date).valueOf() >= Date.now();
};
