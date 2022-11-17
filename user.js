const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    profileImg: {
      type: String,
    },
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "users",
  }
);
module.exports = mongoose.model("User", userSchema);
