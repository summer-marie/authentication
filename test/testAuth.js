console.log("Hello Auth Test")

import 'dotenv/config'
import axios from 'axios'

const user = { email: "Shany_Jameson38@gmail.com", password: "test" }

const testAuth = await axios.post(`${process.env.SERVER_URL}/auth`, user)
console.log('testAuth', testAuth.data)