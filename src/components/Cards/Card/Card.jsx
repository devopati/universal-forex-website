import React from "react";
import revicon from "../../../assets/revicon.png";
import { GiWallet } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const Card = ({
  hang1,
  hang2,
  spanText1,
  spanText2,
  spanText3,
  hang3,
  card3Active,
  refferal,
}) => {
  return (
    <div className={`card-container ${card3Active && "cardactive"}`}>
      <div className={`cards-card ${card3Active && "cards-card-active"} `}>
        <div>
          {/* <img src={revicon} alt="" /> */}
          {!refferal ? (
            <GiWallet size={80} color="grey" />
          ) : (
            <BsPeopleFill size={80} color="grey" />
          )}
        </div>
        <div>
          <span id={`${!card3Active ? "span-bold" : "span-card-active"}`}>
            {!refferal ? "USD 0.00" : "0"}
          </span>
          <span>{spanText1}</span>
        </div>
        <div className="top-hanger">
          <small>{hang1}</small>
        </div>
      </div>
      <div className={`cards-card ${card3Active && "cards-card-active"} `}>
        <div>
          {!refferal ? (
            <img src={revicon} alt="" />
          ) : (
            <BsPeopleFill size={80} color="grey" />
          )}
        </div>
        <div>
          <span id={`${!card3Active ? "span-bold" : "span-card-active"}`}>
            {!refferal ? "USD 0.00" : "0"}
          </span>
          <span>{spanText2}</span>
        </div>
        <div className="top-hanger">
          <small>{hang2}</small>
        </div>
      </div>
      {/* ================================= */}

      {card3Active && (
        <div className={`cards-card ${card3Active && "cards-card-active"} `}>
          <div>
            <img src={revicon} alt="" />
          </div>
          <div>
            <span id={`${!card3Active ? "span-bold" : "span-card-active"}`}>
              USD 0.00
            </span>
            <span>{spanText3}</span>
          </div>
          <div className="top-hanger">
            <small>{hang3}</small>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
