const initialState = {
  foods: [],
  exercises: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "STOREFOODS") {
    return { ...state, foods: action.payload };
  } else if (action.type === "STOREEXERCISES") {
    return { ...state, exercises: action.payload };
  }
  return state;
};
export default reducer;
