import Profiles from "./Profiles/Profiles";
import { connect } from "react-redux";
import * as profileActions from "../../../store/actions/profile-actions";
import { useEffect } from "react";

const ProfilesDb = (props) => {
  const onDelete = (id) => {
    props.deleteProfile(id);
  };

  useEffect(() => {
    props.getProfiles();
  }, []);

  if (props.profiles) {
    let profiles = props.profiles;
    return (
      <div>
        <Profiles profiles={profiles} onDelete={onDelete} />
      </div>
    );
  } else {
    return (
      <div>
        <h1>Error Http Request</h1>
      </div>
    );
  }
};

const mapActionToProps = (dispatch) => {
  return {
    deleteProfile: (foodId) => {
      dispatch(profileActions.deleteProfile(foodId));
    },
    getProfiles: () => {
      dispatch(profileActions.getProfiles());
    },
  };
};

const mapStateToProps = (state) => {
  return {
    profiles: state.profileReducer.profiles,
  };
};
export default connect(mapStateToProps, mapActionToProps)(ProfilesDb);
