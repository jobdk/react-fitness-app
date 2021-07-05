import { useState } from "react";
import * as profileActions from "../../../../../../store/actions/profile-actions";
import { connect } from "react-redux";
import "../NewProfile/NewProfile.css";

const NewProfile = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState(0);
  const [userId, setUserId] = useState("");

  const [profile, setProfile] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !age & !height & !weight & !sex & !userId) {
      alert("please add data.");
      return;
    }

    const newProfile = {
      name: name,
      age: age,
      height: height,
      weight: weight,
      sex: sex,
      userId: userId,
    };

    props.postProfile(newProfile);

    setName("");
    setAge("");
    setHeight("");
    setWeight("");
    setSex("");
    setUserId("");
  };

  return (
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
          onChange={(e) => {
            console.log(e.target.value);
            setSex(e.target.value);
          }}
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
    </form>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    postProfile: (profile) => {
      dispatch(profileActions.postProfile(profile));
    },
  };
};

export default connect(null, mapActionToProps)(NewProfile);
