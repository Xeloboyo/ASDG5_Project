const mongoose = require("mongoose");

const { Schema } = mongoose;

const LikeEntrySchema = new Schema({
  User_ID: String,
  Post_ID: String,
});

const LikeEntry = mongoose.model("LikeEntry", LikeEntrySchema);

module.exports = LikeEntry