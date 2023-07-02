import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "@assets/Netflix_logo.png";
import avatar from "@assets/Netflix_avatar.png";

function NavBar() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div className="nav__contents">
        <Link to="/">
          <img className="nav__logo" src={logo} alt="" />
        </Link>

        <Link to="/profile">
          <img className="nav__avatar" src={avatar} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
