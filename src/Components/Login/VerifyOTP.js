import React, { useState } from "react";
import style from "../Style/VerifyOTP.module.css";

const VerifyOTP = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const handleChange = (index, value) => { 
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp); 
    if (index < otp.length - 1 && value !== '') {
      document.getElementById(`digit${index + 2}`).focus();
    }
  };

  const handleBackspace = (index, event) => { 
    if (event.key === 'Backspace' && index > 0) {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      document.getElementById(`digit${index}`).focus();
    }
  };

  return (
    <div className={style["main-container"]}>
      <div className={style["container"]}>
        <p className={style["Title"]}>Verify OTP</p>
        <p className={style["message"]}>
          A code has been sent to +91-98******93
        </p>
        <form>
          <div className={style["otpForm"]}>
            {otp.map((digit, index) => (
              <input
              key={index}
              type="text"
              id={`digit${index + 1}`}
              value={digit}
              maxLength="1"
              className={style["inputField"]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
            ))}
          </div>
          <div className={style["resend-otp-container"]}>
            <span className={style["resend-otp"]}>Resend OTP</span>
            <span className={style["resend-otp-time"]}> 00 : 55 sec</span>
          </div>
          <button
            type="button"
            id="submitBtn"
            onclick="verifyOTP()"
            className={style["sign-up-btn"]}
          >
            Go back home
          </button>
          <p className={style["incorrect-password"]}>
            Incorrect OTP. 3 attempts left
          </p>
        </form>
      </div>
    </div>
  );
};
export default VerifyOTP;
