export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_TASKS':
      return [...action.tasks].concat(state);
    case 'ADD_TASK':
      return [action.task].concat(state);
    case 'UPDATE_TASK':
      return state.map( (task) => {
        if (task.id === action.id) {
          return { ...task, ...action.updates };
        } else {
          return task;
        }
      });
    case 'DELETE_TASK':
      function findByID(task) {
        return task.id === action.id
      }
      const taskIndex = state.findIndex(findByID);
      return [
        ...state.slice(0, taskIndex),
        ...state.slice(taskIndex + 1)
      ]
    default:
      return state
  }
}