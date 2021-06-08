import React from "react";
import { useState } from "react";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // TODO signup
  const onSubmit = (e) => {
    e.preventDefault();
    if (
      !firstname &
      !lastname &
      !street &
      !postcode &
      !city &
      !country &
      !phone &
      !password &
      !email
    ) {
      alert("please add data.");
      return;
    }
  };

  return (
    <form className="login-signup-form" onSubmit={onSubmit}>
      <div className="form-control">
        <input
          type="text"
          placeholder="firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="street"
          value={street}
          onChange={(e) => setStreet(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="postcode"
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="form-control">
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
      <div className="form-control">
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <input
        type="submit"
        value="Signup"
        className="btn-submit btn-submit-left"
      />
    </form>
  );
};

export default Signup;
