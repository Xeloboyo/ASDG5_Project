require('./config/db');

const cors = require('cors');

const app = require('express')();
const mongoose = require('mongoose');

const port = process.env.PORT || 5002;

// For accepting post form data
// eslint-disable-next-line import/order
const bodyParser = require('express').json;

app.use(cors());
app.use(bodyParser());

// lily features
require('./models/PostCommunity');

const CommunityPostRouter = require('./api/CommunityPageForm');
const PromotionsRouter = require('./api/PromotionsForm');

app.use('/promotions', PromotionsRouter);
app.use('/post', CommunityPostRouter);
// app.use('/post', UserRouter);

/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
require('./config/db');

// configures to access dotenv environment
require('dotenv').config();

// create express app

require('./models/User');

// middleware
app.use(cors());
// app.use(express.json());

require('./config/db');
require('./models/PostCommunity');

// restaurant
const restaurantRouter = require('./api/RestaurantForm');

app.use('/restaurant', restaurantRouter);

// menu
const menuRouter = require('./api/MenuForm');

app.use('/menu', menuRouter);

const TicketRouter = require('./api/TicketActions');
const AnalyticsRouter = require('./api/AnalyticsActions');

app.use('/ticket', TicketRouter);
app.use('/analytics', AnalyticsRouter);
// app.use(cors());

// ismail features
require('./models/User');
// const UserSchemaCopy = require('./models/User');
const Routes = require('./api/Register'); //


// const Route = require("./api/Login"); //

app.use('/register', Routes);
const LoginRoute = require('./api/Login'); //

const ReviewRouter = require('./api/Review');
const ReplyRouter = require('./api/Reply');

const Route = require('./api/Login'); //

// const RouteDelete = require("./api/Delete");

const UserSchemaCopy = require('./models/User');

// const User = new mongoose.model("User", userSchema);

// app.post('/login', (req, res) => {
//   console.log(req.body);
//   const { User_Email, User_Password } = req.body;
//   UserSchemaCopy.findOne({ User_Email }, (err, user) => {
//     if (user) {
//       if (User_Password === user.User_Password) {
//         res.json({ message: 'login success', user });
//       } else {
//         res.json({ message: 'wrong credentials' });
//       }
//     }\
//   });
// });

app.use(cors());
app.use(bodyParser());

// router to promotions database
app.use('/promotions', PromotionsRouter);
// router to post database
app.use('/post', CommunityPostRouter);
app.use(cors());

app.use('/register', Routes); //

// Review and Reply
app.use('/review', ReviewRouter);
app.use('/reply', ReplyRouter);

app.use('/login', LoginRoute); //


// delete user
app.delete('/delete', (req, res) => {
  console.log(req.body);
  const { _id } = req.body;
  UserSchemaCopy.findByIdAndDelete({ _id }, (err, user) => {
    if (user) {
      if (_id === user._id) {
        res.json({ message: 'deleted', user });
      } else {
        res.json({ message: 'deleted' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
