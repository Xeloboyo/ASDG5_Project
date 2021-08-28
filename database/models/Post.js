const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  Post_ID: Number,
  Post_Paragraph: String,
  Post_Edited: Boolean,
  User_ID: Number,
});

const Post = mongoose.model("Post", UserSchema);

module.exports = Post;
