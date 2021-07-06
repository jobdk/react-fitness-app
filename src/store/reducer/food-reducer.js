import {
  STORE_FOODS,
  POST_FOOD_SUCCESS,
  POST_FOOD_FAILED,
  PUT_FOOD_SUCCESS,
  PUT_FOOD_FAILED,
} from "../actions/food-actions";

const initialState = {
  foods: [],
  postFoodMessage: null,
  putFoodMessage: null,
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_FOODS:
      return { ...state, foods: action.payload };
    case POST_FOOD_SUCCESS:
      return { ...state, postFoodMessage: action.payload };
    case POST_FOOD_FAILED:
      return { ...state, postFoodMessage: action.payload };
    case PUT_FOOD_SUCCESS:
      return { ...state, putFoodMessage: action.payload };
    case PUT_FOOD_FAILED:
      return { ...state, putFoodMessage: action.payload };
    default:
      return state;
  }
};
export default foodReducer;
