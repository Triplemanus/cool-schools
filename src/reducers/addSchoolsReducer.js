export const addSchools = (state=[], action) => {
  switch(action.type) {
    case 'ADD_SCHOOLS':
      return [...state, action.schools];
    default:
      return state
  }
}