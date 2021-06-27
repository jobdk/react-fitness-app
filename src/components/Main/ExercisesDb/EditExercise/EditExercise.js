import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

const EditExercise = () => {
  let { id } = useParams();
  const store = useStore();

  const [name, setName] = useState("");
  const [baseTime, setBaseTime] = useState("");
  const [energyBurned, setEnergyBurned] = useState("");

  const [exercise, setExercise] = useState("");

  useEffect(() => {
    for (let i = 0; i < store.getState().exercises.length; i++) {
      if (store.getState().exercises[i]._id === id) {
        setName(exercise.name);
        setBaseTime(exercise.baseTime);
        setEnergyBurned(exercise.energyBurned);

        setExercise(store.getState().exercises[i]);
      }
    }
  }, [exercise, store]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !baseTime & !energyBurned) {
      alert("please add data.");
      return;
    }
  };

  return (
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
  );
};

export default EditExercise;
