const initialState = {
  exercises: [],
};

const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STOREEXERCISES":
      return { ...state, exercises: action.payload };
    default:
      return state;
  }
};
export default exerciseReducer;
