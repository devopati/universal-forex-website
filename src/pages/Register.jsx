import React from "react";
import { Link } from "react-router-dom";
import "./register.css";

const Register = () => {
  return (
    <div className="register-container">
      <form className="reg-form">
        <div className="reg-left">
          <h1 className="reg-heading">Join Proinvest PLC Fund</h1>
          <h3>Sign Up And Explore Proinvest PLC Fund .</h3>
          <div className="form-logo">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="reg-right">
          <h1>create account</h1>
          <div className="form-input-flex">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="form-input">
            <input type="email" placeholder="Email" />
          </div>
          <div className="form-input-flex">
            <input type="password" placeholder="Password" />
            <input type="password" placeholder="Confirm Password" />
          </div>
          <div className="form-input">
            <input type="text" placeholder="Refferal Code" />
          </div>
          <div className="form-checkbox form-btns">
            <input id="checkbox" type="checkbox" />
            <label>
              {" "}
              I agree to Global Capital Investment's{" "}
              <Link to="">Privacy Policy & Terms Of Service</Link>
            </label>
          </div>
          <div className="form-btns">
            <button>CREATE ACCOUNT</button>
            OR
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
