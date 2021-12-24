const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':

      return state = action.filter
  
    default:
     break
  }
  return state
}

export const filterAnecdote = (filter) => {
  return {
    type: 'FILTER',
    filter
  }
}

export default filterReducer