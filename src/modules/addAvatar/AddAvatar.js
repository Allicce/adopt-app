import React, { useState } from "react";
import AddAvatarWrapper from "./AddAvatarWrapper";
import avatar0 from "../../assets/img/avatars/1.png";
import avatar1 from "../../assets/img/avatars/2.png";
import avatar2 from "../../assets/img/avatars/3.png";
import avatar3 from "../../assets/img/avatars/4.png";
import avatar4 from "../../assets/img/avatars/5.png";
import avatar5 from "../../assets/img/avatars/6.png";
import avatar6 from "../../assets/img/avatars/7.png";
import avatar7 from "../../assets/img/avatars/8.png";
import avatar8 from "../../assets/img/avatars/9.png";
import avatar9 from "../../assets/img/avatars/10.png";
import avatar10 from "../../assets/img/avatars/11.png";
import avatar11 from "../../assets/img/avatars/12.png";
import avatar12 from "../../assets/img/avatars/13.png";
import avatar13 from "../../assets/img/avatars/14.png";
import avatar14 from "../../assets/img/avatars/15.png";
import avatar15 from "../../assets/img/avatars/16.png";
import avatar16 from "../../assets/img/avatars/17.png";
import avatar17 from "../../assets/img/avatars/18.png";
import avatar18 from "../../assets/img/avatars/19.png";
import avatar19 from "../../assets/img/avatars/20.png";
import avatar20 from "../../assets/img/avatars/21.png";

const AVATARS = [
  avatar0,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  avatar9,
  avatar10,
  avatar11,
  avatar12,
  avatar13,
  avatar14,
  avatar15,
  avatar16,
  avatar17,
  avatar18,
  avatar19,
  avatar20,
];

const AddAvatar = ({ isOpen, closeAvatarPage }) => {
  return (
    <AddAvatarWrapper isOpen={isOpen}>
      <div className="close-button" onClick={closeAvatarPage}>
        &#10005;
      </div>
      <div className="content-container">
        <h3>Choose your avatar</h3>
        <div className="avatars-container">
          {AVATARS.map((avatar, index) => (
            <div className={`avatar ${index === 5 && "current-avatar"}`}>
              <img src={avatar} />
              <span className={`avatar-text`}>Choose your avatar</span>
              <div className="avatar-background" />
            </div>
          ))}
        </div>
      </div>
    </AddAvatarWrapper>
  );
};

export default AddAvatar;
