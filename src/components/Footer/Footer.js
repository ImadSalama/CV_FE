import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "./../../Assets/images/logo2.png";
import "./Footer.css";
import SecondFooter from "./../SecondFooter/SecondFooter";

export default function Footer({ bgColor, border }) {
  return (
    <>
      <nav
        style={{
          backgroundColor: bgColor ? bgColor : "#FFFFFF",
          borderTop: border ? "1px solid #DCDADA" : "",
        }}
        class="navbar navbar-expand-lg navbar-light"
      >
        <a class="navbar-brand navbar-brand2" href="#">
          <img style={{ maxWidth: "60%" }} src={logo}></img>
        </a>

        <div class="navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item nav-item1 active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item nav-item1 longName1 active">
              <a class="nav-link " href="#">
                Create CV
              </a>
            </li>
            <li class="nav-item nav-item1 longName1 active">
              <a class="nav-link " href="#">
                Search Job
              </a>
            </li>
            <li class="nav-item nav-item1 active">
              <a class="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li class="nav-item nav-item1 active">
              <a class="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <SecondFooter />
    </>
  );
}
