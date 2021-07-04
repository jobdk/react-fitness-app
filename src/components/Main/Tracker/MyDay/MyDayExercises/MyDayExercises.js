import React from "react";
import MyDayExercise from "./MyDayExercise/MyDayExercise";

const MyDayExercises = ({ exercises }) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <MyDayExercise key={exercise.exerciseId} exercise={exercise} />
      ))}
    </div>
  );
};

export default MyDayExercises;
