import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./Components/Login/CreateAccount";
import EnterPassword from "./Components/Login/EnterPassword";
import PaymentSuccess from "./Components/Login/PaymentSuccess";
import PersonalInfo from "./Components/Login/PersonalInfo";
import ResetPassword from "./Components/Login/ResetPassword";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import VerifyOTP from "./Components/Login/VerifyOTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/EnterPassword" element={<EnterPassword />} />
        <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
        <Route path="/PersonalInfo" element={<PersonalInfo />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/VerifyOTP" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
