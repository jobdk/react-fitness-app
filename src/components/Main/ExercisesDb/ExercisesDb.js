import Exercises from "./Exercises/Exercises";
import { connect } from "react-redux";
import * as exerciseAction from "../../../store/actions/exercise-actions";
import { useState, useEffect } from "react";

const ExercisesDb = (props) => {
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    props.getExercises();
  }, [deleted]);

  const onDelete = (id) => {
    setDeleted(id);
    props.deleteExercise(id);
  };

  if (props.exercises) {
    let exercises = props.exercises;
    return (
      <div>
        <Exercises
          exercises={exercises}
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
    deleteExercise: (exerciseId) => {
      dispatch(exerciseAction.deleteExercise(exerciseId));
    },
    getExercises: () => {
      dispatch(exerciseAction.getExercises());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    exercises: state.exerciseReducer.exercises,
  };
};

export default connect(mapStateToProps, mapActionToProps)(ExercisesDb);
