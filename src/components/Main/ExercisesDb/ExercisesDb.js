import Exercises from "./Exercises/Exercises";
import { connect } from "react-redux";
import * as exerciseAction from "../../../store/actions/exercise-actions";

const ExercisesDb = (props) => {
  const onDelete = (id) => {
    props.deleteExercise(id);
  };

  let exercises = null;
  if (props.exercises) {
    exercises = props.exercises;
    return (
      <div>
        <Exercises exercises={exercises} onDelete={onDelete} />
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
  };
};

const mapStateToProps = (state) => {
  return {
    exercises: state.reducer.exercises,
  };
};

export default connect(mapStateToProps, mapActionToProps)(ExercisesDb);
