import React from "react";
import { useParams } from "react-router";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import FoodsDb from "../FoodsDb/FoodsDb";
import ExercisesDb from "../ExercisesDb/ExercisesDb";
import * as trackerActions from "../../../store/actions/tracker-actions";
import MyDay from "./MyDay/MyDay";
import { useStore, connect } from "react-redux";

const Tracker = (props) => {
  let { id } = useParams();
  const [currentDayBuffer, setCurrentDayBuffer] = useState({
    // date: Math.floor(selectedDate.getTime() / 1000),
    date: "1624831200",
    food: [
      {
        foodId: "60bfc5bc9a0c7324476a58b1",
        amount: 500,
      },
    ],
    exercise: [
      {
        exerciseId: "60c0d75ba8d36f27cee4c9e3",
        timeInMinutes: 120,
      },
    ],
    profileId: id,
  });

  const onAddFood = (food) => {
    let buffer = currentDayBuffer;
    buffer.food[buffer.food.length] = { foodId: food._id, amount: 0 };
    if (buffer.food.length > currentDayBuffer.food.length) {
      setCurrentDayBuffer(buffer);
    }
    console.log(currentDayBuffer);
  };

  const onAddExercise = (exercise) => {
    let buffer = currentDayBuffer;
    buffer.exercise[buffer.exercise.length] = {
      exerciseId: exercise._id,
      timeInMinutes: 0,
    };
    console.log(buffer);
    if (buffer.exercise.length > currentDayBuffer.exercise.length) {
      setCurrentDayBuffer(buffer);
    }
    console.log(currentDayBuffer);
  };

  return (
    <div>
      <MyDay
        selectedDate={currentDayBuffer.date}
        currentDay={currentDayBuffer}
      />
      <h3>add a food or exercise</h3>
      <h3>food</h3>
      <FoodsDb isTracker={true} onAdd={onAddFood} />
      <h3>exercise</h3>
      <ExercisesDb isTracker={true} onAdd={onAddExercise} />
    </div>
  );
};
const mapActionToProps = (dispatch) => {
  return {
    deleteDay: (dayId) => {
      dispatch(trackerActions.deleteDay(dayId));
    },
    getDay: (profileId, date) => {
      dispatch(trackerActions.getDay(profileId, date));
    },
    getDays: () => {
      dispatch(trackerActions.getDays());
    },
  };
};

export default connect(null, mapActionToProps)(Tracker);
