import { combineReducers } from 'redux';
import notes from './notes';
import filters from './filters';

export default combineReducers({
  notes,
  filters
});
