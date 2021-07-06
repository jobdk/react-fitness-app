import axios from "../../axios-url";

export const STORE_FOODS = "STOREFOODS";
export const POST_FOOD_SUCCESS = "POST_FOOD_SUCCESS";
export const POST_FOOD_FAILED = "POST_FOOD_FAILED";
export const PUT_FOOD_SUCCESS = "PUT_FOOD_SUCCESS";
export const PUT_FOOD_FAILED = "PUT_FOOD_FAILED";

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
        alert(error.message);
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
        alert(error.message);
      });
  };
};

// post
export const STORE_FOOD = "STOREFOOD";

const postFoodSuccess = (postFoodSuccessMessage, name) => {
  return {
    type: POST_FOOD_SUCCESS,
    payload: postFoodSuccessMessage + " " + name,
  };
};

const postFoodFailed = (postFoodFailedMessage, name) => {
  return {
    type: POST_FOOD_FAILED,
    payload: postFoodFailedMessage + " " + name,
  };
};

export const postFood = (food) => {
  return (dispatch) => {
    axios
      .post("/fitness/food/", food, { withCredentials: true })
      .then((response) => {
        console.log(response);
        dispatch(postFoodSuccess(response.data, food.name));
      })
      .catch((error) => {
        // alert(error.message);
        dispatch(postFoodFailed(error.message, food.name));
      });
  };
};

const putFoodSuccess = (putFoodSuccessMessage, name) => {
  return {
    type: PUT_FOOD_SUCCESS,
    payload: putFoodSuccessMessage + " " + name,
  };
};

const putFoodFailed = (putFoodFailedMessage, name) => {
  return {
    type: PUT_FOOD_FAILED,
    payload: putFoodFailedMessage + " " + name,
  };
};

export const putFood = (food) => {
  return (dispatch) => {
    axios
      .put("/fitness/food/", food, { withCredentials: true })
      .then((response) => {
        console.log(response);
        dispatch(putFoodSuccess(response.data, food.name));
      })
      .catch((error) => {
        // alert(error.message);
        dispatch(putFoodFailed(error.message, food.name));
      });
  };
};
