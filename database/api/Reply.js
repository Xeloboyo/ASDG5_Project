const express = require("express");

const router = express.Router();

const PostReply = require("../models/Reply");

//Find All replies by review post id
router.get("/review/:id", (req, res) => {
    PostReply.find({
        Replying_to: req.params.id
    },
    {
        _id: 1
    })
    .then( result => {
        res.json({
            status: "SUCCESS",
            message: "success to find replies by review post id id",
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

//respon the reply by reply Post id
router.get("/:id", (req, res) => {
    PostReply.findById(req.params.id)
    .then(result => {
        res.json({
            status: "SUCCESS",
            message: "Reply Post Found!",
            data: result,
        })
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Reply Post Not Found! " + err,
        })
    })
});

// add the review into database
router.post("/add", (req, res) => {
    let {Post_Reply_Comment, User_ID, Replying_to} = req.body;
    Post_Reply_Comment = Post_Reply_Comment.trim();

    if (Post_Reply_Comment == "") {
        res.json({
            status: "FAILED",
            message: "Empty Comment!"
        });
    } else {
        const newReply = new PostReply({
            Post_Reply_Comment,
            Post_Edited: false,
            User_ID,
            Replying_to
        });

        newReply.save()
        .then(result => {
            res.json({
                status: "SUCCESS",
                message: "Post Reply Successfully",
                data: result,
            })
        })
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "An error occurred whild adding Reply Post " + err
            })
        })
    }
});

// update the reply in the database by id
router.post("/update/:id", (req, res) => {
    PostReply.findById(req.params.id)
    .then(reply => {
        reply.Post_Reply_Comment = req.body.Post_Reply_Comment;
        Post_Edited = true;
        //User_ID = req.body.User_ID;
        //Replying_to = req.body.Replying_to;

        if (reply.Post_Reply_Comment == "") {
            res.json({
                status: "FAILED",
                message: "Input Empty Comment!!"
            })
        } else {
        reply.save()
            .then(
                res.json({
                    status: "SUCCESS",
                    message: "Reply Updated!"
                })
            )
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message: "Reply Update Failed! " + err
                })
            });
        }
    })
    .catch( err => {
        res.json({
            status: "FAILED",
            message: "Reply Not Found when try to update! " + err
        })
    });
});

//delete a Reply by its object id
router.delete("/:id", (req, res) => {
    PostReply.findByIdAndDelete(req.params.id)
        .then(
            res.json({
                status: "SUCCESS",
                message: "Reply Deleted!"
            })
        )
        .catch(err => {
            res.json({
                status: "FAILED",
                message: "Reply Find by id and delete failed!" + err
            })
        });
});

module.exports = router;

