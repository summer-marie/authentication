import "dotenv/config"
import express from "express"
import cors from "cors"
import session from "express-sessions"
import cookieParser from "cookie-parser"
import passport from "passport"

const cookieSecret = process.env.COOKIE_SECRET || "secret"

const app = express();
app.use(express.json());
app.use(cookieParser(cookieSecret))
app.use(cors());
const port = 8000;


app.get("/", (req, res) => {
  res.send("Your Server says Hello!!");
});

app.listen(port, () => {
  console.log(`Template app listening on port ${port}`);
});
