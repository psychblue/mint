import { SET_USERINFO } from "../../actions/common/common";

const common = (state = {
  username: "",
  loginStatus: false
}, action) => {

  switch(action.type){

    case SET_USERINFO:

      return Object.assign({}, state, {
        username: action.username,
        loginStatus: action.loginStatus
      });

    default:

      return state;
  }
};

export default common;
