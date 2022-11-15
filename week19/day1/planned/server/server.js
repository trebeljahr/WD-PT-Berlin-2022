import("dotenv/config");

import express from "express";
import cors from "cors";
import helmet from "helmet";
import csrf from "csurf";
import cookieParser from "cookie-parser";
import authRoutes from "./auth.js";
import session from "express-session";
import { connectToMongoose } from "./db.js";
import { isLoggedIn } from "./routeGuards.js";

const app = express();
const PORT = process.env.port || 5005;

await connectToMongoose();

app.set("trust proxy", 1);
app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: true,
    saveUninitialized: false,
    cookie: {
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 600000, // 60 * 1000 ms * 10 === 10 min
    },
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));

const csrfProtection = csrf();
//{
// cookie: {
//   httpOnly: true,
//   secure: process.env.NODE_ENV === "production",
//   maxAge: 3600, // 1-hour
// },
// }

// app.use(csrfProtection);

app.get("/api/csrf-token", csrfProtection, (req, res, next) => {
  res.json({ csrfToken: req.csrfToken() });
});

app.get("/api/message", csrfProtection, isLoggedIn, (req, res, next) => {
  res.json({ message: "Hello World" });
});

app.get("/api/profile", csrfProtection, isLoggedIn, (req, res, next) => {
  const { username } = req.session.currentUser;
  res.json({ message: "Here is the user!", user: { username } });
});

app.use("/api", authRoutes);

app.listen(PORT, () => {
  console.log("Listening on " + PORT);
});
