import React from "react";
import MyDayExercise from "./MyDayExercise/MyDayExercise";

const MyDayExercises = ({ exercises, onDeleteExercise }) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <MyDayExercise
          key={exercise.exerciseId}
          exercise={exercise}
          onDeleteExercise={onDeleteExercise}
        />
      ))}
    </div>
  );
};

export default MyDayExercises;
