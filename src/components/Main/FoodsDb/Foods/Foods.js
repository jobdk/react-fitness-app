import React from "react";
import Food from "./Food/Food";
import { useHistory } from "react-router-dom";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Foods = ({ foods, onDelete }) => {
  let history = useHistory();

  return (
    <div>
      <div className="food-grid-container">
        <div>
          <h3>name</h3>
        </div>
        <div>
          <h3>base amount</h3>
        </div>
        <div>
          <h3>cal</h3>
        </div>
        <div>
          <h3>fat</h3>
        </div>
        <div>
          <h3>carbs</h3>
        </div>
        <div>
          <h3>protein</h3>
        </div>
        <div></div>
      </div>
      {foods.map((food) => (
        <Food
          key={food._id}
          food={food}
          onDelete={onDelete}
          onEdit={(id) =>
            history.push({
              pathname: "/food/edit/" + id,
            })
          }
        />
      ))}
      <BsFillPlusCircleFill
        className="plus-icon"
        onClick={(id) =>
          history.push({
            pathname: "/food/add/" + id,
          })
        }
      />
    </div>
  );
};

export default Foods;
