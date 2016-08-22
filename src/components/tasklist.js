import React, { Component } from 'react';
import { connect } from 'react-redux';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }
  
  renderList() {
    return this.props.tasks.map( (task, i) => {
      return (
        <li className="list-group-item" key={task.name+i}>{task.name}</li>
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