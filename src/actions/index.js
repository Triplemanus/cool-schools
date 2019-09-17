export const getAllSchools = schools => ({
  type: 'GET_SCHOOLS',
  schools
});

export const searchSchools = schools => ({
  type: 'SEARCH_SCHOOLS',
  schools
});

export const addSchools = schools => ({
  type: 'ADD_SCHOOLS',
  schools
});

export const selectSchools = schools => ({
  type: 'SELECT_SCHOOLS',
  schools
});

export const displaySchools = schools => ({
  type: 'DISPLAY_SCHOOLS',
  schools
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

 export const isLoading = isLoading => ({
   type: 'IS_LOADING',
   isLoading
 });