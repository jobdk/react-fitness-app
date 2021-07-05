import {
  FAILED_LOGOUT,
  SUCCESS_LOGOUT,
  FAILED_SIGN_UP,
  SUCCESS_SIGN_UP,
  FAILED_LOGIN,
  SUCCESS_LOGIN,
} from "../actions/authentication-actions";

const initialState = {
  expiration: +window.localStorage.getItem("expiration"),
  signUpSuccess: null,
  signUpMessage: null,
  loginSuccess: null,
  loginMessage: null,
  logoutMessage: null,
};

const signUp = (state, action) => {
  const result = new Date(new Date());
  result.setDate(result.getDate() + 7);
  const expiration = result.getTime();
  window.localStorage.setItem("expiration", `${expiration}`);
  return updateState(state, {
    expiration,
    signUpSuccess: true,
    signUpMessage: action.payload.signUpMessage,
  });
};

const login = (state, action) => {
  const expiration = addDays(new Date(), 7).getTime();
  window.localStorage.setItem("expiration", `${expiration}`);
  return updateState(state, {
    expiration,
    loginSuccess: true,
    loginMessage: action.payload.loginMessage,
  });
};

const loginFailed = (state, action) =>
  updateState(state, {
    signInSuccess: false,
    signInMessage: action.payload.signInMessage,
  });

const logout = (state, action) => {
  window.localStorage.removeItem("expiration");
  return updateState(state, {
    expiration: null,
    signUpSuccess: false,
    signInSuccess: false,
    signInMessage: null,
    signUpMessage: null,
    signOutMessage: action.payload.signOutMessage,
  });
};

const logoutFailed = (state) =>
  updateState(state, {
    signOutMessage: "Abmeldung fehlgeschlagen",
  });

const signUpFailed = (state, action) =>
  updateState(state, {
    signUpSuccess: false,
    signUpMessage: action.payload.signUpMessage,
  });

export const addDays = (date, days) => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

const updateState = (state, payload) => {
  return {
    ...state,
    ...payload,
  };
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_SIGN_UP:
      return signUp(state, action);
    case FAILED_SIGN_UP:
      return signUpFailed(state, action);
    case SUCCESS_LOGIN:
      return login(state, action);
    case FAILED_LOGIN:
      return loginFailed(state, action);
    case SUCCESS_LOGOUT:
      return logout(state, action);
    case FAILED_LOGOUT:
      return logoutFailed(state);
    default:
      return state;
  }
};

export default authenticationReducer;
