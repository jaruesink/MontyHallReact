import React, { Component } from 'react';
import Trial from './trial';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
  return (
    <div className="container">
      <h1>Monty Hall Problem</h1>
      <div className="row">
        <div className="col-sm-6">
          <Trial type="switcher"/>
        </div>
        <div className="col-sm-6">
          <Trial type="non-switcher"/>
        </div>
      </div>
    </div>
  );
  }
}
