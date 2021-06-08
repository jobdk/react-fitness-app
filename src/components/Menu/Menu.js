import React from "react";
import "./Menu.css";
import { slide as Burgermenu } from "react-burger-menu";
import { BsFillPersonFill } from "react-icons/bs";

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
        <a className="menu-item" onClick={props.onUserClick}>
          <BsFillPersonFill />
        </a>
      </Burgermenu>
    </div>
  );
};

export default Menu;
