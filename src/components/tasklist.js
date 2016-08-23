import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TaskActions from './taskactions';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  
  renderList() {
    return this.props.tasks.map( (task, index) => {
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

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  }
}

export default connect(mapStateToProps)(TaskList);