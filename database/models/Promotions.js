const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  // Promotions_ID: Number,
  Promotions_Title: String,
  Promotions_Categories: String,
  Promotions_Description: String,
  Promotions_Object: { type: Array, default: [] },
  User_ID: Number,
});

const Promotions = mongoose.model("Promotions", UserSchema);

module.exports = Promotions;
