import axios from "../../axios-url";

// export const STORE_PHOTOS = "STOREPHOTOS";
// get

export const STORE_EXERCISES = "STOREEXERCISES";
export const POST_EXERCISE_SUCCESS = "POST_EXERCISE_SUCCESS";
export const POST_EXERCISE_FAILED = "POST_EXERCISE_FAILED";
export const PUT_EXERCISE_FAILED = "PUT_EXERCISE_FAILED";
export const PUT_EXERCISE_SUCCESS = "PUT_EXERCISE_SUCCESS";

const storeExercises = (exercises) => {
  return {
    type: STORE_EXERCISES,
    payload: exercises,
  };
};

export const getExercises = () => {
  return (dispatch) => {
    axios
      .get("/fitness/exercises/")
      .then((response) => {
        dispatch(storeExercises(response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const deleteExercise = (exerciseId) => {
  return (dispatch) => {
    axios
      .delete("/fitness/exercise/" + exerciseId, { withCredentials: true })
      .then((response) => {
        // console.log(foodId);
        // dispatch(storeFoods(foods));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

const postExerciseSuccess = (postExerciseSuccessMessage, name) => {
  return {
    type: POST_EXERCISE_SUCCESS,
    payload: postExerciseSuccessMessage + " " + name,
  };
};

const postExerciseFailed = (postExerciseFailedMessage, name) => {
  return {
    type: POST_EXERCISE_FAILED,
    payload: postExerciseFailedMessage + " " + name,
  };
};

export const postExercise = (exercise) => {
  return (dispatch) => {
    axios
      .post("/fitness/exercise/", exercise, { withCredentials: true })
      .then((response) => {
        dispatch(postExerciseSuccess(response.data, exercise.name));
      })
      .catch((error) => {
        dispatch(postExerciseFailed(error.message, exercise.name));
      });
  };
};

const putExerciseSuccess = (putExerciseSuccessMessage, name) => {
  return {
    type: PUT_EXERCISE_SUCCESS,
    payload: putExerciseSuccessMessage + " " + name,
  };
};

const putExerciseFailed = (putExerciseFailedMessage, name) => {
  return {
    type: PUT_EXERCISE_FAILED,
    payload: putExerciseFailedMessage + " " + name,
  };
};

export const putExercise = (exercise) => {
  return (dispatch) => {
    axios
      .put("/fitness/exercise/", exercise, { withCredentials: true })
      .then((response) => {
        dispatch(putExerciseSuccess(response.data, exercise.name));
      })
      .catch((error) => {
        dispatch(putExerciseFailed(error.message, exercise.name));
      });
  };
};
