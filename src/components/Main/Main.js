import React from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div className="nav-links">
        <NavLink className="link" to={"/profiles"}>
          <h2>Profiles</h2>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="link" to={"/foodsdb"}>
          <h2>Foods</h2>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="link" to={"/exerciseDb"}>
          <h2> Exercises</h2>
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="link" to={"/user/authentication"}>
          <h2>User</h2>
        </NavLink>
      </div>
    </div>
  );
};

export default Main;
