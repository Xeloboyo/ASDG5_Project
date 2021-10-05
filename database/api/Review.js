const express = require("express");

const router = express.Router();

const PostReview = require("../models/Review");

//Find all reviews by user id
router.get("/User/:id", (req, res) => {
    PostReview.find({
        User_ID: req.params.id
    })
    .then( result => {
        res.json({
            status: "SUCCESS",
            message: "success to find reviews by user id",
            data: result
        })
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Failed get reviews by user id " + err
        })
    });
});

//Find All reviews by restaurant id
router.get("/Restaurant/:id", (req, res) => {
    PostReview.find({
        Venue_ID: req.params.id
    })
    .then( result => {
        res.json({
            status: "SUCCESS",
            message: "success to find reviews by restaurant id",
            data: result
        })
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Failed get reviews by restaurant id " + err
        })
    });
});

//respon the review by review Post id
router.get("/:id", (req, res) => {
    PostReview.findById(req.params.id)
    .then(result => {
        res.json({
            status: "SUCCESS",
            message: "Review Post Found!",
            data: result,
        })
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Review Post Not Found! " + err,
        })
    })
});

// add the review into database
router.post("/add", (req, res) => {
    let {Post_Review_Title, Post_Review_Rate, Post_Review_Comment, User_ID, Venue_ID} = req.body;
    Post_Review_Title = Post_Review_Title.trim();
    Post_Review_Comment = Post_Review_Comment.trim();

    if (Post_Review_Title == "" || Post_Review_Comment == "") {
        res.json({
            status: "FAILED",
            message: "Empty Input Fields!"
        });
    } else {
        const newReview = new PostReview({
            Post_Review_Title,
            Post_Review_Rate,
            Post_Review_Comment,
            Post_Edited: false,
            User_ID,
            Venue_ID
        });

        newReview.save()
        .then(result => {
            res.json({
                status: "SUCCESS",
                message: "Post Review Successfully",
                data: result,
            })
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred whild adding Review Post " + err
            })
        })
    }
});

// update the review in the database by id
router.post("/update/:id", (req, res) => {
    PostReview.findById(req.params.id)
    .then(review => {
        review.Post_Review_Title = req.body.Post_Review_Title;
        review.Post_Review_Rate = req.body.Post_Review_Rate;
        review.Post_Review_Comment = req.body.Post_Review_Comment;
        Post_Edited = true;
        //User_ID = req.body.User_ID;
        //Venue_ID = req.body.Venue_ID;

        if (review.Post_Review_Title == "" || review.Post_Review_Comment == "") {
            res.json({
                status: "FAILED",
                message: "Input Fields Empty!!"
            })
        } else {
        review.save()
            .then(
                res.json({
                    status: "SUCCESS",
                    message: "Review Updated!"
                })
            )
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message: "Review Update Failed! " + err
                })
            });
        }
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Review Not Found when try to update! " + err
        })
    });
});

//delete a review by its object id
router.delete("/:id", (req, res) => {
    PostReview.findByIdAndDelete(req.params.id)
        .then(
            res.json({
                status: "SUCCESS",
                message: "Review Deleted!"
            })
        )
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "Review Find by id and delete failed!" + err
            })
        });
});

module.exports = router;
