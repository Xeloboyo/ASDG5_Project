const mongoose = require("mongoose");

const { Schema } = mongoose;

const MenuSchema = new Schema({
    // menu data
    Menu_Product_ID: Number, 
    Menu_Product_Name: String,
    Menu_Product_Description: String,
    Menu_Product_Price: Number,
    
    /*Menu_Product_Image: {
        data: Buffer,
        contentType: String
    }*/
    
});

const Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;
