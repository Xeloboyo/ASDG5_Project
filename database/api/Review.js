/* eslint-disable prettier/prettier */
const express = require("express");

const router = express.Router();

const PostReview = require("../models/Review");

// respon the review by review Post id
router.post("/review", (req, res) => {
    
});

// add the review into database with restaurant id
router.post("/add", (req, res) => {
    let {Post_Review_Title, Post_Review_Rate, Post_ID, Venue_ID} = req.body;
    Post_Review_Title = Post_Review_Title.trim();

    if (Post_Review_Title == "") {
        res.json({
            status: "FAILED",
            message: "Empty Title!"
        });
    } else {
        const newReview = new PostReview({
            Post_Review_Title,
            Post_Review_Rate,
            Post_ID,
            Venue_ID
        });

        newReview.save()
        .then(result => {
            res.json({
                status: "SUCCESS",
                message: "Review Post Added Successfully",
                data: result,
            })
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred whild adding Review Post"
            })
        })
    }
});

// update the review in the database which has id
router.post("/review/update/:id", (req, res) => {

});

router.delete("/review/:id", (req, res) => {

});

module.exports = router;
