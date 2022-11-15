import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  salt: String,
  admin: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
