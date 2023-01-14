import Axios from "axios";
import {
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_CONTACT_REQUEST,
  USER_CONTACT_SUCCESS,
  USER_CONTACT_FAIL,
   USER_REVIEW_REQUEST ,
   USER_REVIEW_SUCCESS ,
   USER_REVIEW_FAIL ,
} from "../constants/userConstants";
import { setUserInfo } from "../helpers";
import { apiUrl } from "../services/settings";

export const googleLogin = (email, name) => async (dispatch) => {
  console.log("user in actions", email);

  dispatch({
    type: USER_SIGNINREQUEST,
    payload: {
      email,
      name,
    },
  });
  try {
    const { data } = await Axios.post("/api/users/googleLogin", {
      email,
      name,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    setUserInfo(JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const facebookLogin = (email, name) => async (dispatch) => {
  // console.log("user in actions", email);

  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {
      email,
      name,
    },
  });
  try {
    const { data } = await Axios.post("/api/users/facebookLogin", {
      email,
      name,
    });
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
    setUserInfo(JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const signin = (email, password) => async (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
    payload: {
      email,
      password,
    },
  });
  try {
    const { data } = await Axios.post(`${apiUrl}/users/login`, {
      username: email,
      password,
    });
    console.log({ data });
    setUserInfo(JSON.stringify(data));
    dispatch({
      type: USER_SIGNIN_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.log({ err });
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const register =
  (userName, email, password, firstName, lastName, phone) =>
  async (dispatch) => {
    dispatch({
      type: USER_REGISTER_REQUEST,
      payload: {
        userName,
        email,
        password,
        firstName,
        lastName,
        phone,
        // loginType:"Email/Password"
      },
    });
    try {
      const { data } = await Axios.post(`${apiUrl}/users/signup`, {
        username: userName,
        email,
        password,
        firstname: firstName,
        lastname: lastName,
        phone_number: phone,
      });
      dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: data,
      });
      setUserInfo(JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const signout = () => (dispatch) => {
  console.log("sign out action");
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
};

export const contact = (email, name, messages) => async (dispatch) => {
  dispatch({
    type: USER_CONTACT_REQUEST,
    payload: {
      email,
      name,
      messages,
    },
  });
  try {
    const { data } = await Axios.post(`${apiUrl}/contactus`, {
      email,
      name,
      message: messages,
    });
    dispatch({
      type: USER_CONTACT_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userContactInfo", JSON.stringify(data));
  } catch (err) {
    dispatch({
      type: USER_CONTACT_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const review = (rate, messages) => async (dispatch) => {
    dispatch({
      type: USER_CONTACT_REQUEST,
      payload: {
        rate,
        messages,
      },
    });
    try {
      const { data } = await Axios.post(`${apiUrl}/rating`, {
        rate,
        message: messages,
      });
      dispatch({
        type: USER_REVIEW_SUCCESS,
        payload: data,
      });
  
      localStorage.setItem("userReview", JSON.stringify(data));
    } catch (err) {
      dispatch({
        type: USER_REVIEW_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };
