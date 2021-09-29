require('./config/db');

const cors = require('cors');

const app = require('express')();

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

// ricky features
require('./models/Ticket');
require('./models/Analytics');

const TicketRouter = require('./api/ticketActions');
const AnalyticsRouter = require('./api/analyticsActions');

app.use('/dashboard/ticket', TicketRouter);
app.use('/dashboard/analytics', AnalyticsRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
