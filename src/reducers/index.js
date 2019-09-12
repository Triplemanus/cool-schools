import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { allSchoolsReducer } from './getAllSchools';

export const rootReducer = combineReducers({
  errorMsg,
  isLoading,
  allSchoolsReducer,
});