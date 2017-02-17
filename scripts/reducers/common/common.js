import { SET_TITLE } from "../../actions/common/common";

const common = (state = {
  title: "Mint"
}, action) => {

  switch(action.type){

    case SET_TITLE:

      return Object.assign({}, state, {
        title: action.title
      });

    default:

      return state;
  }
};

export default common;
