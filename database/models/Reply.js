const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReplySchema = new Schema({
  Post_Reply_Comment: String,
  Post_Edited: Boolean,
  User_ID: String,
  Replying_to: String,
});

const PostReply = mongoose.model("PostReply", ReplySchema);

module.exports = PostReply;