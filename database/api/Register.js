const express = require("express");

const app = express();

const router = express.Router()

const UserSchemaCopy = require("../models/User");

// router.post("/form", (request, response) => { //post sends information to mongodb
//     response.send("send")
// })

//could be FormSignup and  FormSignUpRestaurant, make a second one of each for the  restaurant admin registration
router.post("/form", (request, response) => {
    const signedUpUser = new UserSchemaCopy({
        User_Name:request.body.User_Name,
        User_Dob:request.body.User_Dob,
        User_Email:request.body.User_Email,
        User_Password:request.body.User_Password,
        User_Password2:request.body.User_Password2
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })

    app.use(function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
      });//
})


module.exports= router