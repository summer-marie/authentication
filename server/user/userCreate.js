import mongoose from 'mongoose'
import * as argon2 from "argon2"
import userModel from './userModel.js'

const userCreate = async (req, res, done) => {
  const {
    firstName,
    lastName,
    email,
    password,
    authStrategy = 'local',
  } = req.body
  console.log(firstName, lastName, email, password, authStrategy)

   // Hash password
   const hashedPassword = await argon2.hash(password)

  const buildUser = await userModel.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    authStrategy,
  })
  res.status(200).json({ message: 'Working, Yay!!!' })
}

export default userCreate
