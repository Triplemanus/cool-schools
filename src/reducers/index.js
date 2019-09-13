import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { allSchoolsReducer } from './getAllSchools';
import { searchSchoolsReducer } from './searchSchools';
import { selectSchoolsReducer } from './selectSchools';

export const rootReducer = combineReducers({
  errorMsg,
  isLoading,
  allSchoolsReducer,
  searchSchoolsReducer,
  selectSchoolsReducer
});