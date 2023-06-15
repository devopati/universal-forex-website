import React, { useState } from "react";
import "./deposits.css";
import revicon from "../../../assets/revicon.png";
import pay1 from "../../../assets/pay1.png";
import pay2 from "../../../assets/pay2.png";
import pay3 from "../../../assets/pay3.png";
import pay4 from "../../../assets/pay4.png";

const DepositFunds = () => {
  const [depositActive, setDepositActive] = useState(false);
  const [planValue, setPlanValue] = useState(0);
  const [planError, setPlanError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [payMethod, setPayMethod] = useState(0);

  const depositHAndler = () => {
    if (depositAmount < 100) {
      setAmountError(true);
      setTimeout(() => {
        setAmountError(false);
      }, 3000);
      return;
    } else if (payMethod < 1) {
      setPlanError(true);
      setTimeout(() => {
        setPlanError(false);
      }, 3000);
    } else {
      alert("done");
    }
  };

  const planHandler = () => {
    if (planValue < 1) {
      setPlanError(true);
      setTimeout(() => {
        setPlanError(false);
      }, 3000);
      return;
    } else {
      setTimeout(() => {
        setDepositActive(true);
      }, 100);
    }
  };

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
          <div
            className={`depositfunds-card ${depositActive && "paybig-card"}`}
          >
            <div
              className={`deposit-confirmation ${
                !depositActive && "payment-method-not-active"
              }`}
            >
              <small
                style={{ color: "red", padding: ".5rem", textAlign: "center" }}
              >
                {planError && "Please choose a payment option"}
              </small>
              <label>Enter amount</label>
              <input
                type="number"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
              />
              <small style={{ color: "red", textAlign: "center" }}>
                {amountError && "Enter a valid Amount to continue"}
              </small>
              <div className="payment-method">
                <small>Payment Method</small>
                <div>
                  <div
                    className={`${payMethod == 1 && "payment-method-active"}`}
                  >
                    <img src={pay1} onClick={() => setPayMethod(1)} />
                  </div>
                  <div
                    id="mobile-money"
                    className={`${payMethod == 2 && "payment-method-active"}`}
                  >
                    <img src={pay2} onClick={() => setPayMethod(2)} />
                  </div>
                  <div
                    className={`${payMethod == 3 && "payment-method-active"}`}
                  >
                    <img src={pay3} onClick={() => setPayMethod(3)} />
                  </div>
                  <div
                    className={`${payMethod == 4 && "payment-method-active"}`}
                  >
                    <img src={pay4} onClick={() => setPayMethod(4)} />
                  </div>
                </div>
              </div>
            </div>
            <div className={`${depositActive && "payment-method-not-active"}`}>
              <span>Select your preferred investment plan</span>
              <div className="smalldep-cards">
                <div>
                  <div
                    className={`smalldep-card ${
                      planValue == 1 && "smalldep-card-active"
                    }`}
                    onClick={() => setPlanValue(1)}
                  >
                    1000.00% 1 days every 1 days USD 200.00 - USD 1,000.00
                  </div>
                  <div
                    className={`smalldep-card ${
                      planValue == 2 && "smalldep-card-active"
                    }`}
                    onClick={() => setPlanValue(2)}
                  >
                    1000.00% 24 hours every 24 hours USD 200.00 - USD 10,000.00
                  </div>
                </div>
                <div>
                  <div
                    className={`smalldep-card ${
                      planValue == 3 && "smalldep-card-active"
                    }`}
                    onClick={() => setPlanValue(3)}
                  >
                    800.00% 1 days every 1 days USD 1,000.00 - USD 9,000.00
                  </div>
                  <div
                    className={`smalldep-card ${
                      planValue == 4 && "smalldep-card-active"
                    }`}
                    onClick={() => setPlanValue(4)}
                  >
                    850.00% 1 weeks every 1 weeks USD 10,000.00 - USD 50,000.00
                  </div>
                </div>
              </div>
              <div
                style={{
                  color: "red",
                  paddingTop: ".5rem",
                  textAlign: "center",
                }}
              >
                {planError && "Please Select a Plan"}
              </div>
            </div>
            <button onClick={!depositActive ? planHandler : depositHAndler}>
              {!depositActive ? "Proceed to amount" : "Proceed to pay"}
            </button>
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
