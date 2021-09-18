require("./config/db");

require("./models/PostCommunity");

const app = require("express")();

const port = 5002;

const UserRouter = require("./api/CommunityPageForm");

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(bodyParser());

app.use("/post", UserRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
