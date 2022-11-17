import { config } from "dotenv";
config();

console.log(process.env.MONGO_URI);

export const MONGO_URI =
  process.env.MONGO_URI || "mongodb://localhost/basic-auth-example";
