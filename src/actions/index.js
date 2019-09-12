export const getAllSchools = schools => ({
  type: 'GET_SCHOOLS',
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