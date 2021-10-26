const express = require("express");

const app = express();

const router = express.Router()
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ReservationSchemaCopy = require("../models/Reservations");

// router.post("/form", (request, response) => { //post sends information to mongodb
//     response.send("send")
// })

router.post("/form", async (request, response) => {
    console.log(request.body)
    const {Reservation_Time_From,Reservation_Time_To,Restaurant_ID,User_Name,Reservation_Date} = request.body;
    try {
        const existingUser = await ReservationSchemaCopy.findOne({ Restaurant_ID });
        if (existingUser)
        return response.status(404).json({ message: "User already exist." });

        const hashedPassword = await bcrypt.hash(User_Password, 12);
        const hashedPasswordTwo = await bcrypt.hash(User_Password2, 12);

        const result = await ReservationSchemaCopy.create({
            Reservation_ID: Number,
            Reservation_Date: Date,
            Reservation_Hour: Number,
            Reservation_Minute: Number,
            User_ID: Number,
            RejectionID: Number,
        })
        response.status(200).json({ result });
    } catch (error) {
        console.log(error);
        response.status(500).json({ message: "Something went wrong" });
    }
})


module.exports= router