import { useParams } from "react-router";
import { useState, useEffect } from "react";
import { useStore, connect, useSelector } from "react-redux";
import * as foodActions from "../../../../../store/actions/food-actions";

const EditFood = (props) => {
  let { id } = useParams();
  const store = useStore();

  const [foodId, setFoodId] = useState("");
  const [name, setName] = useState("");
  const [baseAmount, setBaseAmount] = useState("");
  const [energy, setEnergy] = useState("");
  const [fat, setFat] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [protein, setProtein] = useState("");
  const [salt, setSalt] = useState("");
  const [fiber, setFiber] = useState("");
  const [drink, setDrink] = useState(false);
  const [bufferName, setBufferName] = useState();

  const [food, setFood] = useState("");
  const isSuccessfullyEdited = useSelector(
    (state) => state.foodReducer.putFoodMessage
  );
  useEffect(() => {
    const foodsFromState = store.getState().foodReducer.foods;
    for (let i = 0; i < foodsFromState.length; i++) {
      if (foodsFromState[i]._id === id) {
        setFoodId(id);
        setName(food.name);
        setBaseAmount(food.baseAmount);
        setEnergy(food.energy);
        setFat(food.fat);
        setCarbohydrates(food.carbohydrates);
        setProtein(food.protein);
        setSalt(food.salt);
        setFiber(food.fiber);
        setDrink(food.drink);

        setFood(foodsFromState[i]);
      }
    }
  }, [food, store]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name & !baseAmount & !energy & !fat & !carbohydrates & !protein) {
      alert("please add data.");
      return;
    }
    setBufferName(name);

    const newFood = {
      foodId: foodId,
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

    props.putFood(newFood);
  };

  return (
    <div>
      {isSuccessfullyEdited ===
      "Request failed with status code 422 " + bufferName ? (
        <div>
          <h1>Could not be edited.</h1>
        </div>
      ) : null}
      {isSuccessfullyEdited === "edited food " + bufferName ? (
        <div>
          <h1>edited food</h1>
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
            <b>base amount in gram</b>
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
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    putFood: (food) => {
      dispatch(foodActions.putFood(food));
    },
  };
};
export default connect(null, mapActionToProps)(EditFood);
