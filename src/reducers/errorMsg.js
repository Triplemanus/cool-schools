export const errorMsg = (state= '', action) => {
  switch(action.type) {
    case 'HAS_FAILED':
      return action.errorMsg
    default:
      return state
  }
}