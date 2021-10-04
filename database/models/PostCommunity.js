const mongoose = require("mongoose");

const { Schema } = mongoose;

// community page mongoDb schema
const CommunityPostSchema = new Schema({
  Post_Community_Title: String,
  Post_Community_Category: String,
  Post_Paragraph: String,
  Post_Edited: Boolean,
  User_ID: String,
});

const PostCommunity = mongoose.model("PostCommunity", CommunityPostSchema);

module.exports = PostCommunity;
