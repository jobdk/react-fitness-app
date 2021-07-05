import React from "react";
import "./Main.css";
import { NavLink } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <div>
        <NavLink className="link" to={"/profiles"}>
          Profiles
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="link" to={"/foodsdb"}>
          FoodDB
        </NavLink>
      </div>

      <div className="nav-links">
        <NavLink className="link" to={"/exerciseDb"}>
          ExerciseDB
        </NavLink>
      </div>
      <div className="nav-links">
        <NavLink className="link" to={"/user/authentication"}></NavLink>
      </div>
    </div>
  );
};

export default Main;
