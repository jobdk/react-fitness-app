import axios from "../../axios-url";

export const getSelectedDay = (profileId, date) => {
  return (dispatch) => {
    axios
      .delete("/fitness/day/" + profileId + date, { withCredentials: true })
      .then((response) => {
        // dispatch(storeFoods(foods));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

// post
export const STORE_FOOD = "STOREFOOD";

const storeFood = (food) => {
  return {
    type: STORE_FOOD,
    payload: food,
  };
};

export const postFood = (food) => {
  return (dispatch) => {
    axios
      .post("/fitness/food/", food, { withCredentials: true })
      .then((response) => {
        // dispatch(storeFood(response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

export const putFood = (food) => {
  return (dispatch) => {
    axios
      .put("/fitness/food/", food, { withCredentials: true })
      .then((response) => {
        //dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};
