import axios from "../../axios-url";

export const FAILED_LOGOUT = "FAILED_LOGOUT";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const FAILED_SIGN_UP = "FAILED_SIGN_UP";
export const SUCCESS_SIGN_UP = "SUCCESS_SIGN_UP";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";

const loginSuccess = (loginMessage) => {
  return { type: SUCCESS_LOGIN, payload: { loginMessage } };
};
const loginFailed = (signInMessage) => {
  return {
    type: FAILED_LOGIN,
    payload: {
      signInMessage,
    },
  };
};

export const login = (user) => {
  return (dispatch) => {
    axios
      .post("/login", user, { withCredentials: true })
      .then((response) => {
        dispatch(loginSuccess(response.data));
      })
      .catch((error) => {
        dispatch(loginFailed(error.response.data));
      });
  };
};

const logoutSuccess = (logoutMessage) => {
  return {
    type: SUCCESS_LOGOUT,
    payload: {
      logoutMessage,
    },
  };
};

export const logoutFailed = () => {
  return {
    type: FAILED_LOGOUT,
  };
};

export const logout = () => {
  return (dispatch) => {
    axios
      .post("/logout", null, { withCredentials: true })
      .then((response) => {
        dispatch(logoutSuccess(response.data));
      })
      .catch((error) => {
        dispatch(logoutFailed);
      });
  };
};

const signUpSuccess = (signUpMessage) => {
  return {
    type: SUCCESS_SIGN_UP,
    payload: {
      signUpMessage,
    },
  };
};

const signUpFailed = (signUpMessage) => {
  return {
    type: FAILED_SIGN_UP,
    payload: {
      signUpMessage,
    },
  };
};

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post("/signup", user, { withCredentials: true })
      .then((response) => {
        console.log(response);
        dispatch(signUpSuccess(response.data));
      })
      .catch((error) => {
        alert(error);
        dispatch(signUpFailed(error.response.data));
      });
  };
};
