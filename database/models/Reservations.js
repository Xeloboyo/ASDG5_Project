const mongoose = require("mongoose");

const { Schema } = mongoose;

const ReservationSchema = new Schema({
  Reservation_ID: Number,
  Reservation_Date: Date,
  Reservation_Hour: Number,
  Reservation_Minute: Number,
  User_ID: Number,
  RejectionID: Number,
});

const Post = mongoose.model("Post", UserSchema);

module.exports = Post;
