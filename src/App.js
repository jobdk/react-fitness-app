import "./App.css";
import Menu from "./components/Menu/Menu";
import React, { Component } from "react";
import FoodsDb from "./components/Main/FoodsDb/FoodsDb";
import ExercisesDb from "./components/Main/ExercisesDb/ExercisesDb";
import Profiles from "./components/Main/Profiles/Profiles";
import Tracker from "./components/Main/Tracker/Tracker";
import { Switch, Route } from "react-router-dom";
import Authentication from "./components/Main/Authentification/Authentification";
import Signup from "./components/Main/Authentification/Signup/Signup";
import EditFood from "./components/Main/FoodsDb/Foods/EditFood/EditFood";
import AddFood from "./components/Main/FoodsDb/Foods/AddFood/AddFood";
import EditExercise from "./components/Main/ExercisesDb/EditExercise/EditExercise";
import AddExercise from "./components/Main/ExercisesDb/AddExercise/AddExercise";
import { connect } from "react-redux";
import * as actions from "././store/actions/actions";

class App extends Component {
  componentDidMount() {
    this.props.getFoods();
    this.props.getExercises();
  }

  routes = (
    <Switch>
      <Route path="/foodsdb" component={FoodsDb} />
      <Route path="/exerciseDb" component={ExercisesDb} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/tracker" component={Tracker} />
      <Route path="/user/signin" component={Authentication} />
      <Route path="/user/signup" component={Signup} />
      <Route path="/food/edit/:id" component={EditFood} />
      <Route path="/food/add/" component={AddFood} />
      <Route path="/exercise/edit/:id" component={EditExercise} />
      <Route path="/exercise/add/" component={AddExercise} />
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
      dispatch(actions.getFoods());
    },
    getExercises: () => {
      dispatch(actions.getExercises());
    },
  };
};

export default connect(null, mapActionToProps)(App);
