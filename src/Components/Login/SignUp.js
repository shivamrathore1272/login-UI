import React from "react";
import style from "../Style/Login.module.css";
import user from "../assets/user.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import facebook from "../assets/facebook.svg";
const SignUp = () => {
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
            <p className={style["logMessage"]}>Hi, let’s create your account</p>
            <p className={`${style["margin-subheading"]} ${style["message"]}`}>
              Please enter your details below
            </p>
          </div>
        </div>
        <form className={style["login-form"]} method="post">
          <div className={style["inputFieldContainer"]}>
            <img
              src={user}
              className={style["inputIcon"]}
              alt=""
            />
            <input
              placeholder="Mobile / Email"
              className={style["inputField"]}
              type="text"
              maxLength={60}
            />
          </div>
          <button className={style["sign-up-btn"]}>Sign up</button>
          <p className={style["already-account"]}>
            Already have an account?{" "}
            <span className={style["redirect-sign"]}>Sign in</span>
          </p>
        </form>
        <div>
          <div className={`${style["continueWithContainer"]} ${style["sso-login-divider"]}`}>
            <hr className={style["horizontalLine"]} />
            <div className={style["continueWith"]}>Or</div>
            <hr className={style["horizontalLine"]} />
          </div>
          <div className={style["sso-login"]}>
            <div className={style["google-login"]}>
              <img src={google} alt="" />
              Google
            </div>
            <div className={style["facebook-login"]}>
              <img src={facebook} alt="" />
              Facebook
            </div>
          </div>
          <div className={style["apple-login"]}>
            <img src={apple} alt="" />
            Apple
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
