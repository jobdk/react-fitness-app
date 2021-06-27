import React from "react";
import { useState } from "react";
import Signin from "./Signin/Signin";
import Signup from "./Signup/Signup";
import { isUserLoggedIn } from "../../../utils/FunctionUtils";
import * as authenticationActions from "../../../store/actions/authentication-actions";
import { connect } from "react-redux";

const Authentication = (props) => {
  const [isSignInComponent, setIsSignInComponent] = useState(true);

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
          <Signin onToggle={onToggle} />
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
        <div>you are already logged in!</div>
        <button onClick={() => logout()}>logout</button>
      </div>
    );
  }
};

const mapActionToProps = (dispatch) => {
  return {
    login: (user) => {
      const b = dispatch(authenticationActions.login(user));
      console.log(b);
    },
    logout: () => {
      dispatch(authenticationActions.logout());
    },
  };
};

export default connect(null, mapActionToProps)(Authentication);
