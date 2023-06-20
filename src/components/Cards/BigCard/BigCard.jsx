import React, { useState } from "react";
import "../cards.css";
import Card from "../Card/Card";

const BigCard = ({
  span1,
  span2,
  hanger1,
  hanger2,
  hanger3,
  spantext1,
  spantext2,
  spantext3,
  btnText,
  btnClicked,
  card3Active,
  refferal,
}) => {
  return (
    <div className="bigcard-container">
      <div className="bigcard-header">
        <span>
          <span>{span1}</span>
          {span2}
        </span>
        <div>
          <button onClick={btnClicked}>{btnText}</button>
        </div>
      </div>
      <div className="bigcard-cards">
        <Card
          hang1={hanger1}
          hang2={hanger2}
          spanText1={spantext1}
          spanText2={spantext2}
          card3Active={card3Active}
          hang3={hanger3}
          spanText3={spantext3}
          refferal={refferal}
        />
      </div>
    </div>
  );
};

export default BigCard;
