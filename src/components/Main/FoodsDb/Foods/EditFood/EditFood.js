import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore } from "react-redux";

const EditFood = () => {
  let { id } = useParams();
  const store = useStore();

  const [name, setName] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [energy, setEnergy] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [salt, setSalt] = useState("");
  const [fiber, setFiber] = useState("");
  const [drink, setDrink] = useState(false);

  const [food, setFood] = useState("");

  useEffect(() => {
    for (let i = 0; i < store.getState().foods.length; i++) {
      if (store.getState().foods[i]._id === id) {
        setName(food.name);
        setBaseAmount(food.baseAmount);
        setEnergy(food.energy);
        setFat(food.fat);
        setCarbohydrates(food.carbohydrates);
        setProtein(food.protein);
        setSalt(food.salt);
        setFiber(food.fiber);
        setDrink(food.drink);

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
          <b>baseAmount</b>
        </label>
        <input
          type="text"
          placeholder="baseAmount"
          value={baseAmount}
          onChange={(e) => setBaseAmount(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>energy</b>
        </label>
        <input
          type="text"
          placeholder="energy"
          value={energy}
          onChange={(e) => setEnergy(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>fat</b>
        </label>
        <input
          type="text"
          placeholder="fat"
          value={fat}
          onChange={(e) => setFat(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>carbohydrates</b>
        </label>
        <input
          type="text"
          placeholder="city"
          value={carbohydrates}
          onChange={(e) => setCarbohydrates(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>protein</b>
        </label>
        <input
          type="text"
          placeholder="protein"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>
          <b>salt</b>
        </label>
        <input
          type="text"
          placeholder="salt"
          value={salt}
          onChange={(e) => setSalt(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>
          <b>fiber</b>
        </label>
        <input
          type="text"
          placeholder="fiber"
          value={fiber}
          onChange={(e) => setFiber(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>is a drink</b>
        </label>
        <input
          type="checkbox"
          value={drink}
          onChange={(e) => setDrink(e.currentTarget.checked)}
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
