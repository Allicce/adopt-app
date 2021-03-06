import React, { useState } from "react";
import SignInSignUpPageWrapper from "../signInPage/SignInSignUpPageWrapper";
import InputForm from "../../common/components/formInput/FormInput";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import signUp2 from "../../assets/img/signup2.png";
import avatar from "../../assets/img/avatars/6.png";
import edit from "../../assets/img/edit_black_24dp.svg";
import AddAvatar from "../../modules/addAvatar/AddAvatar";

const SignUpAdditionalInformationPage = (props) => {
  const [isOpenAvatarPage, setOpenAvatarPage] = useState(false);
  console.log("page 2: ", props);

  const openAvatarPage = () => {
    setOpenAvatarPage(true);
  };

  const closeAvatarPage = () => {
    setOpenAvatarPage(false);
  };

  return (
    <SignInSignUpPageWrapper>
      <div className="container">
        <div className="left-side">
          <h2>Sign up</h2>
          <form>
            <div className="form-row">
              <div className="avatar" onClick={openAvatarPage}>
                <img src={avatar} />
                <span className="edit-avatar">
                  <img src={edit} />
                  Edit
                </span>
              </div>
              <div className="row-right-side">
                {/*change to select box*/}
                <InputForm type="text" label="Title" />
                <InputForm type="text" label="Name" />
                <InputForm type="text" label="Surname" />
                <InputForm type="phone" label="Phone" />
              </div>
            </div>
            <div className="form-row">
              <InputForm type="text" label="Street" />
              <InputForm type="text" label="Number" />
            </div>
            <div className="form-row">
              <InputForm type="text" label="City" />
              <InputForm type="text" label="Post code" />
            </div>

            <div className="button-container">
              <RectangleButton>Skip</RectangleButton>
              <RectangleButton>Done</RectangleButton>
            </div>
          </form>
        </div>
        <div className="right-side">
          <img src={signUp2} alt="image" />
        </div>
      </div>
      <AddAvatar isOpen={isOpenAvatarPage} closeAvatarPage={closeAvatarPage} />
    </SignInSignUpPageWrapper>
  );
};

export default SignUpAdditionalInformationPage;
