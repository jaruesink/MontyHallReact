import React, { Component } from 'react';

export default class AddTask extends Component {
  constructor(props) {
    super(props);
  }
  
  addTask(e) {
    e.preventDefault();
    console.log(this.refs.taskinput.value);
  }
  
  render() {
  return(
    <form onSubmit={this.addTask.bind(this)}>
      <div className="input-group">
        <input className="form-control" ref="taskinput" placeholder="What should I get done today?" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">Add Task</button>
        </span>
      </div>
    </form>
  )
  }
}