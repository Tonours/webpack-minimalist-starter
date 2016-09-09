import { combineReducers } from 'redux';
import count from './count';

const reducer = combineReducers({
  count: count
});

export default reducer;
