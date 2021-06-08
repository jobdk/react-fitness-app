import React from "react";
import Button from "../Main/Shared/Button";
import "./Menu.css";
import { slide as Burgermenu } from "react-burger-menu";

const Menu = (props) => {
  return (
    <div>
      <Burgermenu {...props.pageWrapId}>
        <a className="menu-item" onClick={props.onFoodDbPress}>
          FoodDB
        </a>

        <a className="menu-item" onClick={props.onExerciseDbClick}>
          ExerciseDB
        </a>

        <a className="menu-item" onClick={props.onProfilesClick}>
          Profiles
        </a>

        <a className="menu-item" onClick={props.onTrackerClick}>
          Tracker
        </a>
      </Burgermenu>
    </div>
  );
};

export default Menu;
