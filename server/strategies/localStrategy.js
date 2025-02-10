import passport from 'passport'
import { Strategy } from 'passport-local'
import userModel from '../user/userModel.js'

passport.serializeUser((user, done) => {
  // console.log('serializeUser', user)
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  // console.log('deserializedUser', id)
  try {
    // Both work, so i kept them both for ref.
    // const findUser = await userModel.findById(id)
    const findUser = await userModel.findOne({ _id: id })
    if (!findUser) {
      throw new Error('Invalid credentials')
    }
    done(null, findUser)
  } catch (err) {
    done(err, null)
  }
})

export default passport.use(
  // passing in my instance
  new Strategy({ usernameField: 'email' }, async (username, password, done) => {
    // console.log('username', username, 'password', password)
    // search users in db
    try {
      console.log("local strategy", username, password)
      const user = await userModel.findOne({ email: username })
      console.log('user', user)
      // no user found - err
      if (!user) {
        throw new Error('user not found')
      }
      // user found but password doesn't match - throw err
      if (user.password !== password) {
        throw new Error('user login info invalid')
      }
      // if both cases are false - call done function
      done(null, user)
    } catch (err) {
      done(err, null)
    }
  })
)
