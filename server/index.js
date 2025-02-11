import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import session from 'express-session'
import cookieParser from 'cookie-parser'
import passport from 'passport'
import './strategies/jwtStrategy.js'
import "./strategies/localStrategy.js"
import authRouter from "./auth/authIndex.js"
import userRouter from './user/userIndex.js'

const port = process.env.PORT || 8000

const cookieSecret = process.env.COOKIE_SECRET || 'secret'
const sessionSecret = process.env.SESSION_SECRET || 'secret'

const app = express()
app.use(express.json())
app.use(cookieParser(cookieSecret))

// CORS
// Get whitelisted domains from env
const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : []
// Set CORS options
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    }
    else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true
}
// Use CORS
app.use(cors(corsOptions))


// Sessions, default
app.use(session({}))


// Add Passport
app.use(passport.initialize());
app.use(passport.session());

// app.get('/', (req, res) => {
//   res.send('Your Server says Hello!!')
// })

app.use("/auth", authRouter)
app.use("/users", userRouter)

// app.listen(port, () => {
//   console.log(`Template listening on port ${port}`)
// })

app.all('*', (req, res) =>{
  res.status(404).json({
      success: false,
      data: '404'
  })
})


try {
  const mongoURL = process.env.MONGODB_URL || ""
  await mongoose.connect(mongoURL)
  console.log(`Template connected to database ${mongoURL}`)

  app.listen(port, () => {
    console.log(`Template app listening on port ${port}`)
  })
}
catch(err) {
  console.log(err)
}

