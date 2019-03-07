import { combineReducers } from 'redux';
import notes from './notes';
import filters from './filters';
import auth from './auth';

export default combineReducers({
  notes,
  filters,
  auth
});
