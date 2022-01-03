import React from "react";
import SignInSignUpPageWrapper from "./SignInSignUpPageWrapper";
import signIn from "../../assets/img/signin.png";
import InputForm from "../../common/components/formInput/FormInput";
import { withRouter } from "react-router";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import GoogleButton from "../../common/components/buttons/googleButton/GoogleButton";
import FacebookButton from "../../common/components/buttons/facebookButton/FacebookButton";

const SignInPage = ({ history }) => {
  return (
    <SignInSignUpPageWrapper>
      <div className="container">
        <div className="left-side">
          <h2>Sign in</h2>
          <form>
            <InputForm type="email" label="Email" />
            <InputForm type="password" label="Password" />
            <div className="button-container">
              <RectangleButton>Sign in</RectangleButton>
              <GoogleButton>Sign in with Google</GoogleButton>
              <FacebookButton>Continue with Facebook</FacebookButton>
            </div>
          </form>
          <p>
            Haven’t got account yet?
            <span className="redirect" onClick={() => history.push("/signup")}>
              Sign up
            </span>
          </p>
        </div>
        <div className="right-side">
          <img src={signIn} alt="image" />
        </div>
      </div>
    </SignInSignUpPageWrapper>
  );
};

export default withRouter(SignInPage);
