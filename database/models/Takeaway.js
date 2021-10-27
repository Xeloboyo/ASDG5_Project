const mongoose = require("mongoose");

const { Schema } = mongoose;

const UserSchema = new Schema({
  Product_Name: String,
  Product_Description: String,
  Product_OrderTime: String,
  Product_Quantity: Number,
  Product_Price: Number,
  Product_Total: Number
}); 

//C: creating receipt, R: removing product off checkout order, U: updating quantity of order, D: delete a product off order.

const Post = mongoose.model("Takeaway", UserSchema);

module.exports = Takeaway;