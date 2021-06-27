export const isUserLoggedIn = () => {
  if (window.localStorage.getItem("expiration")) {
    return true;
  } else {
    return false;
  }
};
