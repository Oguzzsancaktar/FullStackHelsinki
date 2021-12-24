// const getId = () => (100000 * Math.random()).toFixed(0)

import anecdoteService from "../services/anecdote"

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case "INIT_ANECDOTES":
      return action.data
    
    case 'VOTE_ANECDOTE':
      const noteFotVote = state.find(anecdote => anecdote.id === action.data.id)
      const votedNote = {
        ...noteFotVote,
        votes: noteFotVote.votes + 1
      }
      return state.map(a => a.id === action.data.id ? votedNote : a)

    case 'ADD_ANECDOTE':
      const newAnecdote = action.data
      return state.concat(newAnecdote)
    default:
      break;
  }

  return state
}

export const initializeAnecdotes = (data) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: "INIT_ANECDOTES",
      data:anecdotes
    })
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE_ANECDOTE',
    data: {
      id
    }
  }
}

export const addAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.add(data)
    dispatch({
      type: 'ADD_ANECDOTE',
      data: newAnecdote
    })
  }
}

export default anecdoteReducer