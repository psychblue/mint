/************************************************
/ NPM Modules
/***********************************************/
import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import actions from "../actions/actions";

/************************************************
/ Class App
/***********************************************/
class App extends Component {

  render(){

    return (
      <div>
        <div>{this.props.user.username}</div>
        <button onClick={(e) => this.props.dispatch(actions.setUserinfo("Blue", true))}>click</button>
      </div>
    )
  }
}

export default connect((state) => state)(App);
