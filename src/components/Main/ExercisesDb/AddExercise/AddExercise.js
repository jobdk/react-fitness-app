import { useState } from "react";
import * as exerciseActions from "../../../../store/actions/exercise-actions";
import { connect, useSelector } from "react-redux";

const AddExercise = (props) => {
  const [name, setName] = useState("");
  const [baseTime, setBaseTime] = useState("");
  const [energyBurned, setEnergyBurned] = useState("");
  const isSuccessfullyAdded = useSelector(
    (state) => state.exerciseReducer.postExerciseMessage
  );
  const [bufferName, setBufferName] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !baseTime & !energyBurned) {
      alert("please add data.");
      return;
    }
    setBufferName(name);
    const newExercise = {
      name: name,
      baseTime: baseTime,
      energyBurned: energyBurned,
    };

    props.postExercise(newExercise);
    setName("");
    setBaseTime("");
    setEnergyBurned("");
  };

  return (
    <div>
      {isSuccessfullyAdded ===
      "Request failed with status code 422 " + bufferName ? (
        <div>
          <h1>Could not be added.</h1>
        </div>
      ) : null}
      {isSuccessfullyAdded === "added exercise " + bufferName ? (
        <div>
          <h1>Added exercise</h1>
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
            <b>base time in minutes</b>
          </label>
          <input
            type="text"
            placeholder="baseTime"
            value={baseTime}
            onChange={(e) => setBaseTime(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>
            <b>energy</b>
          </label>
          <input
            type="text"
            placeholder="energyBurned"
            value={energyBurned}
            onChange={(e) => setEnergyBurned(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Save"
          className="btn-submit btn-submit-left"
        />
      </form>
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    postExercise: (exercise) => {
      dispatch(exerciseActions.postExercise(exercise));
    },
  };
};

export default connect(null, mapActionToProps)(AddExercise);
