import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore, connect, useSelector } from "react-redux";
import * as exerciseActions from "../../../../store/actions/exercise-actions";

const EditExercise = (props) => {
  let { id } = useParams();
  const store = useStore();

  const [exerciseId, setExerciseId] = useState("");
  const [name, setName] = useState("");
  const [baseTime, setBaseTime] = useState("");
  const [energyBurned, setEnergyBurned] = useState("");

  const [bufferName, setBufferName] = useState();

  const [exercise, setExercise] = useState("");
  const isSuccessfullyEdited = useSelector(
    (state) => state.exerciseReducer.putExerciseMessage
  );

  useEffect(() => {
    const exercisesFromState = store.getState().exerciseReducer.exercises;
    for (let i = 0; i < exercisesFromState.length; i++) {
      if (exercisesFromState[i]._id === id) {
        setExerciseId(id);
        setName(exercise.name);
        setBaseTime(exercise.baseTime);
        setEnergyBurned(exercise.energyBurned);

        setExercise(exercisesFromState[i]);
      }
    }
  }, [exercise, store]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name && !baseTime && !energyBurned) {
      alert("please add data.");
      return;
    }
    setBufferName(name);
    const newExercise = {
      exerciseId: exerciseId,
      name: name,
      baseTime: baseTime,
      energyBurned: energyBurned,
    };

    props.putExercise(newExercise);
  };

  return (
    <div>
      {" "}
      {isSuccessfullyEdited ===
      "Request failed with status code 422 " + bufferName ? (
        <div>
          <h1>Could not be added.</h1>
        </div>
      ) : null}
      {isSuccessfullyEdited === "edited exercise " + bufferName ? (
        <div>
          <h1>edited exercise</h1>
        </div>
      ) : null}
      <form className="login-signup-form" onSubmit={onSubmit}>
        <div className="form-control">
          <label>
            <h3>name</h3>
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
            <h3>baseTime</h3>
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
            <h3>energy</h3>
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
    putExercise: (exercise) => {
      dispatch(exerciseActions.putExercise(exercise));
    },
  };
};
export default connect(null, mapActionToProps)(EditExercise);
