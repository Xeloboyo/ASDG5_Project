const mongoose = require("mongoose");

const { Schema } = mongoose;

const RestaurantSchema = new Schema({
    // restaurant data
    Restaurant_Name: String,
    Restaurant_Email: String,
    Restaurant_Address: String,
    Restaurant_Phone_Number: Number,
    Restaurant_Rating: Number,
    Restaurant_Capacity: Number,
    //Restaurant_Image: { type: String, required:true },
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;