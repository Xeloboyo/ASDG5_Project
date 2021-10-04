require('./config/db');

const cors = require('cors');

const app = require('express')();
const mongoose = require('mongoose');

// const port = process.env.PORT || 5002;

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

// ricky features
require('./models/Ticket');
require('./models/Analytics');

const TicketRouter = require('./api/ticketActions');
const AnalyticsRouter = require('./api/analyticsActions');

app.use('/dashboard/ticket', TicketRouter);
app.use('/dashboard/analytics', AnalyticsRouter);
// app.use(cors());

// ismail features
require('./models/User');
// const UserSchemaCopy = require('./models/User');
const Routes = require('./api/Register'); //

app.use('/register', Routes);

// const userSchema = new mongoose.Schema({
//   User_Email: String,
//   User_Password: String,
// });

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
//     }
//   });
// });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
