import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import authenticationReducer from "./store/reducer/authentication-reducer";
import profileReducer from "./store/reducer/profile-reducer";
import exerciseReducer from "./store/reducer/exercise-reducer";
import foodReducer from "./store/reducer/food-reducer";
import trackerReducer from "./store/reducer/tracker-reducer";

const rootReducer = combineReducers({
  authenticationReducer,
  profileReducer,
  foodReducer,
  exerciseReducer,
  trackerReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
