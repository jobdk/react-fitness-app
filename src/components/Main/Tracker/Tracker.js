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
  const store = useStore();
  let profile;
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentDayBuffer, setCurrentDayBuffer] = useState();
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    formatDateTime();
    getDay();
    retrieveProfileFromUrl();
    checkCurrentDay();

    // console.log(currentDayBuffer);
  }, []);

  const checkCurrentDay = () => {
    if (
      store.getState().trackerReducer.currentDay.getDayResponse.length > 0
      // & (store.getState().trackerReducer.currentDay === null)
    ) {
      setCurrentDayBuffer(
        store.getState().trackerReducer.currentDay.getDayResponse[0]
      );
      console.log("day found");
      console.log(store.getState().trackerReducer.currentDay.getDayResponse[0]);
    } else {
      let newDay = {
        date: Math.floor(selectedDate.getTime() / 1000),
        food: [],
        exercise: [],
        profileId: "60617f5a853a921edccb8fbf",
      };
      setCurrentDayBuffer(newDay);
      console.log("day not found");
      console.log(currentDayBuffer);
    }
  };

  // sets time to 00:00:00
  const formatDateTime = () => {
    selectedDate.setHours(0);
    selectedDate.setMinutes(0);
    selectedDate.setSeconds(0);
  };

  const handleDayChange = () => {
    getDay(id);
    checkCurrentDay();
    console.log(Math.floor(selectedDate.getTime() / 1000));
    console.log(store.getState().trackerReducer.currentDay);
  };

  const getDay = () => {
    props.getDay(id, Math.floor(selectedDate.getTime() / 1000));
  };
  const onAddFood = (food) => {
    console.log(food);
  };

  const onAddExercise = (exercise) => {
    console.log(exercise);
  };

  const retrieveProfileFromUrl = () => {
    const profilesFromState = store.getState().profileReducer.profiles;
    for (let i = 0; i < profilesFromState.length; i++) {
      if (profilesFromState[i]._id === id) {
        profile = {
          profileId: id,
          name: profilesFromState[i].name,
          age: profilesFromState[i].age,
          height: profilesFromState[i].height,
          weight: profilesFromState[i].weight,
          sex: profilesFromState[i].sex,
          userId: profilesFromState[i].userId,
        };
      }
    }
  };
  return (
    <div>
      <div>
        <Calendar
          onChange={(e) => {
            setSelectedDate(e);
            handleDayChange();
            getDay(id);
          }}
          value={selectedDate}
        />
      </div>
      <input value={selectedDate} />
      <MyDay
        selectedDate={selectedDate.toString()}
        currentDay={currentDayBuffer}
      />
      {/* <h3>add a food or exercise</h3>
      <h3>food</h3>
      <FoodsDb isTracker={true} onAdd={onAddFood} />
      <h3>exercise</h3>
      <ExercisesDb isTracker={true} onAdd={onAddExercise} /> */}
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
