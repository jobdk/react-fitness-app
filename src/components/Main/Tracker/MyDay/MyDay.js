import React from "react";
import PropTypes from "prop-types";
import MyDayFoods from "./MyDayFoods/MyDayFoods";
import MyDayExercises from "./MyDayExercises/MyDayExercises";
import { useEffect } from "react";

const MyDay = ({
  selectedDate,
  currentDay,
  onDeleteFood,
  onDeleteExercise,
  onChangeFoodAmount,
  onChangeExerciseAmount,
  currentDayFromState,
  mapStoredDay,
  setCurrentDayBuffer,
  currentDate,
  id,
}) => {
  useEffect(() => {
    checkDispatch();
  }, []);

  const checkDispatch = () => {
    console.log(2);
    if (currentDayFromState.getDayResponse.length > 0) {
      const mappedDay = mapStoredDay(currentDayFromState.getDayResponse[0]);
      setCurrentDayBuffer(mappedDay);
    } else {
      console.log("no day found.");
      const newDay = {
        date: Math.floor(currentDate.getTime() / 1000),
        food: [],
        exercise: [],
        profileId: id,
      };
      setCurrentDayBuffer(newDay);
    }
  };

  return (
    <div>
      <h3>
        Today is {selectedDate.getDate()}.{selectedDate.getMonth() + 1}.
        {selectedDate.getFullYear()}
      </h3>
      <div>
        <MyDayFoods
          foods={currentDay.food}
          onDeleteFood={onDeleteFood}
          onChangeFoodAmount={onChangeFoodAmount}
        />
      </div>
      <div>
        <MyDayExercises
          exercises={currentDay.exercise}
          onDeleteExercise={onDeleteExercise}
          onChangeExerciseAmount={onChangeExerciseAmount}
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
