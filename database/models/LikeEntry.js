const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types.ObjectId;

const LikeEntrySchema = new Schema({
  User_ID: ObjectId,
  Post_ID: ObjectId,
});

const LikeEntry = mongoose.model("LikeEntry", LikeEntrySchema);

module.exports = LikeEntry