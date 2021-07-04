import React from "react";
import MyDayFood from "./MyDayFood/MyDayFood";

const MyDayFoods = ({ foods }) => {
  return (
    <div>
      {foods.map((food) => (
        <MyDayFood key={food.foodId} food={food} />
      ))}
    </div>
  );
};

export default MyDayFoods;
