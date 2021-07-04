import React from "react";
import PropTypes from "prop-types";
import MyDayFoods from "./MyDayFoods/MyDayFoods";

const MyDay = ({ selectedDate, currentDay }) => {
  const getSelectedDay = () => {
    console.log(selectedDate);
    console.log(currentDay.getDayResponse[0]);
  };

  // {selectedDate}

  return (
    <div>
      My Day
      <div>
        {currentDay.food > 0 ? (
          <MyDayFoods foods={currentDay.food} />
        ) : (
          "no food added"
        )}
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

MyDay.propTypes = {
  selectedDate: PropTypes.string,
};

export default MyDay;
