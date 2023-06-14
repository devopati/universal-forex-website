import React, { useState } from "react";
import "./sidenav.css";
import { FiMenu } from "react-icons/fi";
import { BiTachometer } from "react-icons/bi";
import { TbMoneybag } from "react-icons/tb";
import { GiReceiveMoney } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { RiArrowDownSLine } from "react-icons/ri";
import { VscChromeClose, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
const Sidenav = ({ setSideNavActive }) => {
  const [fullMenu, setFullMenu] = useState(true);
  const [dropDown1Active, setDropDown1Active] = useState(false);
  const [dropDown2Active, setDropDown2Active] = useState(false);
  const [menuItem, setMenuItem] = useState("dashboard");
  const menuItemHandler = (item) => {
    setDropDown1Active(false);
    setDropDown2Active(false);
    setFullMenu(!fullMenu);
  };

  const dropdownHandler = () => {
    if (dropDown1Active) {
      setDropDown1Active(false);
      setDropDown2Active(!dropDown2Active);
    } else {
      setDropDown2Active(!dropDown2Active);
    }
  };
  const dropdownHandler2 = () => {
    if (dropDown2Active) {
      setDropDown2Active(false);
      setDropDown1Active(!dropDown1Active);
    } else {
      setDropDown1Active(!dropDown1Active);
    }
    // sideNavHandler(true);
  };

  return (
    <div className="sidenav-container">
      <div className="side-top-small">
        <span>ll</span>
        <VscClose onClick={() => setSideNavActive(false)} />
      </div>
      <div className="sidenav-top">
        <div className="side-nav-icons" onClick={menuItemHandler}>
          {fullMenu ? <FiMenu id="nav-icon" /> : <VscClose id="nav-icon" />}
        </div>
        <div className={`logo ${!fullMenu && "no-logo"}`}>LOGO</div>
      </div>
      <div className={`side-nav-items ${!fullMenu && "side-nav-item-close"}`}>
        <Link to="" onClick={() => setSideNavActive(false)}>
          <li
            onClick={() => setMenuItem("dashboard")}
            className={`${menuItem == "dashboard" && "menu-item-clicked"}`}
          >
            <BiTachometer id="navitem-icon" />{" "}
            <span id={`${menuItem == "dashboard" && "item-clicked"}`}>
              dashboard
            </span>
          </li>
        </Link>
        {/* <Link to="deposits"> */}
        <li
          onClick={dropdownHandler}
          className={`${menuItem == "deposits" && "menu-item-clicked"}`}
        >
          <TbMoneybag id="navitem-icon" />{" "}
          <span id={`${menuItem == "deposits" && "item-clicked"}`}>
            deposits <RiArrowDownSLine id="navitem-icon" />
          </span>
        </li>
        <div className={`dropdown ${dropDown2Active && "dropdown-active"}`}>
          <Link to="depositfunds" onClick={() => setSideNavActive(false)}>
            <li onClick={() => setMenuItem("deposits")}>Deposit Funds</li>
          </Link>
          <Link to="viewdeposits" onClick={() => setSideNavActive(false)}>
            <li onClick={() => setMenuItem("deposits")}>View Deposits</li>
          </Link>
        </div>
        {/* </Link> */}
        {/* <Link to="withdrawals"> */}
        <li
          onClick={dropdownHandler2}
          className={`${menuItem == "withdrawals" && "menu-item-clicked"}`}
        >
          <GiReceiveMoney />{" "}
          <span id={`${menuItem == "withdrawals" && "item-clicked"}`}>
            withdrawals <RiArrowDownSLine id="navitem-icon" />
          </span>
        </li>
        <div className={`dropdown ${dropDown1Active && "dropdown-active"}`}>
          <Link to="withdrawFunds" onClick={() => setSideNavActive(false)}>
            <li onClick={() => setMenuItem("withdrawals")}>Withdraw Funds</li>
          </Link>
          <Link to="viewwithdraws" onClick={() => setSideNavActive(false)}>
            <li onClick={() => setMenuItem("withdrawals")}>View Withdraws</li>
          </Link>
        </div>
        {/* </Link> */}
        <Link to="earnings" onClick={() => setSideNavActive(false)}>
          <li
            onClick={() => setMenuItem("earnings")}
            className={`${menuItem == "earnings" && "menu-item-clicked"}`}
          >
            <BiTachometer id="navitem-icon" />
            <span id={`${menuItem == "earnings" && "item-clicked"}`}>
              earnings
            </span>
          </li>
        </Link>
        <Link to="referrals" onClick={() => setSideNavActive(false)}>
          <li
            onClick={() => setMenuItem("my referrals")}
            className={`${menuItem == "my referrals" && "menu-item-clicked"}`}
          >
            <BsPeopleFill id="navitem-icon" />
            <span id={`${menuItem == "my referrals" && "item-clicked"}`}>
              my referrals
            </span>
          </li>
        </Link>
        <Link to="help" onClick={() => setSideNavActive(false)}>
          <li
            onClick={() => setMenuItem("help")}
            className={`${menuItem == "help" && "menu-item-clicked"}`}
          >
            <TfiEmail id="navitem-icon" />
            <span id={`${menuItem == "help" && "item-clicked"}`}>
              help desk
            </span>
          </li>
        </Link>
      </div>
    </div>
  );
};

export default Sidenav;
