import React from "react";
import { Redirect } from "react-router-dom";
export default class Logout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    this.props.doLogout();
    return (
      <div><Redirect from="/Logout" to="/" /></div>
      
    );
  }
}
