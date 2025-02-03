import passport from "passport";
import { Strategy } from "passport-local";
import { mockUsers } from "../utils/constants";

export default passport.use(
  // passing in my instance
  new Strategy((username, password, done) => {
    console.log(`username: ${username}`)
    console.log(`password: ${password}`)
    try {
      // search users in db
      const findUser = mockUsers.find((user) => user.username === username);
      // no user found - err
      if (!findUser) throw new error("user not found");
      // user found but password doesnt match - throw err
      if (findUser.password !== password)
        throw new error("user login information invalid");
      // if boths cases are false - call done function
      done(null, findUser);
    } catch (err) {
      // call the done function(takes in 2 args, also takes in a user)
      done(err, null);
    }
  })
);
