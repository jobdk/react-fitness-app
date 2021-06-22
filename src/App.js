import "./App.css";
import Menu from "./components/Menu/Menu";
import React, { Component } from "react";
import FoodsDb from "./components/Main/FoodsDb/FoodsDb";
import ExercisesDb from "./components/Main/ExercisesDb/ExercisesDb";
import ProfilesDb from "./components/Main/ProfilesDb/ProfilesDb";
import Tracker from "./components/Main/Tracker/Tracker";
import { Switch, Route } from "react-router-dom";
import Authentication from "./components/Main/Authentification/Authentification";
import Signup from "./components/Main/Authentification/Signup/Signup";
import EditFood from "./components/Main/FoodsDb/Foods/EditFood/EditFood";
import AddFood from "./components/Main/FoodsDb/Foods/AddFood/AddFood";
import EditExercise from "./components/Main/ExercisesDb/EditExercise/EditExercise";
import AddExercise from "./components/Main/ExercisesDb/AddExercise/AddExercise";
import NewProfile from "./components/Main/ProfilesDb/Profiles/Profile/NewProfile/NewProfile";
import EditProfile from "./components/Main/ProfilesDb/Profiles/Profile/EditProfile/EditProfile";
import { connect } from "react-redux";
import * as exerciseActions from "./store/actions/exercise-actions";
import * as foodActions from "././store/actions/food-actions";

class App extends Component {
  componentDidMount() {
    this.props.getFoods();
    this.props.getExercises();
  }

  routes = (
    <Switch>
      <Route path="/foodsdb" component={FoodsDb} />
      <Route path="/exerciseDb" component={ExercisesDb} />
      <Route path="/profiles" component={ProfilesDb} />
      <Route path="/tracker" component={Tracker} />
      <Route path="/user/signin" component={Authentication} />
      <Route path="/user/signup" component={Signup} />
      <Route path="/food/edit/:id" component={EditFood} />
      <Route path="/food/add/" component={AddFood} />
      <Route path="/exercise/edit/:id" component={EditExercise} />
      <Route path="/exercise/add/" component={AddExercise} />
      <Route path="/profile/add" component={NewProfile} />
      <Route path="/profile/edit/:id" component={EditProfile} />
    </Switch>
  );

  render() {
    return (
      <div className="App">
        <Menu pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap">
          <h1>FitTrack</h1>
          {this.routes}
        </div>
      </div>
    );
  }
}

const mapActionToProps = (dispatch) => {
  return {
    getFoods: () => {
      dispatch(foodActions.getFoods());
    },
    getExercises: () => {
      dispatch(exerciseActions.getExercises());
    },
  };
};

export default connect(null, mapActionToProps)(App);
