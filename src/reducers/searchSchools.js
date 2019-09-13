export const searchSchoolsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SEARCH_SCHOOLS':
      return action.schools;
    default: 
      return state;
  }
}