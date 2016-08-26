import firebase, { tasksRef } from '../firebase/';

export function addTasks(tasks) {
  return { type: 'ADD_TASKS', tasks }
}

export function startAddTasks() {
  return (dispatch, getState) => {
    return tasksRef.once('value').then((snapshot) => {
      let taskObject = snapshot.val() || {};
      let tasks = [];
      for (let id in taskObject) {
        if (taskObject.hasOwnProperty(id)) {
          tasks.push({id, ...taskObject[id]});
        }
      }
      dispatch(addTasks(tasks));
    }, (error) => {
      console.log('Error getting initial data: ', error);
    });
  }
}

export function addTask(task) {
  return { type: 'ADD_TASK', task };
}

export function startAddTask(name) {
  return (dispatch, getState) => {
    let task = {name, completed: false};
    let taskRef = tasksRef.push(task);
    return taskRef.then( () => {
      dispatch(
        addTask({ id: taskRef.key, ...task })
      );
    }, (error) => {
      console.log('Error dispatching startAddTask: ', error);
    });
  }
}

export function updateTask(id, updates) {
  return { type: 'UPDATE_TASK', id, updates };
}

export function startToggleTask(task) {
  return (dispatch, getState) => {
    let updates = { completed: !task.completed };
    let taskRef = tasksRef.child(task.id);
    return taskRef.update(updates).then( () => {
      dispatch(
        updateTask(task.id, updates)
      );
    }, (error) => {
      console.log('Error dispatching startToggleTask: ', error);
    });
  }
}

export function deleteTask(id) {
  return { type: 'DELETE_TASK', id };
}

export function startDeleteTask(task) {
  return (dispatch, getState) => {
    let taskRef = tasksRef.child(task.id);
    return taskRef.remove().then( () => {
      dispatch(
        deleteTask(task.id)
      );
    }, (error) => {
      console.log('Error dispatching startDeleteTask: ', error);
    });
  }
}

export function filterTasks(filter) {
  return { type: 'FILTER_TASKS', filter }
}