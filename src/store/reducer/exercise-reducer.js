import {
  STORE_EXERCISES,
  POST_EXERCISE_SUCCESS,
  POST_EXERCISE_FAILED,
  PUT_EXERCISE_FAILED,
  PUT_EXERCISE_SUCCESS,
} from "../actions/exercise-actions";

const initialState = {
  exercises: [],
  postExerciseMessage: null,
  putExerciseMessage: null,
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_EXERCISES:
      return { ...state, exercises: action.payload };
    case POST_EXERCISE_SUCCESS:
      return { ...state, postExerciseMessage: action.payload };
    case POST_EXERCISE_FAILED:
      return { ...state, postExerciseMessage: action.payload };
    case PUT_EXERCISE_FAILED:
      return { ...state, putExerciseMessage: action.payload };
    case PUT_EXERCISE_SUCCESS:
      return { ...state, putExerciseMessage: action.payload };
    default:
      return state;
  }
};
export default exerciseReducer;
