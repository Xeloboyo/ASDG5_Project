const mongoose = require("mongoose");

const { Schema } = mongoose;

const CommunityPostSchema = new Schema({
  // Post_Community_ID: Number,
  Post_Community_Title: String,
  Post_Community_Category: String,
  Post_ID: Number,
});

const PostCommunity = mongoose.model("PostCommunity", CommunityPostSchema);

module.exports = PostCommunity;
