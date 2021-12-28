import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'
const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

export const add = async (content) => {
  const response = await axios.post(baseUrl, {content,votes:0})
  return response.data
}

export const update = async (id) => {
  const anecdotes = await getAll()
  const anecdoteForUpdate = anecdotes.find(a => a.id === id)
  const updatedAnecdote = {
    ...anecdoteForUpdate,
    votes:anecdoteForUpdate.votes + 1
  }
  const response = await axios.put(`${baseUrl}/${id}`, updatedAnecdote)
  return response.data
}

const anecdoteService = { getAll , add, update}
export default anecdoteService