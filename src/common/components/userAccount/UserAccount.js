import React, { useState } from "react";
import avatar from "../../../assets/img/avatars/6.png";
import UserAccountWrapper from "./UserAccountWrapper";
import { auth } from "../../../firebase/firebase.utils";

const UserAccount = () => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <UserAccountWrapper>
      <div className="avatar-container" onClick={handleDropdown}>
        <img src={avatar} />
      </div>
      <div className={`user-dropdown ${isOpenDropdown && "open"}`}>
        <ul>
          <li onClick={() => auth.signOut()}>Sign out</li>
        </ul>
      </div>
    </UserAccountWrapper>
  );
};

export default UserAccount;
