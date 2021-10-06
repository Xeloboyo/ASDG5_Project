const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReviewSchema = new Schema({
  Post_Review_Title: String,
  Post_Review_Rate: Number,
  Post_Review_Comment: String,
  Post_Edited: Boolean,
  User_ID: String,
  Venue_ID: String,
});

const PostReview = mongoose.model("PostReview", ReviewSchema);

module.exports = PostReview;