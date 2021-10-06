const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({ //check UserSchema name matching with others
  // User_ID: {
  //   type: Number,
  //   required: false
  // },
  User_Name: {
    type: String,
    required: true
  },
  User_Category: {
    type: String,
  },
  User_Email: {
    type: String,
    required: true
  },
  User_Password: {
    type: String,
    required: true
  },
  User_Password2: {
    type: String,
    required: true
  }
 
});

UserSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
