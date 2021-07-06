import Foods from "./Foods/Foods";
import { connect } from "react-redux";
import * as foodActions from "../../../store/actions/food-actions";
import { useState, useEffect } from "react";

const FoodsDb = (props) => {
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    props.getFoods();
  }, [deleted]);

  const onDelete = (id) => {
    props.deleteFood(id);
    setDeleted(id);
  };

  if (props.foods) {
    let foods = props.foods;
    return (
      <div>
        <Foods
          foods={foods}
          onDelete={onDelete}
          isTracker={props.isTracker}
          onAdd={props.onAdd}
        />
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
    getFoods: () => {
      dispatch(foodActions.getFoods());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    foods: state.foodReducer.foods,
  };
};
export default connect(mapStateToProps, mapActionToProps)(FoodsDb);
