const initialState = {
  profiles: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STORE_PROFILES":
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
