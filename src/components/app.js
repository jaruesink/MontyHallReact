import React, { Component } from 'react';
import AddTask from './addtask';
import TaskList from './tasklist';

export default class App extends Component {
  render() {
  return (
    <div className="container">
      <h1>To Do List</h1>
      <AddTask />
      <TaskList />
    </div>
  );
  }
}
