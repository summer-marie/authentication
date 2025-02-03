import "dotenv/config";
import express from "express";
import cors from 'cors'
import passport from 'passport';
import './strategies/local-strategy.js' 

const app = express();
app.use(express.json())
app.use(cors())
const port = 8000;

app.get('/', (req, res) => {
  res.send('Your Server says Hello!!')
})

app.use(passport.initialize())
app.use(passport.session())

// app.use(routes)

app.post('/api/auth', passport.authenticate('local'), (request, respnse) => {})

app.listen(port, () => {
  console.log(`Template app listening on port ${port}`)
})