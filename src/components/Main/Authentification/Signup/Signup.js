import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import * as authenticationActions from "../../../../store/actions/authentication-actions";

const Signup = (props, { isSignInComponent }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [street, setStreet] = useState("");
  const [postcode, setPostcode] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

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

    const newUser = {
      firstname: firstname,
      lastname: lastname,
      street: street,
      postcode: postcode,
      city: city,
      country: country,
      phone: phone,
      password: password,
      email: email,
    };

    props.signup(newUser);
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
      <input
        type="button"
        value="Account exists"
        className="btn-submit btn-submit-right"
        onClick={() => {
          props.onToggle();
        }}
      />
    </form>
  );
};

const mapActionToProps = (dispatch) => {
  return {
    signup: (user) => {
      console.log(user);
      dispatch(authenticationActions.signup(user));
    },
  };
};
export default connect(null, mapActionToProps)(Signup);
