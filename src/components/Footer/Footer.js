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
        <Link class="navbar-brand navbar-brand2" to="/">
          <img style={{ maxWidth: "60%" }} src={logo}></img>
        </Link>

        <div
          class="navbar-collapse footer"
          id="navbarSupportedContent"
          style={{
            justifyContent: "flex-start",
          }}
        >
          <ul class="navbar-nav ">
            <li class="nav-item nav-item1 active">
              <Link class="nav-link footer" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item nav-item1 longName1 active">
              <Link class="nav-link " to="/chooseTemplate">
                Create CV
              </Link>
            </li>
            <li
              class="nav-item nav-item1 longName1 active"
              style={{
                margin: "0%",
              }}
            >
              <Link class="nav-link longName1" to="/jobSearch">
                Search Job
              </Link>
            </li>
            <li class="nav-item nav-item1 active">
              <Link class="nav-link" to="/pricing">
                Pricing
              </Link>
            </li>
            <li class="nav-item nav-item1 active">
              <Link class="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="social2">
          <ul id="social-list2">
            <li>
              <a to="" className="policy2">
                <i class="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a to="" className="policy2">
                <i class="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a to="" className="policy2">
                <i class="fab fa-linkedin" />
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <SecondFooter />
    </>
  );
}
