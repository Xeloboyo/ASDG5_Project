const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create TicketSchema
const AnalyticsSchema = new Schema({
  Analytics_PageViewsNum: {
    type: Number
  },

  Analytics_ShareNum: {
    type: Number
  },

  Analytics_RatingsNum: {
    type: Number
  },

  Analytics_Popularity: {
    type: Number
  },

  Order_ID: {
    type: Number
  },

  Promotion_ID: {
    type: Number
  },

  Analytics_Profit: {
    type: Number
  }
});

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
