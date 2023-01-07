import React, { useState } from "react";
import JobSearchBanner from "../../components/JobSearch/JobSearchBanner/JobSearchBanner";
import Navbar from "./../../components/Navbar/Navbar";

import "./JobSearchScreen.css";
function JobSearchScreen() {
  return (
    <>
      <Navbar />

      <JobSearchBanner />

      {/* <JobSearchBanner/> */}
    </>
  );
}

export default JobSearchScreen;
