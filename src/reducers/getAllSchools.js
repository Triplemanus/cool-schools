export const allSchoolsReducer = (state=[], action) => {
  switch(action.type) {
    case 'GET_SCHOOLS':
      return action.schools;
    default: 
      return state;
  }
}