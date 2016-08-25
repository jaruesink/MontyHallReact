export function addTask(name) {
  return { type: 'ADD_TASK', payload: { name: name, completed: false } };
}

export function toggleTask(index) {
  return { type: 'TOGGLE_TASK', payload: index };
}

export function deleteTask(index) {
  return { type: 'DELETE_TASK', payload: index };
}

export function filterTasks(filter) {
  return { type: 'FILTER_TASKS', payload: filter }
}