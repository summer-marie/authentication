import mongoose from 'mongoose'
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

  const buildUser = await userModel.create({
    firstName,
    lastName,
    email,
    password,
    authStrategy,
  })
  res.status(200).json({ message: 'Working, Yay!!!' })
}

export default userCreate
