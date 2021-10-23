// set up router
const express = require('express');
const router = express.Router();

// import schema
let ProductSchema = require('../models/ProductSchema');

let Menu = require('../models/Menu')
let Restaurant = require('../models/Restaurant')

/*
    Lists of API for takeaway:
    - Show resaurant list
    - Show menu item for each respective resaurant
    - Add menu item to checkout(menu item quantity)
    - Confirm order  ( input name, email and credit card details)&(display quantity of items and total price)
*/

// gets all restaurant
router.get("/", (req, res) => {
    Restaurant.find()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error' + err));
});

router.get("/:id", (req, res) => {
    const {id} = req.params;
    console.log(id)
    Menu.find({Restaurant_Name: id})
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error' + err));
});


// create an order
router.post('/checkout', (req, res) =>{
    // get input from body request
    // let {Product_Quantity, Product_TotalPrice, Product_UserName, Product_UserEmail, Product_menuItems} = req.body;

    // check if fields are empty
    
    // const Checkout = new ProductSchema({

    //     Product_Quantity,
    //     Product_TotalPrice,
    //     Product_UserName,
    //     Product_UserEmail
    // });

    ProductSchema.create(req.body)
        .then(product => res.json(product))
        .catch(err => console.log(err))
})

// find a menu by id
router.route('/:id').get((req, res) => {
    Menu.findById(req.params.id)
        .then(menu => res.json(menu))
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router; 