import React from "react";
import "../../MyDay.css";
import { useStore } from "react-redux";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";

const MyDayFood = ({ food, onDeleteFood }) => {
  // if (food) console.log(food);

  const [foodAmount, setFoodAmount] = useState(food.amount);
  const store = useStore();

  const [foodId, setFoodId] = useState("");
  const [name, setName] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [energy, setEnergy] = useState("");

  useEffect(() => {
    const foodsFromState = store.getState().foodReducer.foods;

    for (let i = 0; i < foodsFromState.length; i++) {
      if (foodsFromState[i]._id === food.foodId) {
        setFoodId(foodId);
        setName(foodsFromState[i].name);
        setBaseAmount(foodsFromState[i].baseAmount);
        setEnergy(foodsFromState[i].energy);
      }
    }
  }, [food, store, foodId]);

  return (
    <div className="myday-grid-container">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="amount"
          value={foodAmount}
          onChange={(e) => setFoodAmount(e.target.value)}
        />
      </div>
      <div>
        <h3>{energy}</h3>
      </div>
      <div>
        <h3>
          <span
            onClick={() => {
              onDeleteFood(food);
            }}
          >
            <BsTrash />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default MyDayFood;
