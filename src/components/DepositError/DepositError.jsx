import React from "react";
import "./depositerror.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
const DepositError = ({ setDepositPopUpError }) => {
  return (
    <div className="deposit-error-container">
      <div>
        <AiOutlineCloseCircle id="dep-error-icon" />
      </div>
      <div>
        <span>Error!</span>
      </div>
      <div>
        <p>
          There is an issue in updating your account. Please refresh the page.
        </p>
      </div>
      <div>
        <button>OK</button>
      </div>
    </div>
  );
};

export default DepositError;
