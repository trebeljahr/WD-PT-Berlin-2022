import express from "express";
import { config } from "dotenv";
import cors from "cors";
import axios from "axios";
import fileUpload from "express-fileupload";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { connectToMongoose } from "./db";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

config();

await connectToMongoose();

const app = express();
const PORT = process.env.PORT || 5000;
const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || "http://localhost:3000";

app.use(cors({ origin: CLIENT_ORIGIN }));
app.use(fileUpload({ createParentPath: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const publicFolderLocation = path.join(__dirname, "public");
app.use(express.static(publicFolderLocation));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.post("/form-handler", (req, res) => {
  console.log(req.body);

  res.json({ message: "Success!" });
});

app.put("/file-upload", async (req, res) => {
  console.log(req.files);
  await req.files.image.mv(
    path.join(publicFolderLocation, req.files.image.name)
  );
  // BASE_URL + "/" + req.files.image.name
  res.json({ url: req.files.image.name });
});

app.get("/pokemon/:slug", async (req, res) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.glitch.me/v1/pokemon/${req.params.slug}`
    );
    console.log(data);
    res.json({ data });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log("Listening on PORT", PORT);
});
