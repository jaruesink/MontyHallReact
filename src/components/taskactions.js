import React, { Component } from 'react';
import { startToggleTask } from '../actions/';
import { startDeleteTask } from '../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

class TaskActions extends Component {
  constructor(props) {
    super(props);
  }

  toggleTask() {
    console.log('toggling task', this.props.task.name);
    this.props.startToggleTask(this.props.task);
  }
  
  deleteTask() {
    console.log('deleting task', this.props.task.name)
    this.props.startDeleteTask(this.props.task);
  }

  render() {
    const incompleteClass = classNames('btn', 'btn-success', { hidden: this.props.task.completed });
    const completedClass = classNames('btn', 'btn-warning', { hidden: !this.props.task.completed });
  return(
    <div className="taskactions">
      <button onClick={this.toggleTask.bind(this)} className={incompleteClass}>Complete</button>
      <button onClick={this.toggleTask.bind(this)} className={completedClass}>Mark Incomplete</button>
      <button onClick={this.deleteTask.bind(this)} className="btn btn-danger">Delete</button>
    </div>
  )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startDeleteTask, startToggleTask }, dispatch);
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskActions);