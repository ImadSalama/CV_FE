import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../../actions/userActions";
import Loadingbox from "../../components/LoadingBox/LoadingBox";
import MessageBox from "../../components/MessageBox/MessageBox";
import "./styles.css";
import LoginWithGoogle from "../../components/LoginWithGoogle";
import LoginWithLinkedIn from "../../components/LoginWithLinkedin";
import InputField from "../../components/Utils/CVMaking Components/InputFields/InputField";
import Navbar from "../../components/Navbar/Navbar";
import { getIsLoggedIn } from "../../helpers";

function SigninScreen(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo, loading, error } = userSignin;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signin(email, password));
  };

  useEffect(() => {
    if (userInfo || getIsLoggedIn()) {
      props.history.push("/");
    }
  }, [props.history, userInfo]);

  return (
    <>
      <Navbar />
      <div className="login">
        <div className="image-background">
          <div className="content">
            <form className="form" onSubmit={submitHandler}>
              <div>
                <h4 style={{ fontFamily: "AvenirText", color: "#0a2c66" }}>
                  Sign In
                </h4>
              </div>
              <LoginWithGoogle
                name="Login with Google"
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  width: "250px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <LoginWithLinkedIn
                name="Login with LinkedIn"
                style={{
                  backgroundColor: "white",
                  height: "40px",
                  width: "250px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
              <div className="text-center" style={{ fontFamily: "AvenirText" }}>
                <small>OR</small>
              </div>
              {loading && <Loadingbox />}
              {error && <MessageBox variant="danger">{error}</MessageBox>}

              <div>
                <label htmlFor="email">
                  <small>Email</small>
                </label>

                <InputField
                  placeholder="Your Email"
                  suffix={false}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password">
                  <small>Password</small>
                </label>

                <InputField
                  placeholder="Enter Password"
                  suffix={false}
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="forgot-pass">
                <Link>
                  <small>Forgot Password ?</small>
                </Link>
              </div>
              <div className="form-button">
                <button className="primary" type="submit">
                  Sign in
                </button>
              </div>
              <div
                className="confirm mb-3"
                style={{ fontFamily: "AvenirText" }}
              >
                <small>
                  Don't have an account ? <Link to="/register">Sign Up</Link>
                </small>
              </div>
              {/* <LoginWithGoogle />
            <LoginWithFacebook /> */}
              {/* <LoginWithInstagram /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SigninScreen;
