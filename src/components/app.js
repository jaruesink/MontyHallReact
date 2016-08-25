import React, { Component } from 'react';
import AddTask from './addtask';
import TaskList from './tasklist';
import TaskFilters from './taskfilters';

export default class App extends Component {
  render() {
  return (
    <div className="container">
      <h1>Task List</h1>
      <AddTask />
      <TaskFilters />
      <TaskList />
    </div>
  );
  }
}
