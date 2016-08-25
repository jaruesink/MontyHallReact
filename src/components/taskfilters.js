import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterTasks } from '../actions/index';
import classNames from 'classnames';

class TaskFilters extends Component {
  constructor(props) {
    super(props);
  }
  
  changeFilter(filter) {
    console.log('changing filter to: ', filter);
    this.props.filterTasks(filter);
  }
  
  render() {
    // TODO: cleanup how these classes get assigned
    const { taskFilter } = this.props;
    const isViewAll = (taskFilter === 'VIEW_ALL');
    const isViewIncomplete = (taskFilter === 'VIEW_INCOMPLETE');
    const isViewCompleted = (taskFilter === 'VIEW_COMPLETED');
    const viewAllClasses = classNames('btn', {
      'btn-secondary': !isViewAll, 'btn-primary': isViewAll
    });
    const viewIncompleteClasses = classNames('btn', {
      'btn-secondary': !isViewIncomplete, 'btn-primary': isViewIncomplete
    });
    const viewCompletedClasses = classNames('btn', {
      'btn-secondary': !isViewCompleted, 'btn-primary': isViewCompleted
    });
  return(
    <div className="btn-group margin-top" role="group" aria-label="Basic example">
      <button onClick={() => this.changeFilter('VIEW_INCOMPLETE')}
        type="button" className={viewIncompleteClasses}>Incomplete</button>
       <button onClick={() => this.changeFilter('VIEW_COMPLETED')}
         type="button" className={viewCompletedClasses}>Completed</button>
       <button onClick={() => this.changeFilter('VIEW_ALL')}
          type="button" className={viewAllClasses}>All Tasks</button>
    </div>
  )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ filterTasks }, dispatch);
}

function mapStateToProps({taskFilter}) {
  return {
    taskFilter
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskFilters);