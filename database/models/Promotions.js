const mongoose = require("mongoose");

const { Schema } = mongoose;

// promotions mongoDb schema
const UserSchema = new Schema({
  Promotions_Title: String,
  Promotions_Categories: String,
  Promotions_Description: String,
  Promotions_Object: { type: Array, default: [] },
  User_ID: String,
});

const Promotions = mongoose.model("Promotions", UserSchema);

module.exports = Promotions;
