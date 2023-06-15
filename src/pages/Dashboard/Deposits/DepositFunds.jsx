import React from "react";
import "./deposits.css";
import revicon from "../../../assets/revicon.png";

const DepositFunds = () => {
  return (
    <div className="depositfunds-container">
      <div className="depositfunds-header">
        <h2>
          <span>Depo</span>sits/New deposit
        </h2>
        <div>
          <button>My Deposits</button>
        </div>
      </div>
      <div className="depositfunds-body">
        <div className="depositfunds-cards">
          <div className="depositfunds-card dep-lower-card dep-small">
            <div>
              <img src={revicon} alt="" />
            </div>
            <div className="dep-funds-amount">
              <span>USD 0.00</span>
              <small>Total deposits</small>
            </div>
            <div className="top-hanger">
              <small>All deposits</small>
            </div>
          </div>
          <div className="depositfunds-card ">
            <span>Select your preferred investment plan</span>
            <div className="smalldep-cards">
              <div>
                <div className="smalldep-card">
                  1000.00% 1 days every 1 days USD 200.00 - USD 1,000.00
                </div>
                <div className="smalldep-card">
                  1000.00% 24 hours every 24 hours USD 200.00 - USD 10,000.00
                </div>
              </div>
              <div>
                <div className="smalldep-card">
                  800.00% 1 days every 1 days USD 1,000.00 - USD 9,000.00
                </div>
                <div className="smalldep-card">
                  850.00% 1 weeks every 1 weeks USD 10,000.00 - USD 50,000.00
                </div>
              </div>
            </div>
            <div
              style={{ color: "red", paddingTop: ".5rem", textAlign: "center" }}
            >
              Please Select a Plan
            </div>
            <button>Proceed to amount</button>
          </div>
          <div className="depositfunds-card dep-lower-card dep-big">
            <div>
              <img src={revicon} alt="" />
            </div>
            <div className="dep-funds-amount">
              <span>USD 0.00</span>
              <small>Total deposits</small>
            </div>
            <div className="top-hanger">
              <small>All deposits</small>
            </div>
          </div>
        </div>
      </div>

      {/* j------------------------------ */}
      <div className="depositfunds-body non-viscible-div">
        <div className="depositfunds-cards">
          <div className="depositfunds-card ">
            <span>Select your preferred investment plan</span>
            <div className="smalldep-cards">
              <div>
                <div className="smalldep-card">
                  1000.00% 1 days every 1 days USD 200.00 - USD 1,000.00
                </div>
                <div className="smalldep-card">
                  1000.00% 24 hours every 24 hours USD 200.00 - USD 10,000.00
                </div>
              </div>
              <div>
                <div className="smalldep-card">
                  800.00% 1 days every 1 days USD 1,000.00 - USD 9,000.00
                </div>
                <div className="smalldep-card">
                  850.00% 1 weeks every 1 weeks USD 10,000.00 - USD 50,000.00
                </div>
              </div>
            </div>
            <button>Proceed to amount</button>
          </div>
          <div className="depositfunds-card dep-lower-card dep-big">
            <div>
              <img src={revicon} alt="" />
            </div>
            <div>
              <h1>USD 0.00</h1>
              <span>Total deposits</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositFunds;
