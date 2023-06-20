import React, { useState } from "react";
import BigCard from "../../../components/Cards/BigCard/BigCard";
import Panel from "../../../components/Panel/Panel";

const ViewDeposits = () => {
  return (
    <div className="depositfunds-container">
      <div className="big-card">
        <BigCard
          span1={"Dep"}
          span2={"osits"}
          hanger1={"Active deposits"}
          hanger2={"Inactive deposits"}
          spantext1={"Locked Deposits"}
          spantext2={"Inactive deposits"}
        />
        <div className="panel">
          <Panel />
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
            <div>{/* <img src={revicon} alt="" /> */}</div>
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

export default ViewDeposits;
