import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../services/authService";
import { SET_LOGIN, SET_NAME } from "../../Redux/Features/Auth/authSlice";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [inputError, setInputError] = useState(false);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setInputError(true);
      // window.scrollTo(0, 0);
      setTimeout(() => {
        setInputError(false);
      }, 3500);
      return;
    }
    const userData = {
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.user.name));
      navigate("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="reg-form" onSubmit={login}>
        <div className="reg-left">
          <h1 className="reg-heading">Login</h1>
          <h3>Sign In And Explore Proinvest PLC Fund .</h3>
          <div className="form-logo">
            <h1>Logo</h1>
          </div>
        </div>
        <div className="reg-right login-right">
          <h1 id="lr-heading">Enter your email and password below</h1>
          <small
            style={{ color: "red", textAlign: "center", fontSize: "14px" }}
          >
            {inputError && "Fill all fields to continue"}
          </small>
          <div className="form-input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-checkbox form-btns">
            <input id="checkbox" type="checkbox" />
            <label> Keep me logged in on this device</label>
          </div>
          <div className="form-btns">
            <button>{isLoading ? "Processing..." : "Login"}</button>
            OR
            <Link to="/register">Create account</Link>
          </div>
          <div className="forgot-password">
            <Link to="/forgotpassword">
              <h4>can't access your account?</h4>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
