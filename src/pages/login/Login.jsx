import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-container">
      <form className="reg-form">
        <div className="reg-left">
          <h1 className="reg-heading">Login</h1>
          <h3>Sign In And Explore Proinvest PLC Fund .</h3>
          <div className="form-logo">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="reg-right login-right">
          <h1 id="lr-heading">Enter your email and password below</h1>
          <div className="form-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-input">
            <input type="password" placeholder="Password" />
          </div>
          <div className="form-checkbox form-btns">
            <input id="checkbox" type="checkbox" />
            <label> Keep me logged in on this device</label>
          </div>
          <div className="form-btns">
            <button>Login</button>
            OR
            <Link to="/register">Create account</Link>
          </div>
          <div className="forgot-password">
            <Link to="">
              <h4>can't access your account?</h4>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
