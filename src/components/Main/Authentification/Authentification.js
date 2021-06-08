import { useState } from "react";
import Signup from "./Signup/Signup";
import { useHistory, withRouter } from "react-router-dom";

const Authentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email & !password) {
      alert("please add data.");
      return;
    }
  };

  return (
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
          type="text"
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
  );
};

export default Authentication;
