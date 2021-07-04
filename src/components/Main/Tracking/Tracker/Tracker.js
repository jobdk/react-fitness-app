import React from "react";
import { useParams } from "react-router";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import FoodsDb from "../FoodsDb/FoodsDb";
import ExercisesDb from "../ExercisesDb/ExercisesDb";
import * as trackerActions from "../../../store/actions/tracker-actions";
import MyDay from "./MyDay/MyDay";
import { useStore, connect, useDispatch, useSelector } from "react-redux";

const Tracker = ({ getDay, putDay, postDay }) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const store = useStore();
  const d = useSelector((state) => state.trackerReducer.currentDay);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentDayBuffer, setCurrentDayBuffer] = useState({
    // date: Math.floor(selectedDate.getTime() / 1000),
    date: Math.floor(currentDate.getTime() / 1000),
    food: [],
    exercise: [],
    profileId: id,
  });
  useEffect(() => {
    console.log(d);
    formatDateTime();
    getDayFromBackend();
    // console.log(currentDayBuffer.date);
    // retrieveProfileFromUrl();

    // console.log(currentDayBuffer);
  }, [currentDate, currentDayBuffer.date]);

  const getDayFromBackend = () => {
    dispatch(
      trackerActions.getDay(id, Math.floor(currentDate.getTime() / 1000))
    );
    // if (store.getState().trackerReducer.currentDay) {
    console.log(2);
    if (d.getDayResponse) {
      const mappedDay = mapStoredDay(d.getDayResponse[0]);
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
    // }
  };
  const formatDateTime = () => {
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
  };

  const mapStoredDay = (storedDay) => {
    return {
      // date: Math.floor(selectedDate.getTime() / 1000),
      dayId: storedDay._id,
      date: storedDay.date,
      food: storedDay.food,
      exercise: storedDay.exercise,
      profileId: id,
    };
  };

  const onAddFood = (food) => {
    let buffer = { ...currentDayBuffer };
    buffer.food[buffer.food.length] = { foodId: food._id, amount: 0 };
    setCurrentDayBuffer(buffer);
    console.log("added food");
    console.log(currentDayBuffer);
  };

  const onAddExercise = (exercise) => {
    let buffer = { ...currentDayBuffer };
    buffer.exercise[buffer.exercise.length] = {
      exerciseId: exercise._id,
      timeInMinutes: 0,
    };
    setCurrentDayBuffer(buffer);
    console.log("added exercise");
    console.log(currentDayBuffer);
  };

  const onDeleteFood = (food) => {
    let buffer = { ...currentDayBuffer };
    buffer.food = buffer.food.filter(
      (bufferFood) => bufferFood.foodId !== food.foodId
    );
    setCurrentDayBuffer(buffer);
  };

  const onDeleteExercise = (exercise) => {
    let buffer = { ...currentDayBuffer };
    buffer.exercise = buffer.exercise.filter(
      (bufferExercise) => bufferExercise.exerciseId !== exercise.exerciseId
    );
    setCurrentDayBuffer(buffer);
  };

  const onSave = () => {
    if (store.getState().trackerReducer.currentDay) {
      if (store.getState().trackerReducer.currentDay.getDayResponse[0]) {
        dispatch(trackerActions.putDay(currentDayBuffer));
      } else {
        dispatch(trackerActions.postDay(currentDayBuffer));
        console.log(currentDate);
      }
    }
  };
  return (
    <div>
      <Calendar
        onChange={(e) => {
          setCurrentDate(e);
        }}
        value={currentDate}
      />
      <MyDay
        selectedDate={currentDate}
        currentDay={currentDayBuffer}
        onDeleteFood={onDeleteFood}
        onDeleteExercise={onDeleteExercise}
      />
      <button onClick={onSave}>save day</button>
      <h4>add a food or exercise</h4>
      <h4>food</h4>
      <FoodsDb isTracker={true} onAdd={onAddFood} />
      <h4>exercise</h4>
      <ExercisesDb isTracker={true} onAdd={onAddExercise} />
    </div>
  );
};

export default Tracker;
