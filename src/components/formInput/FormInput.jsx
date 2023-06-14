import React from "react";
import "./forminput.css";
const FormInput = ({ label, placeholder, name, value, type, className }) => {
  return (
    <div className={`forminput-container ${className}`}>
      <label>{label}</label>
      <input type={type} placeholder={placeholder} name={name} value={value} />
    </div>
  );
};

export default FormInput;
