import React from "react";
import style from "../Style/ResetPassword.module.css";
import key from "../assets/key.svg";
import unhideEye from "../assets/unhide-eye.svg";
const ResetPassword = () => {
  return (
    <div className={style["main-container"]}>
      <div className={style["container"]}>
        <p className={style["Title"]}>Reset Password</p>
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
          <div className={style["inputFieldContainer"]}>
            <img src={key} className={style["inputIcon"]} alt="" />
            <input
              placeholder="Confirm password"
              className={style["inputField"]}
              type="password"
              maxLength={60}
            />
            <img src={unhideEye} className={style["inputIcon"]} alt="" />
          </div>
          <button className={style["sign-up-btn"]}>Update password</button>
        </form>
      </div>
    </div>
  );
};
export default ResetPassword;
