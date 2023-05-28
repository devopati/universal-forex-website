import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./earncalc.css";
const EarningCalculator = ({ plan, amount, setPopUpOpen, popUpOpen }) => {
  return (
    <div className="earningscalcalc-container">
      <div className="earncalc-header">
        <h3>What you stand to earn</h3>
        <AiOutlineClose onClick={() => popUpOpen && setPopUpOpen(false)} />
      </div>
      <div className="earncalc-body">
        <div>
          <small>Plan</small>
          <small>5</small>
        </div>
        <div>
          <small>Amount</small>
          <small>USD 10</small>
        </div>
        <div>
          <small>Payout Period</small>
          <small>45</small>
        </div>
        <div>
          <small>Maturity</small>
          <small>12</small>
        </div>
        <div>
          <small>Return</small>
          <small>USD 45</small>
        </div>
      </div>
      <div className="earncalc-btns">
        <button className="btn">LOGIN</button>
        <button className="btn">SIGNUP</button>
      </div>
    </div>
  );
};

export default EarningCalculator;
