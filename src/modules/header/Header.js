import React from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Navbar } from "../../common/components/navbar/Navbar";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import { RED_COLOR_DARK } from "../../styles/abstracts/colourVariables";
import { withRouter } from "react-router";
import avatar from "../../assets/img/avatars/6.png";

const Header = ({ history, currentUser }) => {
  console.log("currentUser: ", currentUser);
  return (
    <HeaderWrapper>
      <div className="left-side">
        <Navbar />
      </div>
      <div className="right-side">
        {currentUser ? (
          <div className="user-interaction-container">
            <div className="avatar-container">
              <img src={avatar} />
            </div>
          </div>
        ) : (
          <div>
            <RectangleButton
              type="red"
              handleClick={() => history.push("/signup")}
            >
              Sign up
            </RectangleButton>
            <RectangleButton handleClick={() => history.push("/signin")}>
              Sign in
            </RectangleButton>{" "}
          </div>
        )}
      </div>
    </HeaderWrapper>
  );
};
export default withRouter(Header);
