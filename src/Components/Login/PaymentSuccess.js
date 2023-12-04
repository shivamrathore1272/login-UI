import React from "react";
import style from "../Style/PaymentSuccess.module.css";
import GIF from '../assets/GIF.gif'
const PaymentSuccess = () => {
  return (
    <div className={style["main-container"]}>
    <div className={style["container"]}>
      <img className={style['complete-payment']} src={GIF} alt="GIF"/>
      <p className={style['Title']}>
        Account created!
      </p>
      <p className={style['message']}>
        Your account has been created successfully done
      </p> 
      <button className={style["sign-up-btn"]}>Go back home</button>
    </div>
  </div>
  );
};

export default PaymentSuccess;
  
 