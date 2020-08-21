import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Form, Input, Space, Button } from "antd";
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      check: false,
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    var BreakException = {};
    try {
      this.props.members.forEach((member) => {
        if (member.account === this.state.account) {
          if (member.password === this.state.password) {
            this.props.doLogin(member.account);
            this.props.history.push("");
          } else {
            ReactDOM.render("登入失敗", document.getElementById("error"));
          }
          throw BreakException;
        } else {
          ReactDOM.render("登入失敗", document.getElementById("error"));
        }
      });
    } catch (e) {
      if (e !== BreakException) throw e;
    }
  };
  render() {
    return (
      <div>
        <form action="GET" onSubmit={this.handleSubmit}>
          <Space direction="vertical">
            account:
            <Input
              placeholder="Enter your account"
              type="text"
              id="account"
              value={this.state.account}
              onChange={this.handleChange}
            />
          </Space>
          <div>
            <Space direction="vertical">
              password:
              <Input.Password
                placeholder="input password"
                type="password"
                id="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </Space>
          </div>
          <br />
          <Button htmlType="submit">登入</Button>
        </form>
        <div id="error"></div>
      </div>
    );
  }
}
export default withRouter(Login);
