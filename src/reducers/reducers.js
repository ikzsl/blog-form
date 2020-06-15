import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/actions';

const currentUser = handleActions(
  {
    [actions.logoutUser]: () => {},
    [actions.loginUser]: (state, action) => action.payload,
  },
  {},
);

const errors = handleActions(
  {
    [actions.changeFetchStatus]: (state, action) => action.payload,
  },
  {},
);

export default combineReducers({
  currentUser,
  errors,
});
