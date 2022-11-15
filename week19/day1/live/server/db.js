import mongoose from "mongoose";
import { MONGO_URI } from "./consts.js";

export async function connectToMongoose() {
  try {
    console.log(MONGO_URI);
    const x = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  } catch (err) {
    console.error("Error connecting to mongo: ", err);
  }
}
