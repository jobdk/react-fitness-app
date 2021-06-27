import Foods from "./Foods/Foods";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as foodActions from "../../../store/actions/food-actions";

const FoodsDb = (props) => {
  const onDelete = (id) => {
    props.deleteFood(id);
  };

  let foods = null;
  if (props.foods) {
    let foods = props.foods;
    return (
      <div>
        <Foods foods={foods} onDelete={onDelete} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error Http Request</h1>
      </div>
    );
  }
};

const mapActionToProps = (dispatch) => {
  return {
    deleteFood: (foodId) => {
      dispatch(foodActions.deleteFood(foodId));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    foods: state.reducer.foods,
  };
};
export default connect(mapStateToProps, mapActionToProps)(FoodsDb);
