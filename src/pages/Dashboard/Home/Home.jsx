import React from "react";
import "./home.css";
import revicon from "../../../assets/revicon.svg";
import { Link } from "react-router-dom";
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
        <div className="home-body-sub-main-cards">
          <div className="home-body-cards">
            <div className="home-body-card">
              <img src={revicon} alt="" />
              <span>
                <span>USD</span>
                <span>0.00</span>
                <span>Withdrawable</span>
              </span>
              <div className="home-hanging">
                <span>Earnings</span>
              </div>
            </div>
            <div className="home-body-card home-card2">
              <img src={revicon} alt="" />
              <span>
                <span>USD</span>
                <span>0.00</span>
                <span>Locked</span>
              </span>
              <div className="home-hanging">
                <span>Active deposits</span>
              </div>
            </div>
          </div>
          <div className="user-portfolio">
            <span>overall portfolio</span>
            <div>
              <div className="active-div"></div>
              <span>Active</span>
              <div className="inactive-div"></div>
              <span>Inactive</span>
              <div className="earnings-div"></div>
              <span>Earnings</span>
            </div>
          </div>
        </div>
        <div className="home-refferals">
          <div className="refer-card">
            <span>Refer & earn 10% From your referral's deposits.</span>
            <small>
              Referral Link:
              https://globalcapital-investment.com/signup/i0Z5lGVD
            </small>

            <input type="text" placeholder="Enter Email Address" />

            <button>Invite Friends</button>
          </div>
          <div className="refer-card earning-referral-card">
            <div>
              <span>Earnings History</span>
              <Link to="">Detailed history</Link>
            </div>
            <div className="earning-ref-table">
              <table>
                <tr>
                  <th>TXN Code</th>
                  <th>Amount(USD)</th>
                  <th>Date</th>
                </tr>
                {/* <tr>
                  <td> </td>
                  <td> </td>
                  <td></td>
                </tr> */}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
