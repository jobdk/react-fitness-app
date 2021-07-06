import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore, connect, useSelector } from "react-redux";
import * as profileActions from "../../../../../../store/actions/profile-actions";

const EditProfile = (props) => {
  let { id } = useParams();
  const store = useStore();

  const [profileId, setProfileId] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [userId, setUserId] = useState("");

  const [profile, setProfile] = useState("");
  const isSuccessfullyEdited = useSelector(
    (state) => state.profileReducer.putProfileMessage
  );
  const [bufferName, setBufferName] = useState();
  useEffect(() => {
    const profilesFromState = store.getState().profileReducer.profiles;
    for (let i = 0; i < profilesFromState.length; i++) {
      if (profilesFromState[i]._id === id) {
        setProfile(profilesFromState[i]);
        setProfileId(id);
        setName(profile.name);
        setAge(profile.age);
        setHeight(profile.height);
        setWeight(profile.weight);
        setSex(profile.sex);
        setUserId(profile.userId);

        // setProfile(profilesFromState[i]);
      }
    }
  }, [profile, store]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !age & !height & !weight & !sex) {
      alert("please add data.");
      return;
    }
    setBufferName(name);
    const editedProfile = {
      profileId: profileId,
      name: name,
      age: age,
      height: height,
      weight: weight,
      sex: sex,
      userId: userId,
    };

    props.putProfile(editedProfile);
  };

  return (
    <div>
      {isSuccessfullyEdited ===
      "Request failed with status code 422 " + bufferName ? (
        <div>
          <h1>Could not be edited.</h1>
        </div>
      ) : null}
      {isSuccessfullyEdited === "edited profile " + bufferName ? (
        <div>
          <h1>edited profile</h1>
        </div>
      ) : null}
      <form className="login-signup-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>
            <b>name</b>
          </label>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <b>age</b>
          </label>
          <input
            type="text"
            placeholder="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <b>height</b>
          </label>
          <input
            type="text"
            placeholder="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <b>weight</b>
          </label>
          <input
            type="text"
            placeholder="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <b>sex</b>
          </label>
          <select
            name="sex"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option value="0">male</option>
            <option value="1">female</option>
          </select>
        </div>
        <input
          type="submit"
          value="Save"
          className="btn-submit btn-submit-left"
        />
      </form>{" "}
    </div>
  );
};
const mapActionToProps = (dispatch) => {
  return {
    putProfile: (profile) => {
      dispatch(profileActions.putProfile(profile));
    },
  };
};

export default connect(null, mapActionToProps)(EditProfile);
