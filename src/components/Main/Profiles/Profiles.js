import { useState } from "react";

const Profiles = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!userName & !password) {
      alert("please add data.");
      return;
    }
  };

  return (
    <form className="login-signup-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="username/email"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        type="submit"
        value="Signup"
        className="btn-submit btn-submit-right"
      />
    </form>
  );
};

export default Profiles;
