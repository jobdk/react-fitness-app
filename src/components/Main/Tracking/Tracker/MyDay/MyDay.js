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
      <h3>
        Today is {selectedDate.getDate()}.{selectedDate.getMonth() + 1}.
        {selectedDate.getFullYear()}
      </h3>
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
