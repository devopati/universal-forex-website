import React, { useState } from "react";
import "./dashboard.css";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import Sidenav from "./SideNav/Sidenav";
import { Outlet } from "react-router";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { HiPencil } from "react-icons/hi";
import { MdSearch } from "react-icons/md";

const Dashboard = () => {
  const [SideNavActive, setSideNavActive] = useState(false);
  const [profileActive, setProfileActive] = useState(false);
  const outletClickHandler = () => {
    if (profileActive) {
      setProfileActive(false);
    }
    if (SideNavActive) {
      setSideNavActive(false);
    }
  };
  return (
    <div className="dashboard-container">
      <div className={`side-nav ${SideNavActive && "side-nav-open"}`}>
        <Sidenav setSideNavActive={setSideNavActive} />
      </div>
      <div className="dashboard-body">
        <div className="dashboard-header">
          <div className="top-div">
            <h2>Home &gt; Dashboard</h2>
          </div>
          <div className="small-dash-header">
            <FiMenu
              id="small-dash-icon"
              onClick={() => setSideNavActive(true)}
            />
            <span>LOGO</span>
          </div>
          <div className="non-viscible">.</div>
          <div className="dashboard-profile">
            <div className="pr-icon">
              <MdSearch />
            </div>
            <button className="lang-btn top-div">
              <img src="	https://globalcapital-investment.com/uploads/gb-eng.png" />{" "}
              <small>ENG</small>
              <RiArrowDownSLine />
            </button>
            <div
              className="profile"
              onClick={() => setProfileActive(!profileActive)}
            >
              <CgProfile id="profile-icon" />
              <span>
                Name <span>verified</span>
              </span>

              <div
                className={`profile-dropdown ${
                  profileActive && "profile-active"
                }`}
              >
                <div>
                  <RxPerson />
                  <span>Account</span>
                </div>
                <div>
                  <HiPencil />
                  <span>Logout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-outlets" onClick={outletClickHandler}>
          <Outlet />
        </div>
        <div className="copyright">
          <small>Copyright Global Capital Investment © 2023 Version :3.7</small>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
