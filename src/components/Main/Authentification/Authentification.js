import { useState } from "react";
import Signup from "./Signup/Signup";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as authentificationActions from "../../../store/actions/authentification-actions";

const Authentication = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email & !password) {
      alert("please add data.");
      return;
    }
    const user = { email: email, password: password };
    props.login(user);

    setEmail("");
    setPassword("");
  };

  const logout = () => {
    props.logout();
  };

  return (
    <div>
      <form className="login-signup-form" onSubmit={onSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-control">
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Signin"
          className="btn-submit btn-submit-left"
        />
        <input
          type="button"
          value="Signup"
          className="btn-submit btn-submit-right"
          onClick={() => {
            history.push("/user/signup");
          }}
        />
      </form>
      <button onClick={() => logout()}>logout</button>
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(authentificationActions.login(user));
    },
    logout: (user) => {
      dispatch(authentificationActions.logout(user));
    },
  };
};

export default connect(null, mapActionToProps)(Authentication);
