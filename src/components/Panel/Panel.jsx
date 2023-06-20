import React from "react";
import panel from "../../assets/panel.png";
import "./panel.css";

function Panel() {
  return (
    <div className="panel-container">
      <img src={panel} alt="" />
      <div>
        <span>No Transaction can be found</span>
      </div>
    </div>
  );
}

export default Panel;
