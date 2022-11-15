import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { connectToMongoose } from "./db.js";
import router from "./routes.js";
import session from "express-session";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

await connectToMongoose();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

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
app.use(cors({ origin: CLIENT_ORIGIN, credentials: true }));

app.use(fileUpload({ createParentPath: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicFolderLocation = path.join(__dirname, "public");
app.use(express.static(publicFolderLocation));

app.use(router);

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
