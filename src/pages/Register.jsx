import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { toast } from "react-toastify";
import { registerUser, validateEmail } from "../services/authService";
import { useDispatch } from "react-redux";
import { SET_LOGIN, SET_NAME } from "../Redux/Features/Auth/authSlice";
import Logo from "../components/Logo";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const { name, lastName, email, password, confirmPassword } = formData;
  const [inputError, setInputError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [passLegthError, setPassLegthError] = useState(false);
  const [emailError, setEmailError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setInputError(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setInputError(false);
      }, 3500);
      return;
    }
    if (password !== confirmPassword) {
      setPassError(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setPassError(false);
      }, 3500);
      return;
    }
    if (password.length < 6) {
      setPassLegthError(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setPassLegthError(false);
      }, 3500);
      return;
    }
    if (!validateEmail(email)) {
      setEmailError(true);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setEmailError(false);
      }, 3500);
      return;
    }

    const userData = {
      name,
      lastName,
      email,
      password,
    };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
      await dispatch(SET_LOGIN(true));
      await dispatch(SET_NAME(data.user.name));
      navigate("/dashboard");
      setIsLoading(false);
      // console.log(data.user.name);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className="register-container">
      <form className="reg-form" onSubmit={register}>
        <div className="reg-left">
          <h1 className="reg-heading">Join Proinvest PLC Fund</h1>
          <h3>Sign Up And Explore Proinvest PLC Fund .</h3>
          <div className="form-logo">
            <Logo />
          </div>
        </div>
        <div className="reg-right">
          <h1>create account</h1>
          <small
            style={{ color: "red", textAlign: "center", fontSize: "14px" }}
          >
            {inputError && "All fields are Required"}
            {passError && "Passwords do not match"}
            {passLegthError && "Password must exceed 6 charecters"}
            {emailError && "Enter a valid email"}
          </small>
          <div className="form-input-flex">
            <input
              type="text"
              placeholder="First Name"
              name="name"
              value={name}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input">
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-input-flex">
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleInputChange}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleInputChange}
            />
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
            <button onClick={register}>
              {isLoading ? "PROCESSING..." : "CREATE ACCOUNT"}
            </button>
            OR
            <Link to="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
