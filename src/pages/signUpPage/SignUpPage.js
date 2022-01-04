import React, { Component } from "react";
import SignInSignUpPageWrapper from "../signInPage/SignInSignUpPageWrapper";
import InputForm from "../../common/components/formInput/FormInput";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import GoogleButton from "../../common/components/buttons/googleButton/GoogleButton";
import FacebookButton from "../../common/components/buttons/facebookButton/FacebookButton";
import signUp from "../../assets/img/signup.png";
import { withRouter } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

const DEFAULT_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  isRead: false,
};

class SignUpPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...DEFAULT_STATE,
    };
  }

  handleSubmit = (e) => {
    const { history } = this.props;
    const { email, password, confirmPassword, isRead } = this.state;
    e.preventDefault();
    if (password === confirmPassword) {
      if (isRead) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log("user: ", user);
            createUserProfileDocument(user);

            this.setState({
              ...DEFAULT_STATE,
            });
            history.push("/signup/additionalInformation");
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("error code: " + errorCode + " message: " + errorMessage);
          });
      } else {
        alert("Please confirm term and conditions");
      }
    } else {
      alert("wrong password");
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    this.setState({ [name]: checked });
  };

  render() {
    const { history } = this.props;
    return (
      <SignInSignUpPageWrapper>
        <div className="container">
          <div className="left-side">
            <h2>Sign up</h2>
            <form onSubmit={this.handleSubmit}>
              <InputForm
                type="email"
                label="Email*"
                name="email"
                placeholder="Type your email address"
                required
                handleChange={this.handleChange}
              />
              <InputForm
                type="password"
                label="Password*"
                name="password"
                placeholder="Type your password"
                required
                handleChange={this.handleChange}
              />
              <InputForm
                type="password"
                label="Confirm password*"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                handleChange={this.handleChange}
              />
              <div className="term-container">
                <label className="checkbox-container">
                  <input
                    type="checkbox"
                    onChange={this.handleCheckboxChange}
                    name="isRead"
                  />
                  <span className="checkmark" />
                  I’ve read and agree with Term of Services and our Privacy
                  Policy
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
              <span
                className="redirect"
                onClick={() => history.push("/signin")}
              >
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
  }
}

export default withRouter(SignUpPage);
