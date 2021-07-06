import React from "react";
import { NavLink } from "react-router-dom";
import "../Header/Header.css";
import Media from "react-media";
const Header = () => {
  return (
    <div className="pagetitle">
      <NavLink className="link" to={"/"}>
        <h1>FitTrack</h1>
      </NavLink>
      <Media query="(min-width: 1000px)">
        <div className="upper-menu">
          <div>
            <NavLink className="link" to={"/profiles"}>
              <h2 className="links">Profiles</h2>
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink className="link" to={"/foodsdb"}>
              <h2 className="links">Foods</h2>
            </NavLink>
          </div>

          <div className="nav-links">
            <NavLink className="link" to={"/exerciseDb"}>
              <h2 className="links"> Exercises</h2>
            </NavLink>
          </div>
          <div className="nav-links">
            <NavLink className="link" to={"/user/authentication"}>
              <h2 className="links">User</h2>
            </NavLink>
          </div>
        </div>
      </Media>
    </div>
  );
};

export default Header;
