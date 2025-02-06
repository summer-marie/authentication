import { Router } from 'express'
import passport from 'passport'

const authRouter = Router()

authRouter.post('/', passport.authenticate("local"), (req, res) =>
  res.status(200).json({ message: 'Success!! from authIndex' })
)

export default authRouter
