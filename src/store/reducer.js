const initialState = {
  foods: [],
  exercises: [],
  profiles: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === "STOREFOODS") {
    return { ...state, foods: action.payload };
  } else if (action.type === "STOREEXERCISES") {
    return { ...state, exercises: action.payload };
  } else if (action.type === "STOREPROFILES") {
    return { ...state, profiles: action.payload };
  }
  return state;
};
export default reducer;
