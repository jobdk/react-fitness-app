const initialState = {
  currentDay: null,
  days: [],
};

const trackerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_DAY_SUCCESS":
      return { ...state, currentDay: action.payload };
    default:
      return state;
  }
};
export default trackerReducer;
