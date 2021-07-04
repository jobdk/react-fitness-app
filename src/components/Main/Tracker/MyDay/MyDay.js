import React from "react";
import PropTypes from "prop-types";
import MyDayFoods from "./MyDayFoods/MyDayFoods";
import MyDayExercises from "./MyDayExercises/MyDayExercises";

const MyDay = ({
  selectedDate,
  currentDay,
  onDeleteFood,
  onDeleteExercise,
}) => {
  return (
    <div>
      My Day
      <div>
        <MyDayFoods foods={currentDay.food} onDeleteFood={onDeleteFood} />
      </div>
      <div>
        <MyDayExercises
          exercises={currentDay.exercise}
          onDeleteExercise={onDeleteExercise}
        />
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

MyDay.propTypes = {
  selectedDate: PropTypes.string,
};

export default MyDay;
