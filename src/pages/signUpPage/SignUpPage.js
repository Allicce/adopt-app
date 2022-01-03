import React from "react";
import SignInSignUpPageWrapper from "../signInPage/SignInSignUpPageWrapper";
import InputForm from "../../common/components/formInput/FormInput";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import GoogleButton from "../../common/components/buttons/googleButton/GoogleButton";
import FacebookButton from "../../common/components/buttons/facebookButton/FacebookButton";
import signUp from "../../assets/img/signup.png";
import { withRouter } from "react-router";

const SignUpPage = ({ history }) => {
  return (
    <SignInSignUpPageWrapper>
      <div className="container">
        <div className="left-side">
          <h2>Sign up</h2>
          <form>
            <div className="form-row">
              <InputForm type="text" label="Name" />
              <InputForm type="text" label="Surname" />
            </div>
            <InputForm type="email" label="Email" />
            <InputForm type="password" label="Password" />
            <InputForm type="password" label="Password again" />
            <div className="term-container">
              <label className="checkbox-container">
                <input type="checkbox" />
                <span className="checkmark" />
                I’ve read and agree with Term of Services and our Privacy Policy
              </label>
            </div>

            <div className="button-container">
              <RectangleButton>Sign up</RectangleButton>
              <GoogleButton>Sign up with Google</GoogleButton>
              <FacebookButton>Continue with Facebook</FacebookButton>
            </div>
          </form>
          <p>
            Already have an account?
            <span className="redirect" onClick={() => history.push("/signin")}>
              Sign in
            </span>
          </p>
        </div>
        <div className="right-side">
          <img src={signUp} alt="image" />
        </div>
      </div>
    </SignInSignUpPageWrapper>
  );
};

export default withRouter(SignUpPage);
