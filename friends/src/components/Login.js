import React, { Component } from "react";
import axios from 'axios'
import { axiosWithAuth } from "../utils/axiosAuth";

export class Login extends Component {
  state = {
    credentials: {
      username: "",
      password: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };


  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post("/login", this.state.credentials)
    .then((res) => {
      localStorage.setItem("token", res.data.payload);
      this.props.history.push("/protected");
    })
    .catch((err) => {
      console.log("ErrorERRORerror", err);
    });
  };


  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.login}>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.handleChange}
            />
          </label>
          <button>Log In</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Login;
