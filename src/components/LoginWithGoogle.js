import React from 'react';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { googleLogin } from '../actions/userActions';
import icons8 from './../Assets/icons/icons8-google.png'
function LoginWithGoogle(props) {
    const dispatch = useDispatch();

    const responseSuccessGoogle = (response) => {

        dispatch(googleLogin(response.profileObj.email, response.profileObj.name));
    }

    const responseFailGoogle = (response) => {
        console.log("error", response);
    }
    return (
        <div
        >
            <GoogleLogin
                clientId="241875015765-j7jeinij0m8par8uco2stsjo4boceiou.apps.googleusercontent.com"
                buttonText={props.name}
                onSuccess={responseSuccessGoogle}
                onFailure={responseFailGoogle}
                cookiePolicy={'single_host_origin'}
                render={renderProps => (
                    <button
                        style={props.style}
                        className={props.className}
                        onClick={renderProps.onClick}
                        disabled={renderProps.disabled}>
                        <img className="mx-2" src={icons8}></img>
                        {props.name}
                    </button>
                )}

            />
        </div>
    )
}

export default LoginWithGoogle
