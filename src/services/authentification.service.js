import axios from "../../axios-url";

const login = (user) => {
  // return (dispatch) => {
  return axios
    .post("/login", user, { withCredentials: true })
    .then((response) => {
      //   const result = new Date(new Date());
      //   result.setDate(result.getDate() + 7);
      //   const expiration = result.getTime();

      //   window.localStorage.setItem("expiration", `${expiration}`);
      localStorage.setItem("user", JSON.stringify(response.data));
      alert("Successfully logged in");
    })
    .catch((error) => {
      alert(error.response.data);
    });
};
//   };
