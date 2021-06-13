import Exercises from "./Exercises/Exercises";
import { connect } from "react-redux";
import React, { Component } from "react";
import * as actions from "../../../store/actions/actions";

export class ExercisesDb extends Component {
  onDelete = (id) => {
    alert(id);
  };

  onEdit = (id) => {
    alert(id);
  };

  render() {
    let exercises = null;
    if (this.props.exercises) {
      exercises = this.props.exercises;
      return (
        <div>
          <Exercises exercises={exercises} onDelete={this.onDelete} />
        </div>
      );
    } else {
      return (
        <div>
          <h1>Error Http Request</h1>
        </div>
      );
    }
  }
}

// const mapActionToProps = (dispatch) => {
//   return {
//     deleteFoods: (foods) => {
//       dispatch(actions.deleteFoods(foods));
//     },
//   };
// };

const mapStateToProps = (state) => {
  return {
    exercises: state.exercises,
  };
};

export default connect(mapStateToProps, null)(ExercisesDb);
