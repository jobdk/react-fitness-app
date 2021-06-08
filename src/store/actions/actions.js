import axios from "../../axios-url";

// export const STORE_PHOTOS = "STOREPHOTOS";
export const STORE_FOODS = "STOREFOODS";
export const STORE_EXERCISES = "STOREEXERCISES";

const storeFoods = (foods) => {
  return {
    type: STORE_FOODS,
    payload: foods,
  };
};

// http://localhost:3015/fitness/food/
export const getFoods = () => {
  return (dispatch) => {
    axios
      .get("fitness/food/")
      .then((response) => {
        dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

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
        console.log(error);
      });
  };
};

export const deleteFoods = (foods) => {
  return (dispatch) => {
    dispatch(storeFoods(foods));
  };
};
