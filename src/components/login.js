import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="login container margin-top">
      You must be logged in to access your tasks. <button className="btn btn-primary">Login</button>
    </div>
  );
  }
}