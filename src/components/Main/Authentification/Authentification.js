import React from "react";
import { useState, useEffect } from "react";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import { isUserLoggedIn } from "../../../utils/FunctionUtils";
import * as authenticationActions from "../../../store/actions/authentication-actions";
import { connect } from "react-redux";

const Authentication = (props) => {
  const [isSignInComponent, setIsSignInComponent] = useState(true);
  const [pressedLoggedIn, setPressedLoggedIn] = useState("yes");
  useEffect(() => {
    setTimeout(function () {
      isUserLoggedIn();
      console.log("hi");
    }, 3000);
  }, [pressedLoggedIn]);

  const onToggle = () => {
    setIsSignInComponent(!isSignInComponent);
  };

  const logout = () => {
    props.logout();
  };

  if (isUserLoggedIn() === false) {
    if (isSignInComponent) {
      return (
        <div>
          <Signin
            onToggle={onToggle}
            pressedLoggedIn={() => {
              setPressedLoggedIn({ ...pressedLoggedIn });
            }}
          />
        </div>
      );
    } else {
      return (
        <div>
          <Signup onToggle={onToggle} />
        </div>
      );
    }
  } else {
    return (
      <div>
        <h3>you are already logged in!</h3>
        <button
          type="button"
          onClick={() => logout()}
          value="logout"
          className="btn-submit"
        >
          logout
        </button>
      </div>
    );
  }
};

const mapActionToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(authenticationActions.login(user));
    },
    logout: () => {
      dispatch(authenticationActions.logout());
    },
  };
};

export default connect(null, mapActionToProps)(Authentication);
