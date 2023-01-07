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
import { getIsLoggedIn } from "../../helpers";

const { Option } = Select;
const provinceData = ["Male", "Female"];

function RegisterScreen(props) {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  // const [gender, setGender] = useState("");
  // const [profession, setProfession] = useState("");
  // const [birthDate, setBirthDate] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(userName, email, password, firstName, lastName, phone));
  };

  useEffect(() => {
    if (userInfo || getIsLoggedIn()) {
      props.history.push("/");
    }
  }, [props.history, userInfo]);

  return (
    <>
      <Navbar />
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
                <label>First Name</label>
                <InputField
                  placeholder="First Name"
                  suffix={false}
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="username">
                <label>Last Name</label>
                <InputField
                  placeholder="Last Name"
                  suffix={false}
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="username">
                <label>User Name</label>
                <InputField
                  placeholder="User Name"
                  suffix={false}
                  type="text"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className="username">
                <label>Email</label>
                <InputField
                  placeholder="example@ex.com"
                  suffix={false}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="username">
                <label htmlFor="email">Phone</label>
                <InputField
                  placeholder="##########"
                  suffix={false}
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
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

              {/* <div className="username">
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
              </div> */}
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
