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
  USER_REVIEW_REQUEST,
  USER_REVIEW_SUCCESS,
  FETCH_USER_REVIEW_SUCCESS,
  USER_REVIEW_FAIL,
  FETCH_USER_REVIEW_ERROR,
} from "../constants/userConstants";
import { getIsLoggedIn, setUserInfo } from "../helpers";
import { apiUrl } from "../services/settings";

export const googleLogin = (email, name) => async (dispatch) => {
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
      // dispatch({
      //   type: USER_REGISTER_SUCCESS,
      //   payload: data,
      // });
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
  localStorage.removeItem("userInfo");
  localStorage.removeItem("cartItems");
  dispatch({ type: USER_SIGNOUT });
};

export const contact =
  (email, name, messages, cb = (err) => {}) =>
  async (dispatch) => {
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

      if (cb && typeof cb === "function") {
        cb();
      }
      dispatch({
        type: USER_CONTACT_SUCCESS,
        payload: data,
      });
    } catch (err) {
      if (cb && typeof cb === "function") {
        cb(true);
      }

      dispatch({
        type: USER_CONTACT_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const review =
  (rate, comment, email, cb = (err) => {}) =>
  async (dispatch) => {
    dispatch({
      type: USER_REVIEW_REQUEST,
      payload: {
        rate,
        email,
        comment,
      },
    });
    try {
      const token = getIsLoggedIn();
      const { data } = await Axios.post(
        `${apiUrl}/rating`,
        {
          rate,
          comment,
          email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (cb && typeof cb === "function") {
        cb();
      }
      dispatch({
        type: USER_REVIEW_SUCCESS,
        payload: data,
      });

      localStorage.setItem("userReview", JSON.stringify(data));
    } catch (err) {
      if (cb && typeof cb === "function") {
        cb(true);
      }
      dispatch({
        type: USER_REVIEW_FAIL,
        payload:
          err.response && err.response.data.message
            ? err.response.data.message
            : err.message,
      });
    }
  };

export const fetchReview = () => async (dispatch) => {
  try {
    const { data } = await Axios.get(`${apiUrl}/rating`);
    dispatch({
      type: FETCH_USER_REVIEW_SUCCESS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_USER_REVIEW_SUCCESS,
      payload: [],
    });
  }

  //   const response = await axios
  //     .git(
  //       `${apiUrl}/rating`
  //         .then((response) => {
  //           return response.data;
  //         })
  //         .then((data) => {
  //           dispatch({
  //             type: USER_REVIEW_SUCCESS,
  //             payload: data,
  //           });
  //         })
  //     )
  //     .catch((error) => {
  //       console.log("error111", error)
  //       // throw error;
  //     });
};

export const updateUserProfile = (body) => async (dispatch) => {
  try {
    const token = getIsLoggedIn();
    const { data } = await Axios.put(`${apiUrl}/users/profile`, body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (err) {}
};
export const getUserProfile = () => async (dispatch) => {
  try {
    const token = getIsLoggedIn();
    const { data } = await Axios.get(`${apiUrl}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUserInfo(JSON.stringify(data), true);
  } catch (err) {
    console.log("getUserProfile", err);
  }
};

export const savePayment = (paid, type) => async (dispatch) => {
  try {
    const token = getIsLoggedIn();
    const { data } = await Axios.post(
      `${apiUrl}/payment`,
      {
        paid,
        type: paid == 18 ? "Monthly" : "Quarterly",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    dispatch(getUserProfile());
  } catch (err) {}
};
