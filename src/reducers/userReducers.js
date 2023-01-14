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
import { setIsLoggedIn } from "../helpers";

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true };
    case USER_SIGNIN_SUCCESS:
      setIsLoggedIn(action.payload.token);
      window.location.reload();
    // return {
    //   loading: false,
    //   userInfo: action.payload,
    // };
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userContactReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_CONTACT_REQUEST:
      return { loading: true };
    case USER_CONTACT_SUCCESS:
      return {
        loading: false,
        userContactInfo: action.payload,
      };
    case USER_CONTACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
