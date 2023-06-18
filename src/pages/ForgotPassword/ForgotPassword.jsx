import React, { useState } from "react";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [inputError, setInputError] = useState(false);

  const forgotEmailHandler = (e) => {
    e.preventDefault();
    if (!email) {
      setInputError(true);
      setTimeout(() => {
        setInputError(false);
      }, 3500);
      return;
    }
    console.log(email);
  };
  return (
    <div className="login-container">
      <form className="reg-form" onSubmit={forgotEmailHandler}>
        <div className="reg-left">
          <h1 className="reg-heading">Forgot Password</h1>
          <h3>Please Enter Your Email To Reset Your Password</h3>
          <div className="form-logo">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="reg-right login-right">
          <h1 id="lr-heading">Forgot Password? Enter Your Email Below.</h1>
          <small
            style={{ color: "red", textAlign: "center", fontSize: "14px" }}
          >
            {inputError && "Enter Email to continue"}
          </small>
          <div className="form-input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-btns">
            <button>{"Continue"}</button>
            OR
            <Link to="/register">Create account</Link>
          </div>
          <div className="forgot-password">
            <Link to="/login">
              <h4>I've remembered my password</h4>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
