import React from "react";
import { useParams } from "react-router";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import FoodsDb from "../FoodsDb/FoodsDb";
import ExercisesDb from "../ExercisesDb/ExercisesDb";
import * as trackerActions from "../../../store/actions/tracker-actions";
import MyDay from "./MyDay/MyDay";
import { useDispatch, useSelector } from "react-redux";
import {
  calcNetCalories,
  calcCaloriesEaten,
  calcCaloriesBurned,
  calcCalorieDeficit,
  calcMacros,
} from "../../../utils/FunctionUtils";

const Tracker = () => {
  let profile;
  // url param for profile id
  let { id } = useParams();
  // store
  const isLoading = useSelector((state) => state.trackerReducer.getDayLoading);
  const currentDayFromState = useSelector(
    (state) => state.trackerReducer.currentDay
  );
  const profilesFromState = useSelector(
    (state) => state.profileReducer.profiles
  );
  const foodsFromState = useSelector((state) => state.foodReducer.foods);
  const exercisesFromState = useSelector(
    (state) => state.exerciseReducer.exercises
  );
  const dispatch = useDispatch();
  // day
  const [currentDate, setCurrentDate] = useState(new Date());
  // macros
  const [totalCaloriesToEat, setTotalCaloriesToEat] = useState(0);
  const [caloriesEaten, setCaloriesEaten] = useState(0);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  const [calorieDeficit, setCalorieDeficit] = useState(0);
  const [goalCarbs, setGoalCarbs] = useState(0);
  const [consumedCarbs, setConsumedCarbs] = useState(0);
  const [goalProteins, setGoalProteins] = useState(0);
  const [consumedProteins, setConsumedProteins] = useState(0);
  const [goalFats, setGoalFats] = useState(0);
  const [consumedFats, setConsumedFats] = useState(0);

  const [currentDayBuffer, setCurrentDayBuffer] = useState({
    date: Math.floor(currentDate.getTime() / 1000),
    food: [],
    exercise: [],
    profileId: id,
  });
  useEffect(() => {
    formatDateTime();
    getDayFromBackend();
    retrieveProfileInformation();
  }, [currentDate, currentDayBuffer.date]);

  const getDayFromBackend = () => {
    dispatch(
      trackerActions.getDay(id, Math.floor(currentDate.getTime() / 1000))
    );
  };

  const retrieveProfileInformation = () => {
    profile = profilesFromState.filter((profile) => profile._id === id);
    setTotalCaloriesToEat(calcNetCalories(profile[0]));
    setCaloriesEaten(calcCaloriesEaten(currentDayBuffer.food, foodsFromState));
    setCaloriesBurned(
      calcCaloriesBurned(currentDayBuffer.exercise, exercisesFromState)
    );
    setCalorieDeficit(
      calcCalorieDeficit(caloriesBurned, totalCaloriesToEat, caloriesEaten)
    );
    setConsumedCarbs(
      calcMacros("carbs", currentDayBuffer.food, foodsFromState)
    );
    setGoalCarbs((totalCaloriesToEat / 2 / 4).toFixed(1));
    setConsumedFats(calcMacros("fats", currentDayBuffer.food, foodsFromState));
    setGoalFats(((totalCaloriesToEat * 0.3) / 9).toFixed(1));
    setConsumedProteins(
      calcMacros("proteins", currentDayBuffer.food, foodsFromState)
    );
    setGoalProteins((0.793664791 * profile[0].weight).toFixed(1));
  };

  const formatDateTime = () => {
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);
  };

  const mapStoredDay = (storedDay) => {
    return {
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

  // trigger useeffect
  const onSave = () => {
    if (currentDayFromState) {
      if (currentDayFromState.getDayResponse[0]) {
        dispatch(trackerActions.putDay(currentDayBuffer));
      } else {
        dispatch(trackerActions.postDay(currentDayBuffer));
        console.log(currentDate);
      }
    }
  };

  // here
  const onChangeFoodAmount = (food, amount) => {
    let buffer = { ...currentDayBuffer };
    for (let i = 0; i < buffer.food.length; i++) {
      if (buffer.food[i].foodId === food.foodId) {
        buffer.food[i].amount = amount;
      }
    }
    setCurrentDayBuffer(buffer);
    setMacros();
  };

  const setMacros = () => {
    profile = profilesFromState.filter((profile) => profile._id === id);
    setCaloriesEaten(calcCaloriesEaten(currentDayBuffer.food, foodsFromState));
    setCaloriesBurned(
      calcCaloriesBurned(currentDayBuffer.exercise, exercisesFromState)
    );
    setCalorieDeficit(
      calcCalorieDeficit(caloriesBurned, totalCaloriesToEat, caloriesEaten)
    );
    setConsumedCarbs(
      calcMacros("carbs", currentDayBuffer.food, foodsFromState)
    );
    setGoalCarbs((totalCaloriesToEat / 2 / 4).toFixed(1));
    setConsumedFats(calcMacros("fats", currentDayBuffer.food, foodsFromState));
    setGoalFats(((totalCaloriesToEat * 0.3) / 9).toFixed(1));
    setConsumedProteins(
      calcMacros("proteins", currentDayBuffer.food, foodsFromState)
    );
    setGoalProteins((0.793664791 * profile[0].weight).toFixed(1));
  };

  const onChangeExerciseAmount = (exercise, timeInMinutes) => {
    let buffer = { ...currentDayBuffer };
    for (let i = 0; i < buffer.exercise.length; i++) {
      if (buffer.exercise[i].exerciseId === exercise.exerciseId) {
        buffer.exercise[i].timeInMinutes = timeInMinutes;
      }
    }
    setCurrentDayBuffer(buffer);
    setMacros();
  };

  return isLoading ? (
    <div>loading</div>
  ) : (
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
        onChangeFoodAmount={onChangeFoodAmount}
        onChangeExerciseAmount={onChangeExerciseAmount}
        currentDayFromState={currentDayFromState}
        mapStoredDay={mapStoredDay}
        setCurrentDayBuffer={setCurrentDayBuffer}
        currentDate={currentDate}
        id={id}
      />
      <h4>current calories</h4>
      <div>
        you have eaten <b>{caloriesEaten}</b> of your{" "}
        <b>{totalCaloriesToEat}</b> calories
      </div>
      <div>
        you have burned <b>{caloriesBurned}</b> calories
      </div>
      <div>
        you can eat <b>{calorieDeficit}</b>
      </div>
      <div>
        {consumedCarbs}/{goalCarbs} carbs | {consumedProteins}/{goalProteins}{" "}
        protein | {consumedFats}/{goalFats} fats
      </div>
      <button onClick={onSave} className="btn-submit">
        save day
      </button>
      <h4>add a food or exercise</h4>
      <h4>food</h4>
      <FoodsDb isTracker={true} onAdd={onAddFood} />
      <h4>exercise</h4>
      <ExercisesDb isTracker={true} onAdd={onAddExercise} />
    </div>
  );
};

export default Tracker;
