import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskActions from './taskactions';
import { startAddTasks } from '../actions/'

const getVisibleTasks = (tasks = [], taskFilter) => {
  switch(taskFilter) {
    case 'VIEW_INCOMPLETE':
      return tasks.filter(
        task => !task.completed
      );
    case 'VIEW_COMPLETED':
      return tasks.filter(
        task => task.completed
      );
    default:
      return tasks;
  }
};

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.props.startAddTasks();
  }

  renderList() {
    const { tasks, taskFilter } = this.props;
    const visibleTasks = tasks.length ? getVisibleTasks(tasks, taskFilter) : null;
    if (!(tasks.length)) { return <p>Add some tasks to get started.</p> }
    return visibleTasks.map( (task, index) => {
      return (
        <li className="list-group-item" key={task.name+index}>{task.name}
          <TaskActions task={task} />
        </li>
      );
    });
  }
  
  render() {
  return(
    <ul className="list-group margin-top">
      {this.renderList()}
    </ul>
  )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ startAddTasks }, dispatch);
}

function mapStateToProps({tasks, taskFilter}) {
  return {
    tasks,
    taskFilter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);