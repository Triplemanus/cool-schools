export const selectSchoolsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SELECT_SCHOOLS':
      return action.schools;
    default:
      return state
  }
}


