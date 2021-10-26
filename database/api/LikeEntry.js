const express = require("express");

const router = express.Router();

const LikeEntry = require("../models/LikeEntry");

//Get Likes by postID
router.get("/post/:id", (req, res) => {
   LikeEntry.find({
       Post_ID: req.params.id
   }) 
   .then( result => {
       res.json({
           status: "SUCCESS",
           message: "success to get number of likes",
           data: result
       })
   })
   .catch( err => {
       res.json({
           status: "FAILED",
           message: "Failed to get number of likes " + err
       })
   });
});

//Add a like entry
router.post("/add", (req, res) => {
    let {User_ID, Post_ID } = req.body;

    if (!User_ID || !Post_ID) {
        res.json({
            status: "FAILED",
            message: "Empty ID"
        });
    } else {
        const newLike = new LikeEntry({
            User_ID,
            Post_ID
        });

        newLike.save()
        .then(result => {
            res.json({
                status: "SUCCESS",
                message: "Like Added Successfully",
                data: result,
            })
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred while adding like"
            })
        })
    }
})

//Delete a like entry
router.delete("/:id", (req, res) => {
    LikeEntry.findByIdAndDelete(req.params.id)
    .then(
        res.json({
            status: "SUCCESS",
            message: "Like Deleted!"
        })
    )
    .catch(err => {
        res.json({
            status: "FAILED",
            message: "Like Find by id and delete failed!" + err
        })
    });
});

module.exports = router;