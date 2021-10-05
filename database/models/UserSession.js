const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSessionSchema = new Schema({
    User_ID: {
        type: Number,
        default: "-1",
      },
      timestamp: {
        type: Date,
        default: Date.now(),
      },
      User_isDeleted: {
        type: Boolean,
        default: false
      }

});


const UserSession = mongoose.model("UserSession", UserSessionSchema);

module.exports = UserSession;
