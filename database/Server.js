require("./config/db");

require("./models/PostCommunity");

const cors = require("cors");

const app = require("express")();

const port = 5002;

const CommunityPostRouter = require("./api/CommunityPageForm");
const PromotionsRouter = require("./api/PromotionsForm");

// eslint-disable-next-line import/order
const bodyParser = require("express").json;

app.use(cors());
app.use(bodyParser());

// router to promotions database
app.use("/promotions", PromotionsRouter);
// router to post database
app.use("/post", CommunityPostRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
