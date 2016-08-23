const todo = (state = {}, index, action) => {
  switch (action.type) {
    case 'TOGGLE_TASK':
      if (index !== action.payload) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
    default:
      return state
  }
}

export default function(state = [], action) {
  switch(action.type) {
    case 'ADD_TASK':
      return [action.payload].concat(state);
    case 'TOGGLE_TASK':
      return state.map( (t, i) => todo(t, i, action));
    case 'DELETE_TASK':
      return [
            ...state.slice(0, action.payload),
            ...state.slice(action.payload + 1)
        ];
    default:
      return state
  }
}


  // const todo = (state = {}, action) => {
  //   switch (action.type) {
  //     case 'ADD_TODO':
  //       return {
  //         id: action.id,
  //         text: action.text,
  //         completed: false
  //       }
  //     case 'TOGGLE_TODO':
  //       if (state.id !== action.id) {
  //         return state
  //       }
  // 
  //       return Object.assign({}, state, {
  //         completed: !state.completed
  //       })
  // 
  //     default:
  //       return state
  //   }
  // }
  // 
  // const todos = (state = [], action) => {
  //   switch (action.type) {
  //     case 'ADD_TODO':
  //       return [
  //         ...state,
  //         todo(undefined, action)
  //       ]
  //     case 'TOGGLE_TODO':
  //       return state.map(t =>
  //         todo(t, action)
  //       )
  //     default:
  //       return state
  //   }
  // }
  // 
  // export default todos