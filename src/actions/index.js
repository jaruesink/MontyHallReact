export function addTask(name) {
  console.log('task being added: ', name);
  return {
    type: 'ADD_TASK',
    payload: {
      name: name,
      complete: false
    }
  };
}