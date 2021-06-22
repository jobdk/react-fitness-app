import axios from "../../axios-url";
import { checkErrorMessage } from "../../utils/FunctionUtils";

export const login = (user) => {
  return (dispatch) => {
    axios
      .post("/login", user, { withCredentials: true })
      .then((response) => {
        const result = new Date(new Date());
        result.setDate(result.getDate() + 7);
        const expiration = result.getTime();

        window.localStorage.setItem("expiration", `${expiration}`);
        alert("Successfully logged in");
      })
      .catch((error) => {
        alert(error.response.data);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    axios
      .post("/logout", { withCredentials: true })
      .then((response) => {
        // console.log(response);
        // const result = new Date(new Date());
        // result.setDate(result.getDate() + 7);
        // const expiration = result.getTime();
        // window.localStorage.setItem("expiration", `${expiration}`);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };
};

export const signup = (user) => {
  return (dispatch) => {
    axios
      .post("/signup", user)
      .then((response) => {
        console.log(response);
        // const result = new Date(new Date());
        // result.setDate(result.getDate() + 7);
        // const expiration = result.getTime();
        // window.localStorage.setItem("expiration", `${expiration}`);
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data);
      });
  };
};
