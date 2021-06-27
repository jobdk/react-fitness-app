import axios from "../../axios-url";

// export const STORE_PHOTOS = "STOREPHOTOS";
// get

export const STORE_EXERCISES = "STOREEXERCISES";

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
        alert(error.response.data);
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

export const postExercise = (exercise) => {
  return (dispatch) => {
    axios
      .post("/fitness/exercise/", exercise, { withCredentials: true })
      .then((response) => {
        console.log(response);
        //dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
};
