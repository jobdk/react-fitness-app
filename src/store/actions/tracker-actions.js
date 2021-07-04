import axios from "../../axios-url";

export const STORE_DAY_SUCCESS = "STORE_DAY_SUCCESS";
export const STORE_DAY_FAILED = "STORE_DAY_FAILED";
export const STORE_DAYS_SUCCESS = "STORE_DAYS_SUCCESS";
export const STORE_DAYS_FAILED = "STORE_DAYS_FAILED";
export const DELETE_DAY_SUCCESS = "DELETE_DAY_SUCCESS";
export const DELETE_DAY_FAILED = "DELETE_DAY_FAILED";
export const CREATE_DAY_SUCCESS = "CREATE_DAY_SUCCESS";
export const CREATE_DAY_FAILED = "CREATE_DAY_FAILED";
export const EDIT_DAY_SUCCESS = "EDIT_DAY_SUCCESS";
export const EDIT_DAY_FAILED = "EDIT_DAY_FAILED";

const getDaySuccess = (getDayResponse) => {
  return { type: STORE_DAY_SUCCESS, payload: { getDayResponse } };
};

const getDayFailed = (getDayResponse) => {
  return { type: STORE_DAY_FAILED, payload: { getDayResponse } };
};

export const getDay = (profileId, date) => {
  const path = profileId + "/" + date;
  return (dispatch) => {
    axios
      .get("/fitness/day/" + path, { withCredentials: true })
      .then((response) => {
        dispatch(getDaySuccess(response.data));
      })
      .catch((error) => {
        console.log(error.response.data);
        dispatch(getDayFailed(error.response.data));
      });
  };
};

const getDaysSuccess = (getDaysResponse) => {
  return { type: STORE_DAYS_SUCCESS, payload: { getDaysResponse } };
};

const getDaysFailed = (getDaysResponse) => {
  return { type: STORE_DAYS_FAILED, payload: { getDaysResponse } };
};

export const getDays = (profileId) => {
  return (dispatch) => {
    axios
      .get("/fitness/days/" + profileId, { withCredentials: true })
      .then((response) => {
        dispatch(getDaysSuccess(response.data));
      })
      .catch((error) => {
        alert(error.response.data);
        dispatch(getDaysFailed(error.response.data));
      });
  };
};

const deleteDaySuccess = (deleteDayResponse) => {
  return { type: DELETE_DAY_SUCCESS, payload: { deleteDayResponse } };
};

const deleteDayFailed = (deleteDayResponse) => {
  return { type: DELETE_DAY_FAILED, payload: { deleteDayResponse } };
};

export const deleteDay = (date) => {
  return (dispatch) => {
    axios
      .delete("/fitness/day/:" + date, { withCredentials: true })
      .then((response) => {
        if (
          response.data.msg === "Deleting all days for this profile went wrong!"
        ) {
          alert(response.data.msg);
          dispatch(deleteDayFailed(response.data.msg));
          return;
        }
        dispatch(deleteDaySuccess(response.data));
      })
      .catch((error) => {
        dispatch(deleteDayFailed(error.data));
        alert(error.response.data);
      });
  };
};

const postDaySuccess = (createDayResponse) => {
  return { type: CREATE_DAY_SUCCESS, payload: { createDayResponse } };
};

const postDayFailed = (createDayResponse) => {
  return { type: CREATE_DAY_FAILED, payload: { createDayResponse } };
};

export const postDay = (day) => {
  return (dispatch) => {
    axios
      .post("/fitness/day/", day, { withCredentials: true })
      .then((response) => {
        console.log(response);
        dispatch(postDaySuccess(response.data));
      })
      .catch((error) => {
        dispatch(postDayFailed(error.response.data));
        alert(error.response.data);
      });
  };
};

const putDaySuccess = (editDayResponse) => {
  return { type: EDIT_DAY_SUCCESS, payload: { editDayResponse } };
};

const putDayFailed = (editDayResponse) => {
  return { type: EDIT_DAY_FAILED, payload: { editDayResponse } };
};

export const putDay = (day) => {
  return (dispatch) => {
    axios
      .put("/fitness/day/", day, { withCredentials: true })
      .then((response) => {
        console.log(response);
        dispatch(putDaySuccess(response.data));
      })
      .catch((error) => {
        dispatch(putDayFailed(error.response.data));
        alert(error.response.data);
      });
  };
};
