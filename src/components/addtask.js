import React, { Component } from 'react';
import { addTask } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class AddTask extends Component {
  constructor(props) {
    super(props);
  }
  
  addTask(e) {
    e.preventDefault();
    this.props.addTask(this.refs.taskinput.value);
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTask: addTask }, dispatch);
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);