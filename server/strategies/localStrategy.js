import passport from 'passport'
import { Strategy } from 'passport-local'

export default passport.use(
  // passing in my instance
  new Strategy({ usernameField: 'email' }, (username, password, done) => {
    console.log("username", username, "password", password)
    // search users in db
    try {
      // const findUser = userModel.findOne({ email: username })

      // no user found - err
      if (!findUser) {
        throw new Error('user not found')
      }
      // user found but password doesn't match - throw err
      if (findUser.password !== password) {
        throw new Error('user login info invalid')
      }
      // if both cases are false - call done function
      done(null, findUser)
    } catch (err) {
      done(err, null)
    }
  })
)
