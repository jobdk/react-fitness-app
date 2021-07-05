import React from "react";
import "../../MyDay.css";
import { useStore } from "react-redux";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";

const MyDayExercise = ({
  exercise,
  onDeleteExercise,
  onChangeExerciseAmount,
}) => {
  // if (exercise) console.log(exercise);

  const store = useStore();

  const [exerciseId, setExerciseId] = useState("");
  const [name, setName] = useState("");
  const [timeInMinutes, setTimeInMinutes] = useState(exercise.timeInMinutes);
  const [energyBurned, setEnergyBurned] = useState("");
  const [baseTime, setBaseTime] = useState("");

  useEffect(() => {
    const exercisesFromState = store.getState().exerciseReducer.exercises;
    for (let i = 0; i < exercisesFromState.length; i++) {
      if (exercisesFromState[i]._id === exercise.exerciseId) {
        setExerciseId(exercise.exerciseId);
        setName(exercisesFromState[i].name);
        setBaseTime(exercisesFromState[i].baseTime);
        console.log(exercisesFromState[i]);
        setEnergyBurned(
          (
            (exercisesFromState[i].energyBurned /
              exercisesFromState[i].baseTime) *
            timeInMinutes
          ).toFixed(1)
        );
      }
    }
    if (name === "") {
      console.log("exercises not found. ExerciseId = " + exercise.exerciseId);
    }
  }, [exercise, store, exerciseId, timeInMinutes]);

  return (
    <div className="myday-grid-container">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <input
          className="my-day-input"
          type="text"
          placeholder="time"
          value={timeInMinutes}
          onChange={(e) => {
            setTimeInMinutes(e.target.value);
            onChangeExerciseAmount(exercise, e.target.value);
          }}
        />{" "}
        min
      </div>
      <div>
        <h3>{energyBurned}</h3>
      </div>
      <div>
        <h3>
          <span
            onClick={() => {
              onDeleteExercise(exercise);
            }}
          >
            <BsTrash />
          </span>
        </h3>
      </div>
    </div>
  );
};

export default MyDayExercise;
