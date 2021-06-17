import axios from "../../axios-url";

export const login = (user) => {
  return (dispatch) => {
    axios
      .post("/login", user, { withCredentials: true })
      .then((response) => {
        console.log(response);
        const result = new Date(new Date());
        result.setDate(result.getDate() + 7);
        const expiration = result.getTime();

        window.localStorage.setItem("expiration", `${expiration}`);
        // dispatch(storeFoods(response.data));
      })
      .catch((error) => {
        console.log(error);
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
      });
  };
};
