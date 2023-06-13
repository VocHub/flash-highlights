import axios from 'axios'

const api = axios.create({
  baseURL: 'https://www.scorebat.com/'
})

export default api