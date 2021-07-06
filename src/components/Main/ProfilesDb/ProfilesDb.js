import Profiles from "./Profiles/Profiles";
import { connect, useSelector } from "react-redux";
import * as profileActions from "../../../store/actions/profile-actions";
import { useState, useEffect } from "react";

const ProfilesDb = (props) => {
  const [deleted, setDeleted] = useState(0);

  useEffect(() => {
    props.getProfiles();
  }, [deleted]);

  const onDelete = (id) => {
    props.deleteProfile(id);
    setDeleted(id);
  };

  const hasExpiration = useSelector(
    (state) => state.authenticationReducer.expiration
  );

  if (props.profiles) {
    let profiles = props.profiles;
    return hasExpiration === 0 || hasExpiration === null ? (
      <div>No user is logged in</div>
    ) : (
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
