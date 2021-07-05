export const isUserLoggedIn = () => {
  if (window.localStorage.getItem("expiration")) {
    return true;
  } else {
    return false;
  }
};

export const calcNetCalories = (profile) => {
  // console.log(profile);
  if (profile.sex === 0) {
    return 10 * profile.weight + 6.25 * profile.height + 5 * profile.height + 5;
  } else {
    return (
      10 * profile.weight + 6.25 * profile.height + 5 * profile.height - 161
    );
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
        // console.log(result);
      }
    }
  }
  return result;
};

export const calcCaloriesBurned = (exercises, exercisesFromState) => {
  let result = 0;
  // console.log(exercises);
  for (let k = 0; k < exercises.length; k++) {
    for (let i = 0; i < exercisesFromState.length; i++) {
      if (exercises[k].exerciseId === exercisesFromState[i]._id) {
        console.log("match");
        result +=
          (exercisesFromState[i].energyBurned /
            exercisesFromState[i].baseTime) *
          exercises[k].timeInMinutes;
        console.log(result);
      }
    }
  }
  return result;
};

export const calcCalorieDeficit = (
  caloriesBurned,
  totalCaloriesToEat,
  caloriesEaten
) => {
  return totalCaloriesToEat + caloriesBurned - caloriesEaten;
};

export const calcMacros = (macro, foods, foodsFromState) => {
  if (macro === "carbs") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result += foodsFromState[i].carbohydrates;
        }
      }
    }
    return result;
  } else if (macro === "proteins") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result += foodsFromState[i].protein;
          // console.log(result);
        }
      }
    }
    return result;
  } else if (macro === "fats") {
    let result = 0;
    for (let k = 0; k < foods.length; k++) {
      for (let i = 0; i < foodsFromState.length; i++) {
        if (foods[k].foodId === foodsFromState[i]._id) {
          result += foodsFromState[i].fat;
          // console.log(result);
        }
      }
    }
    return result;
  }
};
