import { useState } from "react";
import { connect } from "react-redux";
import * as authenticationActions from "../../../../store/actions/authentication-actions";
import { useHistory } from "react-router-dom";

const Signin = ({ onToggle, pressedLoggedIn, login }) => {
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
    login(user);
    history.push({
      pathname: "/user/authentication",
    });
    setUser(user);
    setEmail("");
    setPassword("");
  };

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
          onClick={() => {
            pressedLoggedIn();
          }}
        />
        <input
          type="button"
          value="No account"
          className="btn-submit btn-submit-right"
          onClick={() => {
            onToggle();
          }}
        />
      </form>
    </div>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    login: (user) => {
      const b = dispatch(authenticationActions.login(user));
    },
    logout: (user) => {
      dispatch(authenticationActions.logout(user));
    },
  };
};

export default connect(null, mapActionToProps)(Signin);
