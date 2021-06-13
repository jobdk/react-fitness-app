import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

const EditFood = () => {
  let { id } = useParams();
  const store = useStore();
  const [food, setFood] = useState("");

  useEffect(() => {
    for (let i = 0; i < store.getState().foods.length; i++) {
      if (store.getState().foods[i]._id === id) {
        setFood(store.getState().foods[i]);
      }
    }
  });
  const onSubmit = (e) => {
    e.preventDefault();
    if (false) {
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
          value={food.name}
          // onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <h3>baseAmount</h3>
        </label>
        <input
          type="text"
          placeholder="baseAmount"
          value={food.baseAmount}
          // onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <h3>energy</h3>
        </label>
        <input
          type="text"
          placeholder="energy"
          value={food.energy}
          // onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <h3>fat</h3>
        </label>
        <input
          type="text"
          placeholder="fat"
          value={food.fat}
          // onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <h3>carbohydrates</h3>
        </label>
        <input
          type="text"
          placeholder="city"
          value={food.carbohydrates}
          // onChange={(e) => setCity(e.target.value)}
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

export default EditFood;
