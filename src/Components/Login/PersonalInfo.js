import React from "react";
import user from "../assets/user.svg";
import gmail from "../assets/gmail.svg";
import style from "../Style/PersonalInfo.module.css";
const PersonalInfo = () => {
  return (
    <div className={style["main-container"]}>
      <div className={style["container"]}>
        <div>
          {/* <!-- <img className={style["cross" src="../assets/cross.svg" alt="cross.svg"> --> */}
          <div className={style["brand"]}>
            <img
              className={style["logo"]}
              src="https://bkt-conscent-public-stage.storage.googleapis.com/Demo%20Client/login-brandlogo/5f92a62013332e0f667794dc-bf31a1"
              alt="Logo"
            />
            <p className={style["logMessage"]}>Personal information</p>
          </div>
        </div>
        <form className={style["login-form"]} method="post">
          <div className={style["inputFieldContainer"]}>
            <img src={user} className={style["inputIcon"]} alt="" />
            <input
              placeholder="Full Name"
              className={style["inputField"]}
              type="text"
              maxLength={60}
            />
          </div>
          <div className={style["inputFieldContainer"]}>
            <img src={gmail} className={style["inputIcon"]} alt="" />
            <input
              placeholder="Email (Optinal)"
              className={style["inputField"]}
              type="text"
              maxLength={60}
            />
          </div>
          <button className={style["sign-up-btn"]}>Submit</button>
          <p className={style["already-account"]}>
            Go Back to <span className={style["redirect-sign"]}>Sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
