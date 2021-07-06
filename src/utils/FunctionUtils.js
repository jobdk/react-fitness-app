export const isUserLoggedIn = () => {
  if (window.localStorage.getItem("expiration")) {
    return true;
  } else {
    return false;
  }
};

export const calcNetCalories = (profile) => {
  if (profile.sex === 0) {
    return (
      10 * profile.weight +
      6.25 * profile.height +
      5 * profile.height +
      5
    ).toFixed(0);
  } else {
    return (
      10 * profile.weight +
      6.25 * profile.height +
      5 * profile.height -
      161
    ).toFixed(0);
  }
};

export const calcCaloriesEaten = (foods, foodsFromState) => {
  let result = 0;
  for (let k = 0; k < foods.length; k++) {
    for (let i = 0; i < foodsFromState.length; i++) {
      if (foods[k].foodId === foodsFromState[i]._id) {
        result +=
          (foodsFromState[i].energy / foodsFromState[i].baseAmount) *
          foods[k].amount;
      }
    }
  }
  return result.toFixed(0);
};

export const calcCaloriesBurned = (exercises, exercisesFromState) => {
  let result = 0;
  for (let k = 0; k < exercises.length; k++) {
    for (let i = 0; i < exercisesFromState.length; i++) {
      if (exercises[k].exerciseId === exercisesFromState[i]._id) {
        result +=
          (exercisesFromState[i].energyBurned /
            exercisesFromState[i].baseTime) *
          exercises[k].timeInMinutes;
        // console.log(result);
      }
    }
  }
  return result.toFixed(0);
};

export const calcCalorieDeficit = (
  caloriesBurned,
  totalCaloriesToEat,
  caloriesEaten
) => {
  let result = +totalCaloriesToEat + +caloriesBurned - +caloriesEaten;

  return result >= 0 ? result : 0;
};

export const calcMacros = (macro, foods, foodsFromState) => {
  if (macro === "carbs") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result +=
            (foodsFromState[i].carbohydrates / foodsFromState[i].baseAmount) *
            foods[k].amount;
        }
      }
    }
    return result.toFixed(1);
  } else if (macro === "proteins") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result +=
            (foodsFromState[i].protein / foodsFromState[i].baseAmount) *
            foods[k].amount;
        }
      }
    }
    return result.toFixed(1);
  } else if (macro === "fats") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result +=
            (foodsFromState[i].fat / foodsFromState[i].baseAmount) *
            foods[k].amount;
        }
      }
    }
    return result.toFixed(1);
  }
};
