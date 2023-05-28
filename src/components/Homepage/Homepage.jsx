import React, { useEffect, useState } from "react";
import Navigation from "../Header/Navigation";
import "./homepage.css";
import "animate.css";
import bgIMG1 from "../../assets/bg1.png";
import bgIMG2 from "../../assets/bg2.png";
import EarningCalculator from "../EarningCalculator/EarningCalculator";

function Homepage() {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [plan, setPlan] = useState("");
  // console.log(amount);
  // console.log(plan);

  return (
    <>
      <Navigation />
      <div
        className="homepage__container"
        style={{ marginTop: "6rem" }}
        // onClick={() => popUpOpen && setPopUpOpen(false)}
      >
        <div className="homepage-contents">
          <div className="top-bg">
            <img src={bgIMG1} />
          </div>
          <div className="head-card">
            <div className="head-right-card">
              <div className="round">
                <div>
                  <h3 className="round-head">
                    Our aim is to unlock our clients' financial freedom
                  </h3>
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
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div className="header-plan">
                <div className="headertop-bg">
                  <img src={bgIMG2} />
                </div>
                <label htmlFor="plan">Investment Plan</label>
                <select
                  className="header-inputs"
                  name="plan"
                  onChange={(e) => setPlan(e.target.value)}
                >
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
                <button className="btn" onClick={() => setPopUpOpen(true)}>
                  CALCULATE EARNINGS
                </button>
              </div>
            </div>
            <div
              className={`earningscalc-popup ${!popUpOpen && "popup-close"}`}
            >
              <EarningCalculator
                popUpOpen={popUpOpen}
                setPopUpOpen={setPopUpOpen}
              />
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

          <div className="home-aboutus">
            <div className="homeabout-cards">
              <div className="home-about-left">
                <img
                  id="about-img"
                  src="https://globalcapital-investment.com/assets/dist/img/team-group.png"
                />
              </div>
              <div className="home-about-right">
                <span className="round-head">About Us</span>
                <h4>Get To Know Us</h4>
                <p>
                  Our team consists only of qualified people connected with the
                  financial industry for years, who are also passionate about
                  the fledgling but very strong cryptocurrency market and mining
                  technology. They constantly monitor the market to provide you
                  - our investors with even greater profits. Having strong
                  relationships with the most promising entrepreneurs and other
                  leading investors in the industry, ForextradingWorldwide
                  implements an investment strategy, building a diversified
                  portfolio and adjusting the added value to its portfolio
                  companies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
