import React, { useState, useEffect } from "react";
import "./navigation.css";
import { navItems } from "./navItems";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import { MdClose } from "react-icons/md";
import { AiOutlineCaretDown } from "react-icons/ai";
import Logo from "../Logo";

function Navigation() {
  const [menuClicked, setMenuClicked] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = window.innerHeight * 0.4;

      if (scrollPosition > headerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`header-container ${isScrolled && "scrolled"}`}>
      <div className="header-logo">
        <Logo />
      </div>
      <div className={`header-items ${menuClicked && "menu-clicked"}`}>
        <div className="close-btn" onClick={() => setMenuClicked(false)}>
          <MdClose id="close-icon" />
        </div>
        {navItems.map((item) => {
          return (
            <Link to={item.path} key={item.id}>
              <li id="nav-item">{item.label}</li>
            </Link>
          );
        })}
        <div className="navigation-btns">
          <Link to="/login">
            <button id="login-btn">LOGIN</button>
          </Link>
          <Link to="/register">
            <button id="signup-btn">SIGN UP</button>
          </Link>
        </div>
        <button className="lang-btn">
          <img src="	https://globalcapital-investment.com/uploads/gb-eng.png" />{" "}
          <small>ENG</small>
          <AiOutlineCaretDown />
        </button>
      </div>
      <div
        className="navigation-small"
        onClick={() => setMenuClicked(!menuClicked)}
      >
        <GrMenu id="menu-icon" />
      </div>
    </div>
  );
}

export default Navigation;
