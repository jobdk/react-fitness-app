const initialState = {
  profiles: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "STOREPROFILES":
      return { ...state, profiles: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
