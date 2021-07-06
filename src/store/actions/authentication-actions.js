import axios from "../../axios-url";

export const FAILED_LOGOUT = "FAILED_LOGOUT";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const FAILED_SIGN_UP = "FAILED_SIGN_UP";
export const SUCCESS_SIGN_UP = "SUCCESS_SIGN_UP";
export const FAILED_LOGIN = "FAILED_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";

const loginSuccess = (loginResponse) => {
  return { type: SUCCESS_LOGIN, payload: { loginResponse } };
};
const loginFailed = (loginResponse) => {
  return {
    type: FAILED_LOGIN,
    payload: {
      loginResponse,
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
        dispatch(loginFailed(error.message));
      });
  };
};

const logoutSuccess = (logoutResponse) => {
  return {
    type: SUCCESS_LOGOUT,
    payload: {
      logoutResponse,
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

const signUpSuccess = (signUpResponse) => {
  return {
    type: SUCCESS_SIGN_UP,
    payload: {
      signUpResponse,
    },
  };
};

const signUpFailed = (signUpResponse) => {
  return {
    type: FAILED_SIGN_UP,
    payload: {
      signUpResponse,
    },
  };
};

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post("/signup", user, { withCredentials: true })
      .then((response) => {
        dispatch(signUpSuccess(response.data));
      })
      .catch((error) => {
        alert(error);
        dispatch(signUpFailed(error.message));
      });
  };
};
