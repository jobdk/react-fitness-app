const initialState = {
  foods: [],
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STOREFOODS":
      return { ...state, foods: action.payload };
    default:
      return state;
  }
};
export default foodReducer;
