import React from "react";
import "./Menu.css";
import { slide as Burgermenu } from "react-burger-menu";
import { BsFillPersonFill } from "react-icons/bs";
import { useHistory } from "react-router-dom";

const Menu = (props) => {
  let history = useHistory();
  return (
    <div>
      <Burgermenu {...props.pageWrapId}>
        <a
          className="menu-item"
          onClick={() => {
            history.push("/foodsdb");
          }}
        >
          FoodDB
        </a>

        <a
          className="menu-item"
          onClick={() => {
            history.push("/exerciseDb");
          }}
        >
          ExerciseDB
        </a>

        <a
          className="menu-item"
          onClick={() => {
            history.push("/profiles");
          }}
        >
          Profiles
        </a>

        <a
          className="menu-item"
          onClick={() => {
            history.push("/tracker");
          }}
        >
          Tracker
        </a>
        <a
          className="menu-item"
          onClick={() => {
            history.push("/user/authentication");
          }}
        >
          <BsFillPersonFill />
        </a>
      </Burgermenu>
    </div>
  );
};

export default Menu;
