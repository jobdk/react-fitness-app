import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import FoodsDb from "../FoodsDb/FoodsDb";
import ExercisesDb from "../ExercisesDb/ExercisesDb";
import MyDay from "./MyDay/MyDay";

const Tracker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date(2021, 8, 1));

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
      <FoodsDb />
      <h3>add a exercise</h3>
      <ExercisesDb />
    </div>
  );
};

export default Tracker;
