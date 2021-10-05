const express = require('express');
const cors = require('cors');
//const mongoose = require('mongoose');

// configures to access dotenv environment
require('dotenv').config();

// create express app
const app = express();
const port = process.env.PORT || 5002;

// middleware
app.use(cors());
app.use(express.json());

require("./config/db");
require("./models/PostCommunity");

// restaurant 
const restaurantRouter = require("./api/RestaurantForm");
app.use('/restaurant', restaurantRouter);
// menu
const menuRouter = require("./api/MenuForm");
app.use('/menu', menuRouter);

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;
app.use(bodyParser());

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});






/*
// set storage for adding image - multer
const storage = multer.diskStorage({
    destination: function (req, file, cb){
      cb(null, 'images');
    },
    filename: function (req, file, db){
      cb(null, uuidv4() + '-' + Date.now() + path.extreme(file.originalname));
    }
});
// filter specific type of image file
const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
  if (allowedFileTypes.includes(file.mimetype)) {
    cd(null, true);
  } else {
    cb(null, false);
  }
}

let upload = multer({ storage, fileFilter});

router.route('./restaurantadd').post(upload.single('photo'), (req, res) => {
  const Restaurant_ID = req.body.Restaurant_ID;
  const Restaurant_Name = req.body.Restaurant_Name;
  const Restaurant_Email = req.body.Restaurant_Email;
  const Restaurant_Address = req.body.Restaurant_Address;
  const Restaurant_Phone_Number = req.body.Restaurant_Phone_Number;
  const Restaurant_Rating = req.body.Restaurant_Rating;
  const Restaurant_Capacity = req.body.Restaurant_Capacity;
  const Restaurant_Image = req.file.filename;

  const newRestaurantData = {
    Restaurant_ID,
    Restaurant_Name,
    Restaurant_Email,
    Restaurant_Address,
    Restaurant_Phone_Number,
    Restaurant_Rating,
    Restaurant_Capacity,
    Restaurant_Image
  }

   const newRestaurant = new Resaurant(newRestaurantData);

   newRestaurantData.save().then(() => res.json('Restaurant Added'))
    .catch(err => res.status(400).json('Error: ' + err ));
})*/