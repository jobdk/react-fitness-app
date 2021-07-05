import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
const Header = () => {
  return (
    <div className="pagetitle">
      <NavLink className="link" to={"/"}>
        <h1>FitTrack</h1>
      </NavLink>
    </div>
  );
};

export default Header;
