import React, { Component } from 'react';
import { toggleTask } from '../actions/index';
import { deleteTask } from '../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

class TaskActions extends Component {
  constructor(props) {
    super(props);
  }

  toggleTask() {
    console.log('toggling task', this.props.task.name);
    this.props.toggleTask(this.props.index);
  }
  
  deleteTask() {
    console.log('deleting task', this.props.task.name)
    this.props.deleteTask(this.props.index);
  }

  render() {
    let incompleteClass = classNames('btn', 'btn-success', { hidden: this.props.task.completed });
    let completedClass = classNames('btn', 'btn-warning', { hidden: !this.props.task.completed });
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
  return bindActionCreators({ deleteTask, toggleTask }, dispatch);
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskActions);