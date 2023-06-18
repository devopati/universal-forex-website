import React, { useEffect, useState } from "react";
import Navigation from "../Header/Navigation";
import "./homepage.css";
import "animate.css";
import bgIMG1 from "../../assets/bg1.png";
import bgIMG2 from "../../assets/bg2.png";
import EarningCalculator from "../EarningCalculator/EarningCalculator";
import img3 from "../../assets/about-agency.jpeg";
import { Link } from "react-router-dom";

function Homepage() {
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const [plan, setPlan] = useState("");
  const [fieldError, setFieldError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  // console.log(amount);
  // console.log(plan);
  const popUpHandler = () => {
    if (!amount || !plan) {
      setFieldError(true);
      return;
      // } else if (plan == "1") {
      //   if (amount < 200) {
      //     setFieldError(true);
      //     setErrorMsg("Amount must be 200$ or more for this plan");
      //     return;
      //   } else if (amount > 1000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount exceeds this plan choose another plan");
      //     return;
      //   }
      // } else if (plan == "2") {
      //   if (amount < 200) {
      //     setFieldError(true);
      //     setErrorMsg("Amount must be 200$ or more for this plan");
      //     return;
      //   } else if (amount > 10000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount exceeds this plan choose another plan");
      //     return;
      //   }
      // } else if (plan == "3") {
      //   if (amount < 1000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount must be 1000$ or more for this plan");
      //     return;
      //   } else if (amount > 9000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount exceeds this plan choose another plan");
      //     return;
      //   }
      // } else if (plan == "4") {
      //   if (amount < 10000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount must be 10000$ or more for this plan");
      //     return;
      //   } else if (amount > 50000) {
      //     setFieldError(true);
      //     setErrorMsg("Amount exceeds this plan choose another plan");
      //     return;
      //   }
    } else {
      setPopUpOpen(true);
    }
  };

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
                  <Link to="/register">
                    <button className="btn">CREATE ACCOUNT</button>
                  </Link>
                  <Link to="login">
                    <button className="btn-login">LOGIN</button>
                  </Link>
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
                {!amount && fieldError && (
                  <div className="error-field">
                    {errorMsg
                      ? errorMsg
                      : "Fill this field to calculate earnings"}
                  </div>
                )}
              </div>
              <div className="header-plan">
                <div className="headertop-bg">
                  <img src={bgIMG2} />
                </div>
                <div className="earn-plans">
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
                    <option value="2">
                      Global Forex Investment 1000.00% every 24 hours for 24
                      hours min:USD 200.00 max:USD 10,000.00
                    </option>
                    <option value="3">
                      Vip Plan 800.00% every 1 days for 1 days min:USD 1,000.00
                      max:USD 9,000.00
                    </option>
                    <option value="4">
                      Gold????plan 850.00% every 1 weeks for 1 weeks min:USD
                      10,000.00 max:USD 50,000.00
                    </option>
                  </select>
                  {!plan && fieldError && (
                    <div className="error-field">Select an investment plan</div>
                  )}
                </div>
              </div>
              <div className="plan-btn">
                <button className="btn" onClick={popUpHandler}>
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
                plan={plan}
                amount={amount}
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
          <div className="gettoknowus-container homeabout-cards">
            <div className="gettoknow-left">
              <span className="round-head">Why Work With Us?</span>
              <div>
                <p>
                  Access to markets: Trading companies have access to various
                  markets and can help traders to diversify their portfolio.
                  Trading tools: Trading companies often provide their clients
                  with advanced trading tools and technology to help them make
                  better trades.
                </p>
              </div>
            </div>
            <div className="gettoknow-right home-about-left">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="investments-plans-container">
            <div className="investments-header">
              <span className="round-head">Investment Plans</span>
              <h1>Our Investment Plans</h1>
            </div>
            <div className="invest-cards">
              <div className="invest-card investmentplans-card">
                <h3>BASIC PLAN</h3>
                <h1>1000.00%</h1>
                <div>
                  <small>Profit every</small>
                  <small id="small-invest">1 Days</small>
                </div>
                <br />
                <div>
                  <h5>For 1 days</h5>
                  <small>Invest</small>
                </div>
                <h3>USD 100.00 - USD 1,000.00</h3>
              </div>
              {/* ----------------------------------------------------- */}
              <div className="invest-card investmentplans-card">
                <h3>UNIVERSAL INVESTMENT</h3>
                <h1>1000.00%</h1>
                <div>
                  <small>Profit every</small>
                  <small id="small-invest">1 Days</small>
                </div>
                <br />
                <div>
                  <h5>For 1 days</h5>
                  <small>Invest</small>
                </div>
                <h3>USD 100.00 - USD 1,0000.00</h3>
              </div>
              {/* ----------------------------------------------------- */}
              <div className="invest-card investmentplans-card">
                <h3>VIP PLAN</h3>
                <h1>800.00%</h1>
                <div>
                  <small>Profit every</small>
                  <small id="small-invest">1 Days</small>
                </div>
                <br />
                <div>
                  <h5>For 1 days</h5>
                  <small>Invest</small>
                </div>
                <h3>USD 1000 - USD 9,000.00</h3>
              </div>
              {/* ----------------------------------------------------- */}
              <div className="invest-card investmentplans-card">
                <h3>GOLD PLAN</h3>
                <h1>850.00%</h1>
                <div>
                  <small>Profit every</small>
                  <small id="small-invest">1 weeks</small>
                </div>
                <br />
                <div>
                  <h5>For 1 week</h5>
                  <small>Invest</small>
                </div>
                <h3>USD 10000.00 - USD 50,000.00</h3>
              </div>
            </div>
          </div>
          <div className="joinus-container">
            <div className="joinus-header">
              <span className="round-head">Lets Work Together</span>
              <h1>JOIN US TODAY</h1>
            </div>
            <div>
              <button className="btn">CREATE ACCOUNT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
