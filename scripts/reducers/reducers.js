/************************************************
/ NPM Modules
/***********************************************/
import { combineReducers } from "redux";

/************************************************
/ Variables
/***********************************************/
import user from "./user/user";

const reducers = combineReducers({user});

export default reducers;
