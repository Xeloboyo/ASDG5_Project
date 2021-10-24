const express = require("express");

const app = express();

const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchemaCopy = require("../models/User");

// router.post("/form", (request, response) => { //post sends information to mongodb
//     response.send("send")
// })

router.post("/form", async (request, response) => {
    console.log(request.body)
    const {User_Name, User_Email, User_Category, User_Password, User_Password2} = request.body;
    console.log(User_Email.toLowerCase())
    try {
        const existingUser = await UserSchemaCopy.findOne({ User_Email });
        if (existingUser)
        return response.status(404).json({ message: "User already exist." });

        const hashedPassword = await bcrypt.hash(User_Password, 12);
        const hashedPasswordTwo = await bcrypt.hash(User_Password2, 12);

        const result = await UserSchemaCopy.create({
            User_Name: User_Name,
            User_Email: User_Email,
            User_Password: hashedPassword,
            User_Password2: hashedPasswordTwo,
            User_Category: User_Category
        })
        const token = jwt.sign(
            { name: result.User_Name, email: result.User_Email, id: result._id },
            "test",
            {
              expiresIn: "1h",
            }
          );
        response.status(200).json({ result, token });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Something went wrong" });
    }
    

    // const signedUpUser = new UserSchemaCopy({
    //     User_Name: request.body.User_Name,
    //     User_Email: request.body.User_Email,
    //     User_Password: hashedPassword,
    //     User_Password2: hashedPasswordTwo,
    //     User_Category: request.body.User_Category
    // })  
    // signedUpUser.save()
    // .then(data =>{
    //     const token = jwt.sign(
    //         { name: result.name, email: result.email, id: result._id },
    //         "test",
    //         {
    //           expiresIn: "1h",
    //         }
    //       );
    //     res.status(200).json({ result: data, token });
    // })
    // .catch(error => {
    //     response.json(error)
    // })

    // app.use(function(req, res, next) {
    //     res.header('Access-Control-Allow-Origin', '*');
    //     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    //     next();
    //   });//
})


module.exports= router