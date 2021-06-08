import "./App.css";
import Menu from "./components/Menu/Menu";
import FoodsDb from "./components/Main/FoodsDb/FoodsDb";
import ExercisesDb from "./components/Main/ExercisesDb/ExercisesDb";
import Profiles from "./components/Main/Profiles/Profiles";
import Tracker from "./components/Main/Tracker/Tracker";
import { Switch, Route } from "react-router-dom";
import { useHistory, withRouter } from "react-router-dom";
import Authentication from "./components/Main/Authentification/Authentification";
import Signup from "./components/Main/Authentification/Signup/Signup";

function App() {
  let history = useHistory();

  const routes = (
    <Switch>
      <Route path="/foodsdb" component={FoodsDb} />
      <Route path="/exerciseDb" component={ExercisesDb} />
      <Route path="/profiles" component={Profiles} />
      <Route path="/tracker" component={Tracker} />
      <Route path="/user/signin" component={Authentication} />
      <Route path="/user/signup" component={Signup} />
    </Switch>
  );

  return (
    <div className="App">
      <Menu
        pageWrapId={"page-wrap"}
        outerContainerId={"App"}
        onFoodDbPress={() => {
          history.push("/foodsdb");
        }}
        onExerciseDbClick={() => {
          history.push("/exerciseDb");
        }}
        onProfilesClick={() => {
          history.push("/profiles");
        }}
        onTrackerClick={() => {
          history.push("/tracker");
        }}
        onUserClick={() => {
          history.push("/user/signin");
        }}
      />
      <div id="page-wrap">
        <h1>FitTrack</h1>
        {routes}
      </div>
    </div>
  );
}

export default App;
