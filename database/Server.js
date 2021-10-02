require("./config/db");

require("./models/PostCommunity");

require("./models/User");

const app = require("express")(); 

const port = 5002;

const UserRouter = require("./api/CommunityPageForm");

const Routes = require("./api/Register"); //

const cors = require("cors"); //
 
// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(bodyParser());

app.use(cors());

app.use("/register", Routes); //

app.use("/post", UserRouter); 

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
