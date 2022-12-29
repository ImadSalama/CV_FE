import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

import Work from "./../Screens/CVMaking/Work/Work";
import Education from "./../Screens/CVMaking/Education/Education";
import Skills from "./../Screens/CVMaking/Skills/Skills";
import PayPalScreen from "../Screens/PayPalScreen/PaypalScreen";
import JobSearchScreen from "./../Screens/JobSearchScreen/JobSearchScreen";
import ResumeEight from "./../components/ResumeComponent/ResumeEight/ResumeEight";
import ResumeOne from "./../components/ResumeComponent/ResumeOne/ResumeOne";
import ResumeFive from "./../components/ResumeComponent/ResumeFive/ResumeFive";
import ResumeEleven from "./../components/ResumeComponent/ResumeEleven/ResumeEleven";

export default class Routers extends Component {
  render() {
    return (
      <Router>
        {/* <Route path='/' exact component={ChooseTemplateScreen} /> */}
        <Route path="/" exact component={HomePage} />
        <Route path="/pricing" exact component={PricingScreen} />
        <Route path="/contact" exact component={ContactScreen} />
        <Route path="/createCV" exact component={CreateCVPage} />
        <Route path="/viewCV" exact component={ViewCV} />
        <Route path="/basicInfo" exact component={BasicInfo} />
        <Route path="/extras" exact component={Extras} />

        <Route path="/work" exact component={Work} />
        <Route path="/education" exact component={Education} />
        <Route path="/skills" exact component={Skills} />
        <Route path="/jobSearch" exact component={JobSearchScreen} />
        <Route path="/payment" exact component={PayPalScreen} />
        <Route path="/resumeone" exact component={ResumeOne} />
        <Route path="/resumeeight" exact component={ResumeEight} />
        <Route path="/resumefive" exact component={ResumeFive} />
        <Route path="/resumeeleven" exact component={ResumeEleven} />
        <Route path="/chooseTemplate" exact component={ChooseTemplateScreen} />
        <Route path="/cvform" exact component={CvForm} />

        <Route path="/create" exact component={MainScreen} />
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/register" exact component={RegisterScreen} />
        <Route path="/generate" exact component={GeneratePDFScreen} />
      </Router>
    );
  }
}
