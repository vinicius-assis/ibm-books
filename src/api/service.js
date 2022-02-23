import axios from 'axios'
import { clientID, secretKey } from './google.token.js'

const service = axios.create({
  baseURL: 'https://www.googleapis.com/books/v1',
  auth: {
    username: clientID,
    password: secretKey,
  },
})

export default service
