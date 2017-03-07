export const SET_USERINFO = "SET_USERINFO";

export const setUserinfo = (username, status) => {

  return {
    type: SET_USERINFO,
    username: username,
    loginStatus: status
  }
};
