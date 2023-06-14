import React from "react";
import "./home.css";
import revicon from "../../../assets/revicon.png";
const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <span>
          <span>dash</span>board
        </span>
      </div>
      <div className="home-trading-view">currencies</div>
      <div className="home-body">
        <div className="home-body-cards">
          <div className="home-body-card">
            <img src={revicon} alt="" />
            <span>
              <span>USD</span>
              <span>0.00</span>
              <span>Withdrawable</span>
            </span>
          </div>
          <div className="home-body-card">
            <img src={revicon} alt="" />
            <span>
              <span>USD</span>
              <span>0.00</span>
              <span>Locked</span>
            </span>
          </div>
        </div>
        <div className="user-portfolio">
          <span>overall portfolio</span>
          <button></button>
          <span>Active</span>
          <button></button>
          <span>Inactive</span>
          <button></button>
          <span>Earnings</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
