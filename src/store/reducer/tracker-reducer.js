import {
  STORE_DAY_LOADING,
  STORE_DAY_SUCCESS,
  STORE_DAY_FAILED,
} from "../actions/tracker-actions";

const initialState = {
  getDayLoading: true,
  currentDay: [],
  error: "",
  days: [],
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_DAY_LOADING:
      return { ...state, getDayLoading: true };

    case STORE_DAY_SUCCESS:
      return { getDayLoading: false, currentDay: action.payload };
    case STORE_DAY_FAILED:
      return { getDayLoading: false, currentDay: [], error: action.payload };
    default:
      return state;
  }
};
export default trackerReducer;
