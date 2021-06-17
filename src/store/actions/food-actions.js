import axios from "../../axios-url";

export const STORE_FOODS = "STOREFOODS";

const storeFoods = (foods) => {
  return {
    type: STORE_FOODS,
    payload: foods,
  };
};

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

export const deleteFood = (foodId) => {
  return (dispatch) => {
    axios
      .delete("/fitness/food/" + foodId, { withCredentials: true })
      .then((response) => {
        // console.log(foodId);
        // dispatch(storeFoods(foods));
      })
      .catch((error) => {
        console.log(error);
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
        console.log(response);
        //dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const putFood = (food) => {
  return (dispatch) => {
    axios
      .put("/fitness/food/", food, { withCredentials: true })
      .then((response) => {
        console.log(response);
        //dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
