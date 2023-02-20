import React from "react";
import Navigation from "../Header/Navigation";
import "./homepage.css";

function Homepage() {
  return (
    <>
      <div className="homepage__container">
        <div className="homepage-contents">
          <div className="head-card">
            <div className="head-right-card">
              <div className="round">
                <div className="round-head">
                  <h3>Our aim is to unlock our clients' financial freedom</h3>
                </div>
              </div>
              <div className="welcome-content">
                <h1>High Returns With Calculated Risk</h1>
                <p>
                  Universal Forex Investments is intended for people willing to
                  achieve wealth and financial freedom but unable to do so
                  because they're not financial experts.
                </p>

                <div className="access-btns">
                  <button className="btn">CREATE ACCOUNT</button>
                  <button className="btn-login">LOGIN</button>
                </div>
              </div>
            </div>
            <div className="head-left-card"></div>
          </div>
          <div className="header__plans-calculator">
            <div className="header-calculator">
              <div className="header-amount">
                <label htmlFor="amount">Amount</label>
                <input
                  className="header-inputs"
                  type="text"
                  name="amount"
                  placeholder="Investment amount e.g $100"
                />
              </div>
              <div className="header-plan">
                <label htmlFor="plan">Investment Plan</label>
                <select className="header-inputs" name="plan">
                  <option value selected>
                    Select Plan
                  </option>
                  <option value="1">
                    Basic Plan 1000.00% every 1 days for 1 days min:USD 200.00
                    max:USD 1,000.00
                  </option>
                  <option value="4">
                    Global Forex Investment 1000.00% every 24 hours for 24 hours
                    min:USD 200.00 max:USD 10,000.00
                  </option>
                  <option value="2">
                    Vip Plan 800.00% every 1 days for 1 days min:USD 1,000.00
                    max:USD 9,000.00
                  </option>
                  <option value="3">
                    Gold????plan 850.00% every 1 weeks for 1 weeks min:USD
                    10,000.00 max:USD 50,000.00
                  </option>
                </select>
              </div>
              <div className="plan-btn">
                <button className="btn">CALCULATE EARNINGS</button>
              </div>
            </div>
          </div>
          {/******************ABOUT US****************/}
          <div className="about">
            <div className="about-card">
              <div className="about-card-one">
                <span className="round-head">Get to Know Us</span>
                <br />
                <h4>About Us</h4>
              </div>
              <div className="about-card-2">
                <p>
                  Our mission is to act as a catalyst for universal adoption and
                  blockchain innovation. We focus only on investing in
                  cryptocurrency . Our team has experience in both traditional
                  financing and emerging mining technology. <br /> We invest,
                  among others, in cryptocurrencies such as BTC, XRP, ETC, and
                  ETH. We also give a chance to new, dynamically developing ICO
                  projects <br /> that bring huge profits in an amazingly short
                  time.
                </p>
              </div>
            </div>
          </div>
          {/*************************************************************/}

          {/*************************HOW TO INVEST**************************/}
          <div className="invest-container">
            <div className="invest-top">
              <span className="round-head">How To Invest</span>
              <h4>Investing Is As Easy As 1,2,3</h4>
            </div>
            <div className="invest-cards">
              <div className="invest-card">
                <h1>01</h1>
                <h4>Create Account</h4>
                <p>Register on Our Platform</p>
              </div>
              <div className="invest-card">
                <h1>02</h1>
                <h4>Select Investment Plan</h4>
                <p>Select your preferred investment plan.</p>
              </div>
              <div className="invest-card">
                <h1>03</h1>
                <h4>Earn</h4>
                <p>Get your returns conveniently.</p>
              </div>
            </div>
          </div>

          {/***********************************************************/}
        </div>
      </div>
    </>
  );
}

export default Homepage;
