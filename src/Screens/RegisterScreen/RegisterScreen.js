import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../../actions/userActions";
import Loadingbox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import "./styles.css";
import InputField from "./../../components/Utils/CVMaking Components/InputFields/InputField";
import { Select } from "antd";
import Navbar from "./../../components/Navbar/Navbar";

const { Option } = Select;
const provinceData = ["Male", "Female"];

function RegisterScreen(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profession, setProfession] = useState("");
  const [birthDate, setBirthDate] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, gender, profession, birthDate));
  };

  useEffect(() => {
    if (userInfo) {
      props.history.push("/generate");
    }
  }, [props.history, userInfo]);

  return (
    <>
      {/* <Navbar /> */}
      <div className="register">
        <div className="image-background">
          <div className="content">
            <form className="form" onSubmit={submitHandler}>
              <div>
                <h3 style={{ fontFamily: "AvenirText", color: "#0a2c66" }}>
                  Sign Up
                </h3>
              </div>
              {loading && <Loadingbox />}
              {error && <MessageBox variant="danger">{error}</MessageBox>}
              <div className="username">
                <label htmlFor="username">Full Name</label>
                <InputField
                  placeholder="Your Name"
                  suffix={false}
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="username">
                <label htmlFor="email">Email</label>
                <InputField
                  placeholder="Your Email"
                  suffix={false}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="username">
                <label htmlFor="password">Password</label>
                <InputField
                  placeholder="Enter Password"
                  suffix={false}
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="username">
                <label htmlFor="date">Your Birth Date</label>
                <InputField
                  type="date"
                  onChange={(e) => setBirthDate(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="profession">Your Profession</label>
                <InputField
                  placeholder="Designer, Banking, Business"
                  suffix={false}
                  type="text"
                  onChange={(e) => setProfession(e.target.value)}
                />
              </div>
              <div className="form-button">
                <button className="primary" type="submit">
                  Sign Up
                </button>
              </div>
              <div className="confirm">
                <p>
                  Already have an account ? <Link to="/signin">Sign In</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterScreen;
