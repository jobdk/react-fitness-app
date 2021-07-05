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
        alert(error.response.data);
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
        alert(error.response.data);
      });
  };
};

export const postProfile = (profile) => {
  return (dispatch) => {
    axios
      .post("/fitness/profile/", profile, { withCredentials: true })
      .then((response) => {
        console.log(response);
        //dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
};

export const putProfile = (profile) => {
  return (dispatch) => {
    axios
      .put("/fitness/profile/", profile, { withCredentials: true })
      .then((response) => {
        console.log(response);
        //dispatch(storeProfiles(response.data));
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
};
