import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import MainScreen from "../Screens/MainScreen/MainScreen";
import RegisterScreen from "../Screens/RegisterScreen/RegisterScreen";
import SigninScreen from "../Screens/SigninScreen/SigninScreen";
import ChooseTemplateScreen from "../Screens/ChooseTemplateScreen/ChooseTemplateScreen";
import GeneratePDFScreen from "../Screens/GeneratePDFScreen/GeneratePDFScreen";
import HomePage from "./../Screens/HomePage/HomePage";
import ContactScreen from "./../Screens/ContactScreen/ContactScreen";
import PricingScreen from "./../Screens/PricingScreen/PricingScreen";
import CreateCVPage from "./../Screens/CreateCVPage/CreateCVPage";
import ViewCV from "./../Screens/View CV/ViewCV";
import BasicInfo from "./../Screens/CVMaking/BasicInfo/BasicInfo";
import CvForm from "./../Screens/CVMaking/Main/main";
import Extras from "./../Screens/CVMaking/Extras/Extras";
import Feedback from "./../Screens/HomePage/Feedback";
import ReviewForm from "./../components/Utils/ReviewForm/ReviewForm";

import Work from "./../Screens/CVMaking/Work/Work";
import Education from "./../Screens/CVMaking/Education/Education";
import Skills from "./../Screens/CVMaking/Skills/Skills";
import PayPalScreen from "../Screens/PayPalScreen/PaypalScreen";
import JobSearchScreen from "./../Screens/JobSearchScreen/JobSearchScreen";
import ResumeEight from "./../components/ResumeComponent/ResumeEight/ResumeEight";
import ResumeOne from "./../components/ResumeComponent/ResumeOne/ResumeOne";
import ResumeFive from "./../components/ResumeComponent/ResumeFive/ResumeFive";
import ResumeEleven from "./../components/ResumeComponent/ResumeEleven/ResumeEleven";
import PaymentScreen from "./../Screens/PaymentScreen/PaymentScreen";
import {
  forceLogout,
  getIsLoggedIn,
  getISMemeberUser,
  removeToken,
} from "../helpers";

const RestrictedRoute = ({ component: Component, paid = false, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const token = getIsLoggedIn();
      const shouldbeMember = paid && !getISMemeberUser();
      if (!token) {
        return (
          <Redirect
            to={{
              pathname: "/signin",
              state: { from: props.location },
            }}
          />
        );
      }

      if (shouldbeMember) {
        return (
          <Redirect
            to={{
              pathname: "/Payment",
              state: { from: props.location },
            }}
          />
        );
      }

      return (rest.render && rest.render()) || <Component {...props} />;
    }}
  />
);
export default class Routers extends Component {
  componentDidMount() {
    window.addEventListener("beforeunload", forceLogout);
    window.addEventListener("unload", forceLogout);
  }
  componentWillUnmount() {
    window.removeEventListener("beforeunload", forceLogout);
    window.removeEventListener("unload", forceLogout);
  }
  render() {
    return (
      <Router>
        {/* <Route path='/' exact component={ChooseTemplateScreen} /> */}
        <Route paid={true} path="/" exact component={HomePage} />
        <RestrictedRoute path="/pricing" exact component={PricingScreen} />
        <RestrictedRoute path="/Payment" exact component={PaymentScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        {/* <RestrictedRoute path="/createCV" exact component={CreateCVPage} /> */}
        <Route path="/viewCV" exact component={ViewCV} />
        <Route path="/basicInfo" exact component={BasicInfo} />
        <Route path="/extras" exact component={Extras} />
        <Route path="/feedback" exact component={Feedback} />
         <Route path="/reviewform" exact component={ReviewForm} />

        <Route path="/work" exact component={Work} />
        <Route path="/education" exact component={Education} />
        <Route path="/skills" exact component={Skills} />
        <RestrictedRoute path="/jobSearch" exact component={JobSearchScreen} />
        {/* <Route path="/payment" exact component={PayPalScreen} /> */}
        <Route path="/resumeone" exact component={ResumeOne} />
        <Route path="/resumeeight" exact component={ResumeEight} />
        <Route path="/resumefive" exact component={ResumeFive} />
        <Route path="/resumeeleven" exact component={ResumeEleven} />
        <RestrictedRoute
          path="/chooseTemplate"
          exact
          component={ChooseTemplateScreen}
        />
        <RestrictedRoute path="/cvform" exact component={CvForm} />

        {/* <Route path="/create" exact component={MainScreen} /> */}
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/generate" exact component={GeneratePDFScreen} />
      </Router>
    );
  }
}
