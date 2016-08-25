import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskActions from './taskactions';

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
  }

  renderList() {
    const { tasks, taskFilter } = this.props;
    const visibleTasks = getVisibleTasks(tasks, taskFilter);
    return visibleTasks.map( (task, index) => {
      return (
        <li className="list-group-item" key={task.name+index}>{task.name}
          <TaskActions task={task} index={index} />
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

function mapStateToProps({tasks, taskFilter}) {
  return {
    tasks,
    taskFilter
  }
}

export default connect(mapStateToProps)(TaskList);