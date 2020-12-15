const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.inputValue
    default:
      return state
  }
}

export const filter = (inputValue) => {
  return {
    type: 'FILTER',
    inputValue
  }
}

export default filterReducer