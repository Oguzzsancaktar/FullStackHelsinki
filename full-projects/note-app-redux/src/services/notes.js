import axios from '../../../../part6/redux-anecdotes-app/node_modules/axios'
const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {content ,important:false}
  const response = await axios.post(baseUrl, object)
  return response.data
}

const update = async (note) => {
  const response = await axios.put(baseUrl, note)
  return response.data
}

const noteService = { getAll , createNew , update}
export default noteService