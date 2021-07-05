import React from "react";
import MyDayExercise from "./MyDayExercise/MyDayExercise";

const MyDayExercises = ({
  exercises,
  onDeleteExercise,
  onChangeExerciseAmount,
}) => {
  return (
    <div>
      {exercises.map((exercise) => (
        <MyDayExercise
          key={exercise.exerciseId}
          exercise={exercise}
          onDeleteExercise={onDeleteExercise}
          onChangeExerciseAmount={onChangeExerciseAmount}
        />
      ))}
    </div>
  );
};

export default MyDayExercises;
