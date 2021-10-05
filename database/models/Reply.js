const mongoose = require("mongoose");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types.ObjectId;

const ReplySchema = new Schema({
  Replying_to: ObjectId,
  Post_ID: ObjectId,
});

const PostReply = mongoose.model("PostReply", ReplySchema);

module.exports = PostReply;