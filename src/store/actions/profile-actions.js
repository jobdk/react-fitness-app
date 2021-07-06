import axios from "../../axios-url";

export const STORE_PROFILES = "STORE_PROFILES";
export const POST_PROFILE_SUCCESS = "POST_PROFILE_SUCCESS";
export const POST_PROFILE_FAILED = "POST_PROFILE_FAILED";
export const PUT_PROFILE_SUCCESS = "PUT_PROFILE_SUCCESS";
export const PUT_PROFILE_FAILED = "PUT_PROFILE_FAILED";

const storeProfiles = (profiles) => {
  return {
    type: STORE_PROFILES,
    payload: profiles,
  };
};

export const getProfiles = () => {
  return (dispatch) => {
    axios
      .get("/fitness/profiles/", { withCredentials: true })
      .then((response) => {
        dispatch(storeProfiles(response.data));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};

export const deleteProfile = (profileId) => {
  return (dispatch) => {
    axios
      .delete("/fitness/profile/" + profileId, { withCredentials: true })
      .then((response) => {
        if (
          response.data.msg === "Deleting all days for this profile went wrong!"
        ) {
          alert(response.data.msg);
        }

        // console.log(response);
        // console.log(response.data);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
};

const postProfileSuccess = (postProfileSuccessMessage, name) => {
  return {
    type: POST_PROFILE_SUCCESS,
    payload: postProfileSuccessMessage + " " + name,
  };
};

const postProfileFailed = (postProfileFailedMessage, name) => {
  return {
    type: POST_PROFILE_FAILED,
    payload: postProfileFailedMessage + " " + name,
  };
};

export const postProfile = (profile) => {
  return (dispatch) => {
    axios
      .post("/fitness/profile/", profile, { withCredentials: true })
      .then((response) => {
        dispatch(postProfileSuccess(response.data, profile.name));
      })
      .catch((error) => {
        dispatch(postProfileFailed(error.message, profile.name));
      });
  };
};

const putProfileSuccess = (putProfileSuccessMessage, name) => {
  return {
    type: PUT_PROFILE_SUCCESS,
    payload: putProfileSuccessMessage + " " + name,
  };
};

const putProfileFailed = (putProfileFailedMessage, name) => {
  return {
    type: PUT_PROFILE_FAILED,
    payload: putProfileFailedMessage + " " + name,
  };
};

export const putProfile = (profile) => {
  return (dispatch) => {
    axios
      .put("/fitness/profile/", profile, { withCredentials: true })
      .then((response) => {
        dispatch(putProfileSuccess(response.data, profile.name));
      })
      .catch((error) => {
        dispatch(putProfileFailed(error.message, profile.name));
      });
  };
};
