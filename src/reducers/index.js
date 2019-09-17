import { combineReducers } from 'redux';
import { isLoading } from './isLoading';
import { errorMsg } from './errorMsg';
import { allSchoolsReducer } from './getAllSchools';
import { searchSchoolsReducer } from './searchSchools';
import { selectSchoolsReducer } from './selectSchools';
import { addSchoolsReducer } from './addSchoolsReducer';

export const rootReducer = combineReducers({
  error: errorMsg,
  isLoading,
  allSchoolsReducer,
  searchSchoolsReducer,
  selectSchoolsReducer,
  addSchoolsReducer
});