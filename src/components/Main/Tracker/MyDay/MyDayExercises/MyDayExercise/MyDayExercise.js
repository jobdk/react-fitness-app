import React from "react";
import "../../MyDay.css";
import { useStore } from "react-redux";
import { useState, useEffect } from "react";
import { BsTrash } from "react-icons/bs";

const MyDayExercise = ({ exercise, onDeleteExercise }) => {
  // if (exercise) console.log(exercise);

  const store = useStore();

  const [exerciseId, setExerciseId] = useState("");
  const [name, setName] = useState("");
  const [timeInMinutes, setTimeInMinutes] = useState("");
  const [energyBurned, setEnergyBurned] = useState("");

  useEffect(() => {
    const exercisesFromState = store.getState().exerciseReducer.exercises;
    for (let i = 0; i < exercisesFromState.length; i++) {
      if (exercisesFromState[i]._id === exercise.exerciseId) {
        setExerciseId(exerciseId);
        setName(exercisesFromState[i].name);
        setEnergyBurned(exercisesFromState[i].energyBurned);
      }
      if (name === "") {
        console.log("exercises not found. ExerciseId = " + exercise.exerciseId);
      }
    }
  }, [exercise, store, exerciseId]);

  return (
    <div className="myday-grid-container">
      <div>
        <h3>{name}</h3>
      </div>
      <div>
        <input
          className="input"
          type="text"
          placeholder="time"
          value={exercise.timeInMinutes}
          onChange={(e) => setTimeInMinutes(e.target.value)}
        />
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
