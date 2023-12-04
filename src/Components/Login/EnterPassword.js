import React from "react";
import style from "../Style/EnterPassword.module.css";
import key from "../assets/key.svg";
import unhideEye from "../assets/unhide-eye.svg";
const EnterPassword = () => {
  return (
    <div className={style["main-container"]}>
      <div className={style["container"]}>
        <p className={style["Title"]}>Enter Password</p>
        <form className={style["login-form"]} method="post">
          <div className={style["inputFieldContainer"]}>
            <img src={key} className={style["inputIcon"]} alt="" />
            <input
              placeholder="Enter new password"
              className={style["inputField"]}
              type="password"
              maxLength={60}
            />
            <img src={unhideEye} className={style["inputIcon"]} alt="" />
          </div>
          <p className={style["forgot-password"]}>Forgot Password ?</p>
          <button className={style["sign-up-btn"]}>Submit</button>
          <p className={style["incorrect-password"]}>Incorrect Password. 3 attempts left</p>
        </form>
      </div>
    </div>
  );
};
export default EnterPassword;
