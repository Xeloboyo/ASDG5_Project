// set up router
const express = require('express');
const router = express.Router();

// import mongodb menu model
let Menu = require('../models/Menu');

// gets all menus
router.route('/').get((req, res) => {
    Menu.find()
        .then(restaurant => res.json(restaurant))
        .catch(err => res.status(400).json('Error' + err));
});

// create a menu
router.post('/createmenu', (req, res) =>{
    // get input from body request
    let {Menu_Product_ID, Menu_Product_Name, 
        Menu_Product_Description, Menu_Product_Price} = req.body;

    // tirm off white spaces
    Menu_Product_ID = Menu_Product_ID.trim();
    Menu_Product_Name = Menu_Product_Name.trim();
    Menu_Product_Description = Menu_Product_Description.trim();
    Menu_Product_Price = Menu_Product_Price.trim();

    // check if fields are empty
    if ( 
        Menu_Product_ID == "" ||
        Menu_Product_Name == "" ||
        Menu_Product_Description == "" ||
        Menu_Product_Price == ""
    ) {
        res.json({
            status: "FAILED",
            message: "Empty input fields!",
        });
    } else {
        // create a new menu
        const NewMenu = new Menu({
            Menu_Product_ID,
            Menu_Product_Name,
            Menu_Product_Description,
            Menu_Product_Price
        });

        // save the new menu
        NewMenu.save().then((result) => {
                res.json({
                status: "SUCCESS",
                message: "Successfully Added Restaurant",
                data: result,
            });
        })
        .catch((err) => {
            res.json({
                status: "FAILED",
                message: "An error occured while saving a restaurant",
            })
            console.log(err);
        }) 
    }
})

// find a menu by id
router.route('/:id').get((req, res) => {
    Menu.findById(req.params.id)
        .then(menu => res.json(menu))
        .catch(err => res.status(400).json('Error: ' + err));
});

// find menu by id and delete
router.route('/:id').delete((req, res) =>{
    Menu.findByIdAndDelete(req.params.id)
        .then(() => res.json('Menu Deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

// update by menu id
router.route('/update/:id').post((req, res) => {
    Menu.findById(req.params.id)
        .then(menu => {
            menu.Menu_Product_ID = req.body.Menu_Product_ID;
            menu.Menu_Product_Name = req.body.Menu_Product_Name;
            menu.Menu_Product_Description = req.body.Menu_Product_Description;
            menu.Menu_Product_Price = req.body.Menu_Product_Price;

            menu.save()
                .then(() => res.json('Menu updated.'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: '+ err)); 
});

module.exports = router;