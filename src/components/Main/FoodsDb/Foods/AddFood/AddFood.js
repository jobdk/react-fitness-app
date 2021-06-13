import { useState } from "react";
import * as actions from "../../../../../store/actions/actions";
import { connect } from "react-redux";

const AddFood = (props) => {
  const [name, setName] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [energy, setEnergy] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [salt, setSalt] = useState("");
  const [fiber, setFiber] = useState("");
  const [drink, setDrink] = useState();

  const [food, setFood] = useState();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !baseAmount & !energy & !fat & !carbohydrates & !protein) {
      alert("please add data.");
      return;
    }

    const newFood = {
      name: name,
      baseAmount: baseAmount,
      energy: energy,
      fat: fat,
      carbohydrates: carbohydrates,
      protein: protein,
      salt: salt,
      fiber: fiber,
      drink: drink,
    };
    // console.log(newFood);
    //  setFood(newFood);
    props.postFood(newFood);
    // console.log(e);
    setName("");
    setBaseAmount("");
    setEnergy("");
    setFat("");
    setCarbohydrates("");
    setProtein("");
    setDrink(false);
    setSalt("");
    setFiber("");
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
          <b>protein</b>
        </label>
        <input
          type="text"
          placeholder="carbohydrates"
          value={protein}
          onChange={(e) => setProtein(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>
          <b>carbohydrates</b>
        </label>
        <input
          type="text"
          placeholder="carbohydrates"
          value={carbohydrates}
          onChange={(e) => setCarbohydrates(e.target.value)}
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
        <label>
          <b>salt</b>
        </label>
        <input
          type="text"
          placeholder="salt"
          value={salt}
          onChange={(e) => setSalt(e.target.value)}
        />
        <label>
          <b>fiber</b>
        </label>
        <input
          type="text"
          placeholder="fiber"
          value={fiber}
          onChange={(e) => setFiber(e.target.value)}
        />
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

const mapActionToProps = (dispatch) => {
  return {
    postFood: (food) => {
      dispatch(actions.postFood(food));
    },
  };
};

export default connect(null, mapActionToProps)(AddFood);
