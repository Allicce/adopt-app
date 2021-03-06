import React from "react";
import { HeaderWrapper } from "./HeaderWrapper";
import { Navbar } from "../../common/components/navbar/Navbar";
import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";
import { RED_COLOR_DARK } from "../../styles/abstracts/colourVariables";
import { withRouter } from "react-router";
import avatar from "../../assets/img/avatars/6.png";
import UserAccount from "../../common/components/userAccount/UserAccount";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";

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
            <UserAccount />
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
            </RectangleButton>
          </div>
        )}
      </div>
    </HeaderWrapper>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default withRouter(connect(mapStateToProps)(Header));
