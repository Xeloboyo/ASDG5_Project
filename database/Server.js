require("./config/db");

require("./models/PostCommunity");

require("./models/User");

const app = require("express")(); 
const mongoose = require("mongoose");

const port = 5002;

const UserRouter = require("./api/CommunityPageForm");

const Routes = require("./api/Register"); //

const Route = require("./api/Login"); //

// const RouteDelete = require("./api/Delete"); 

const cors = require("cors"); //
const UserSchemaCopy = require("./models/User");

// const userSchema = new mongoose.Schema({
//   User_Email: String,
//   User_Password: String,
// });

// const User = new mongoose.model("User", userSchema);
 
// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(bodyParser());

app.use(cors());

app.use("/register", Routes);//

app.use("/post", UserRouter); 

app.delete("/delete", Route);




//login user
app.post("/login", (req, res) => {
  console.log(req.body)
  const { User_Email,  User_Password } = req.body;
  UserSchemaCopy.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Password === user.User_Password) {
        res.json({ message: "login success", user: user });
      } else {
        res.json({ message: "wrong credentials" });
      }
    }
  });
});

//delete user
app.delete("/delete", (req, res) => {
  console.log(req.body)
  const { User_Email } = req.body;
  UserSchemaCopy.findOne({ User_Email: User_Email }, (err, user) => {
    if (user) {
      if (User_Email === user.User_Email) {
        res.json({ message: "deleted", user: user });
      } else {
        res.json({ message: "error" });
      }
    }
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
