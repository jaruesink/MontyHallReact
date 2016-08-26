export function getVisibleTasks(tasks, taskFilter) {
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
}

export default function(state = 'VIEW_INCOMPLETE', action) {
  switch(action.type) {
    case 'FILTER_TASKS':
      return action.filter;
    default:
      return state
  }
}