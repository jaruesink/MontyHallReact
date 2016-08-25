import { combineReducers } from 'redux';
import Tasks from './tasks';
import TaskFilter from './taskfilter';

const rootReducer = combineReducers({
  tasks: Tasks,
  taskFilter: TaskFilter
});

export default rootReducer;
