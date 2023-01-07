import React from "react";
import LinkedIn from "linkedin-login-for-react";
import linkedInIcon from "./../Assets/icons/linkedInIcon.png";

import { useDispatch } from "react-redux";
import { googleLogin } from "../actions/userActions";

function LoginWithLinkedin(props) {
  const callbackLinkedIn = (error, code, redirectUri) => {
    if (error) {
      // signin failed
    } else {
      // Obtain authorization token from linkedin api
      // see https://developer.linkedin.com/docs/oauth2 for more info
      console.log("linked in ==>", code);
    }
  };
  return (
    <div>
      <LinkedIn
        clientId="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"
        callback={callbackLinkedIn}
        style={props.style}
        className={props.className}
        scope={["r_liteprofile", "r_emailaddress"]}
        text={
          <>
            <img className="mx-1" src={linkedInIcon}></img>
            {props.name}
          </>
        }
      />
      {/* <button
        style={props.style}
        className={props.className}>
        <img className="mx-1" src={linkedInIcon}></img>
        {props.name}
      </button> */}
    </div>
  );
}

export default LoginWithLinkedin;

// function LoginWithLinkedin(props) {
//   const dispatch = useDispatch();

//   const responseSuccessGoogle = (response) => {

//       dispatch(googleLogin(response.profileObj.email, response.profileObj.name));
//   }

//   const responseFailGoogle = (response) => {
//       console.log("error", response);
//   }
//   return (
//       <div
//       >
//           <GoogleLogin
//               clientId="241875015765-j7jeinij0m8par8uco2stsjo4boceiou.apps.googleusercontent.com"
//               buttonText={props.name}
//               onSuccess={responseSuccessGoogle}
//               onFailure={responseFailGoogle}
//               cookiePolicy={'single_host_origin'}
//               render={renderProps => (
//                   <button
//                       style={props.style}
//                       className={props.className}
//                       onClick={renderProps.onClick}
//                       disabled={renderProps.disabled}>
//                       <img className="mx-1" src={linkedInIcon}></img>
//                       {props.name}
//                   </button>
//               )}

//           />
//       </div>
//   )
// }
