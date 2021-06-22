import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

const EditProfile = () => {
  let { id } = useParams();
  const store = useStore();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [sex, setSex] = useState("");
  const [userId, setUserId] = useState("");

  const [profile, setProfile] = useState("");

  useEffect(() => {
    for (let i = 0; i < store.getState().profiles.length; i++) {
      if (store.getState().profiles[i]._id === id) {
        setProfile(store.getState().profiles[i]);
        setName(profile.name);
        setAge(profile.age);
        setHeight(profile.height);
        setWeight(profile.weight);
        setSex(profile.sex);
        setUserId(profile.userId);

        // setProfile(store.getState().profiles[i]);
      }
    }
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !age & !height & !weight & !sex) {
      alert("please add data.");
      return;
    }
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
        <input
          type="text"
          placeholder="sex"
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Save"
        className="btn-submit btn-submit-left"
      />
    </form>
  );
};

export default EditProfile;
