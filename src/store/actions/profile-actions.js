import axios from "../../axios-url";

export const STORE_PROFILES = "STOREPROFILES";

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
        checkErrorMessage(error);
      });
  };
};

export const deleteProfile = (profileId) => {
  return (dispatch) => {
    axios
      .delete("/fitness/profile/:" + profileId, { withCredentials: true })
      .then((response) => {
        // console.log(response);
        // console.log(response.data);
      })
      .catch((error) => {
        checkErrorMessage(error);
      });
  };
};

const checkErrorMessage = (error) => {
  if (error.message == "Request failed with status code 401") {
    alert("you need to login");
  } else alert("unknown error occurred");
};
