import React from "react";
import "./Menu.css";
import { slide as Burgermenu } from "react-burger-menu";
import { BsFillPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Menu = (props) => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <div>
      <Burgermenu
        {...props.pageWrapId}
        isOpen={isBurgerMenuOpen}
        onStateChange={(state) => setIsBurgerMenuOpen(state.isOpen)}
      >
        <NavLink
          className="menu-item"
          to={"/profiles"}
          onClick={() => toggleMenu()}
        >
          Profiles
        </NavLink>
        <NavLink
          className="menu-item"
          to={"/foodsdb"}
          onClick={() => toggleMenu()}
        >
          Foods
        </NavLink>

        <NavLink
          className="menu-item"
          to={"/exerciseDb"}
          onClick={() => toggleMenu()}
        >
          Exercises
        </NavLink>

        <NavLink
          className="menu-item"
          to={"/user/authentication"}
          onClick={() => toggleMenu()}
        >
          <BsFillPersonFill />
        </NavLink>
      </Burgermenu>
    </div>
  );
};

export default Menu;
