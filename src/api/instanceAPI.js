import axios from 'axios'
import { clientID, secretKey } from './google.token.js'

const instanceAPI = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  auth: {
    username: clientID,
    password: secretKey,
  },
})

export default instanceAPI
