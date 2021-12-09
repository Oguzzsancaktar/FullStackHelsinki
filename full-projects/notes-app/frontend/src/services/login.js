import axios from 'axios'
const baseUrl = '/api/login'


const login = async credantials => {
  const response = await axios.post(baseUrl, credantials)
  return response.data
}


export default login