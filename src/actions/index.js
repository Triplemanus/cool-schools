export const getAllSchools = schools => ({
  type: 'GET_SCHOOLS',
  schools
});

export const searchSchools = schools => ({
  type: 'SEARCH_SCHOOLS',
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

export const hasFailed = errorMsg => ({
  type: 'HAS_FAILED',
  errorMsg
});

 export const isLoading = isLoading => ({
   type: 'IS_LOADING',
   isLoading
 });