import React from "react";
import { AiOutlineCaretDown } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiMenu } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { HiPencil } from "react-icons/hi";
import { MdSearch } from "react-icons/md";

const DashBoardHeader = () => {
  return (
    <div>
      <div className="dashboard-header">
        <div className="top-div">
          <h2>Home &gt; Dashboard</h2>
        </div>
        <div className="small-dash-header">
          <FiMenu id="small-dash-icon" onClick={() => setSideNavActive(true)} />
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
    </div>
  );
};

export default DashBoardHeader;
