/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
require("./config/db");

require("./models/PostCommunity");

const cors = require("cors");

const app = require("express")();
require("./models/User");

const mongoose = require("mongoose");

const port = 5002;

const CommunityPostRouter = require("./api/CommunityPageForm");
const PromotionsRouter = require("./api/PromotionsForm");

const Routes = require("./api/Register"); //

const UserSchemaCopy = require("./models/User");

// const userSchema = new mongoose.Schema({
//   User_Email: String,
//   User_Password: String,
// });

// const User = new mongoose.model("User", userSchema);

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(cors());
app.use(bodyParser());

// router to promotions database
app.use("/promotions", PromotionsRouter);
// router to post database
app.use("/post", CommunityPostRouter);
app.use(cors());

app.use("/register", Routes);

app.post("/login", (req, res) => {
  console.log(req.body);
  const { User_Email, User_Password } = req.body;
  // eslint-disable-next-line object-shorthand
  UserSchemaCopy.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Password === user.User_Password) {
        // eslint-disable-next-line object-shorthand
        res.json({ message: "login success", user: user });
      } else {
        res.json({ message: "wrong credentials" });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
