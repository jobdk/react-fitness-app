import {
  STORE_PROFILES,
  POST_PROFILE_SUCCESS,
  POST_PROFILE_FAILED,
  PUT_PROFILE_SUCCESS,
  PUT_PROFILE_FAILED,
} from "../actions/profile-actions";

const initialState = {
  profiles: [],
  postProfileMessage: null,
  putProfileMessage: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case STORE_PROFILES:
      return { ...state, profiles: action.payload };
    case POST_PROFILE_SUCCESS:
      return { ...state, postProfileMessage: action.payload };
    case POST_PROFILE_FAILED:
      return { ...state, postProfileMessage: action.payload };
    case PUT_PROFILE_SUCCESS:
      return { ...state, putProfileMessage: action.payload };
    case PUT_PROFILE_FAILED:
      return { ...state, putProfileMessage: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
