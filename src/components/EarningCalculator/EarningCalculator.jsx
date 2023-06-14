import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./earncalc.css";
import { Link } from "react-router-dom";

const EarningCalculator = ({ plan, amount, setPopUpOpen, popUpOpen }) => {
  let period = "";
  let returnAmount = 0;
  const planIdentifier = () => {
    let planName = "";
    if (plan == "1") {
      planName = "Basic Plan";
      period = "1 Days";
      returnAmount = (amount * 1000) / 100;
    } else if (plan == "2") {
      planName = "Universal Forex";
      period = "24 hours";
      returnAmount = (amount * 1000) / 100;
    } else if (plan == "3") {
      planName = "Vip Plan";
      period = "1 Days";
      returnAmount = (amount * 800) / 100;
    } else if (plan == "4") {
      planName = "Gold Plan";
      period = "1 Week";
      returnAmount = (amount * 850) / 100;
    } else {
      console.log("Error Identifying plan");
    }
    return planName;
  };
  return (
    <div className="earningscalcalc-container">
      <div className="earncalc-header">
        <h3>What you stand to earn</h3>
        <AiOutlineClose
          onClick={() => popUpOpen && setPopUpOpen(false)}
          id="close-btn"
        />
      </div>
      <div className="earncalc-body">
        <div>
          <small>Plan</small>
          <small>{planIdentifier()}</small>
        </div>
        <div>
          <small>Amount</small>
          <small>USD {amount}.00</small>
        </div>
        <div>
          <small>Payout Period</small>
          <small>{period}</small>
        </div>
        <div>
          <small>Maturity</small>
          <small>{period}</small>
        </div>
        <div>
          <small>Return</small>
          <small>USD {returnAmount}.00</small>
        </div>
      </div>
      <div className="earncalc-btns">
        <Link to="login">
          <button className="btn">LOGIN</button>
        </Link>
        <Link to="register">
          <button className="btn">SIGNUP</button>
        </Link>
      </div>
    </div>
  );
};

export default EarningCalculator;
