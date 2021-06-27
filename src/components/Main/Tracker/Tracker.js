import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import FoodsDb from "../FoodsDb/FoodsDb";
import ExercisesDb from "../ExercisesDb/ExercisesDb";
import MyDay from "./MyDay/MyDay";

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2021, 8, 1));

  const onAddFood = (food) => {
    console.log(food);
  };

  const onAddExercise = (exercise) => {
    console.log(exercise);
  };

  return (
    <div>
      <div>
        <Calendar
          onChange={(e) => {
            setSelectedDate(e);
          }}
          value={selectedDate}
        />
      </div>
      <MyDay selectedDate={selectedDate} />
      <h3>add a food </h3>
      <FoodsDb isTracker={true} onAdd={onAddFood} />
      <h3>add a exercise</h3>
      <ExercisesDb isTracker={true} onAdd={onAddExercise} />
    </div>
  );
};

export default Tracker;
