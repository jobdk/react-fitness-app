import React from "react";
import MyDayFood from "./MyDayFood/MyDayFood";

const MyDayFoods = ({ foods, onDeleteFood, onChangeFoodAmount }) => {
  return (
    <div>
      {foods.map((food) => (
        <MyDayFood
          key={food.foodId}
          food={food}
          onDeleteFood={onDeleteFood}
          onChangeFoodAmount={onChangeFoodAmount}
        />
      ))}
    </div>
  );
};

export default MyDayFoods;
