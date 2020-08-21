import React from "react";
import ReactDOM from "react-dom";
import { withRouter } from "react-router-dom";
import { Input, Space, Button } from "antd";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: "",
      password: "",
      gender:"男",
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
    const alreadyRegistered = this.props.members.find(
      (members) => members.account === this.state.account
    );
    console.log("alreadyRegistered", alreadyRegistered === undefined);
    if (alreadyRegistered === undefined) {
      var newMember = {
        account: this.state.account,
        password: this.state.password,
        gender: this.state.gender,
      };
      this.props.doRegister(newMember);
      this.props.history.push("");
    } else {
      alert("此帳號已被註冊");
    }
  };

  render() {
    return (
      <form action="GET" onSubmit={this.handleSubmit}>
        <div>
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
        </div>
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
        <div>
          <Space direction="Level">
            gender:
            <label>
            <Input
              placeholder="Select gender"
              type="radio"
              id="gender"
              value='男'
              checked={this.state.gender==='男'}
              onChange={this.handleChange}
            />
            男
            </label><label>
            
            <Input
              placeholder="Select gender"
              type="radio"
              id="gender"
              value='女'
              checked={this.state.gender==='女'}
              onChange={this.handleChange}
            />
            女
            </label>
          </Space>
        </div>
        <br />
        <Button htmlType="submit">註冊</Button>

        <div id="error"></div>
      </form>
    );
  }
}
export default withRouter(Register);
