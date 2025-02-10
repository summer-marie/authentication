import { Router } from 'express'
import passport from 'passport'
import authLogin from './authLogin.js'
import authStatus from './authStatus.js'
import authLogout from './authLogout.js'


const authRouter = Router()

// Hits our strategy then, finds the user (then serializes our user), finally get our response
authRouter.post('/login', passport.authenticate('local'), authLogin)
authRouter.get('/status',  authStatus)
authRouter.post('/logout',  authLogout)

// authRouter.get("/status", passport.authenticate("jwt", { session: false }), status)
// authRouter.post("/logout", passport.authenticate("jwt", { session: false }), logout)


export default authRouter
