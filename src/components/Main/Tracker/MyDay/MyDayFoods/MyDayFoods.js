import React from "react";
import MyDayFood from "./MyDayFood/MyDayFood";

const MyDayFoods = ({ foods, onDeleteFood }) => {
  return (
    <div>
      {foods.map((food) => (
        <MyDayFood key={food.foodId} food={food} onDeleteFood={onDeleteFood} />
      ))}
    </div>
  );
};

export default MyDayFoods;
