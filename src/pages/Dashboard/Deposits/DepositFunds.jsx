import React, { useState } from "react";
import "./deposits.css";
import revicon from "../../../assets/revicon.png";
import pay1 from "../../../assets/mpesa.png";
import pay2 from "../../../assets/pay2.png";
import pay3 from "../../../assets/pay3.png";
import pay4 from "../../../assets/airtel.png";
import DepositError from "../../../components/DepositError/DepositError";
import { Link } from "react-router-dom";

const DepositFunds = () => {
  const [depositActive, setDepositActive] = useState(false);
  const [planValue, setPlanValue] = useState(0);
  const [planError, setPlanError] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [depositAmount, setDepositAmount] = useState(0);
  const [payMethod, setPayMethod] = useState(0);
  const [manualPaymenActive, setManualPaymentActive] = useState(false);
  const [depositAccount, setDepositAccount] = useState("");
  const [depositPopUpError, setDepositPopUpError] = useState(false);

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
      setManualPaymentActive(true);
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

  const depositConfirmationHandler = () => {
    if (!depositAccount) {
      setAmountError(true);
      setTimeout(() => {
        setAmountError(false);
      }, 3000);
      return;
    } else {
      setDepositPopUpError(true);
      setTimeout(() => {
        setDepositPopUpError(false);
        setDepositAccount("");
      }, 3500);
    }
  };
  const amountHandler = (amount) => {
    const amountString = amount.toString();
    const trimmedAmountString = amountString.replace(/^0+/, "");
    return parseInt(trimmedAmountString, 10);
  };
  return (
    <>
      <div
        className={`deposit-error ${
          !depositPopUpError ? "hide-deposit-popup" : "show-deposit-popup"
        }`}
      >
        <DepositError setDepositPopUpError={setDepositPopUpError} />
      </div>
      <div className={`depositfunds-container ${depositPopUpError && "blur"}`}>
        <div className="depositfunds-header">
          <h2>
            <span>Depo</span>sits/New deposit
          </h2>
          <div>
            {!manualPaymenActive ? (
              <Link to="../viewdeposits">
                <button>My Deposits</button>
              </Link>
            ) : (
              <button onClick={() => setManualPaymentActive(false)}>
                Back
              </button>
            )}
          </div>
        </div>
        <div className="depositfunds-body">
          <div className={`depositfunds-cards`}>
            {/* ========================================================= */}
            <div
              className={`depositfunds-card dep-lower-card dep-small ${
                depositPopUpError && "blur"
              }`}
            >
              <div>
                <img src={revicon} alt="" />
              </div>
              <div
                className={`dep-funds-amount ${
                  manualPaymenActive && "dep-funds-styled"
                }`}
              >
                <span>
                  {manualPaymenActive
                    ? `Pay USD ${amountHandler(depositAmount)}.00`
                    : "USD 0.00"}
                </span>
                <small>{!manualPaymenActive && "Total deposits"}</small>
              </div>
              <div className="top-hanger">
                {manualPaymenActive ? "Make a payment" : "All deposits"}
              </div>
            </div>

            <div
              className={`depositfunds-card ${depositActive && "paybig-card"} ${
                depositPopUpError && "blur"
              }`}
            >
              {/* ========================MANUAL-PAYMTNT PROCEDURE================================= */}
              <div
                className={`manual-payment-confirmation ${
                  !manualPaymenActive && "display-none"
                } `}
              >
                <span id="manual-title">
                  MOBILE MOBILE MONEY TO MPESA KENYA Account
                </span>
                <span>
                  PAYMENTS SHOULD ONLY BE MADE THROUGH THE M-PESA NUMBER BELOW
                </span>
                <span id="pyment-details">M-PESA NAME: REUBEN LOMONG</span>
                <span id="pyment-details">M-PESA NUMBER: 254711605797</span>
                <span>
                  Your deposit will reflect after immediately after 2 network
                  confirmations
                </span>
                <span>COPY AND PASTE THE TRANSACTION CODE BELOW</span>
                <span>Enter the account you've sent the deposit from</span>
                <br />
                <div>
                  <label>Enter account you've sent the deposit from</label>
                  <input
                    type="text"
                    value={depositAccount}
                    onChange={(e) => setDepositAccount(e.target.value)}
                  />
                  <small
                    style={{
                      color: "red",
                      padding: ".5rem",
                      textAlign: "center",
                    }}
                  >
                    {amountError && "Please Enter the Account"}
                  </small>
                  <button onClick={depositConfirmationHandler}>
                    confirm deposit and proceed
                  </button>
                </div>
                <div
                  className={`top-hanger ${
                    !manualPaymenActive && "payment-method-not-active"
                  }`}
                >
                  <small>Make a payment</small>
                </div>
              </div>
              {/* ========================PAYMENT AMOUNT AND METHOD================================ */}
              <div
                className={`deposit-confirmation ${
                  !depositActive && "payment-method-not-active"
                } ${manualPaymenActive && "payment-method-not-active"}`}
              >
                <small
                  style={{
                    color: "red",
                    padding: ".5rem",
                    textAlign: "center",
                  }}
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
                      className={`${payMethod == 4 && "payment-method-active"}`}
                    >
                      <img src={pay4} onClick={() => setPayMethod(4)} />
                    </div>
                    <div
                      className={`${payMethod == 3 && "payment-method-active"}`}
                    >
                      <img src={pay3} onClick={() => setPayMethod(3)} />
                    </div>
                  </div>
                </div>
              </div>
              {/* ============================PAYMENT PLANS======================================= */}
              <div
                className={`${depositActive && "payment-method-not-active"}`}
              >
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
                      1000.00% 24 hours every 24 hours USD 200.00 - USD
                      10,000.00
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
                      850.00% 1 weeks every 1 weeks USD 10,000.00 - USD
                      50,000.00
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
              {/* =============================END OF PAYMENT PLANS================================= */}
              <button
                onClick={!depositActive ? planHandler : depositHAndler}
                className={`${
                  manualPaymenActive && "payment-method-not-active"
                }`}
              >
                {!depositActive ? "Proceed to amount" : "Proceed to pay"}
              </button>
            </div>
            <div
              className={`depositfunds-card dep-lower-card dep-big ${
                depositPopUpError && "blur"
              }`}
            >
              <div>
                <img src={revicon} alt="" />
              </div>
              <div
                className={`dep-funds-amount ${
                  manualPaymenActive && "dep-funds-styled"
                }`}
              >
                <span>
                  {manualPaymenActive
                    ? `Pay USD ${amountHandler(depositAmount)}.00`
                    : "USD 0.00"}
                </span>
                <small>{!manualPaymenActive && "Total deposits"}</small>
              </div>
              <div className="top-hanger">
                <small>
                  {manualPaymenActive ? "Make a payment" : "All deposits"}
                </small>
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
    </>
  );
};

export default DepositFunds;
