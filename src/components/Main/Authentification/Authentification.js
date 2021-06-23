import { useState } from "react";
import { useHistory, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as authentificationActions from "../../../store/actions/authentification-actions";

const Authentication = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState();

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email & !password) {
      alert("please add data.");
      return;
    }
    const user = { email: email, password: password };
    props.login(user);
    setUser(user);
    setEmail("");
    setPassword("");
  };

  const logout = () => {
    props.logout();
    setUser();
  };

  if (user) {
    return (
      <div>
        {user.email} is loggged in
        <button onClick={() => logout()}>logout</button>
      </div>
    );
  }
  if (!user) {
    return (
      <div>
        <form className="login-signup-form" onSubmit={handleSubmit}>
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
      </div>
    );
  }
};

const mapActionToProps = (dispatch) => {
  return {
    login: (user) => {
      const b = dispatch(authentificationActions.login(user));
      console.log(b);
    },
    logout: (user) => {
      dispatch(authentificationActions.logout(user));
    },
  };
};

export default connect(null, mapActionToProps)(Authentication);
