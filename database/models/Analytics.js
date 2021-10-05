const mongoose = require('mongoose');

const { Schema } = mongoose;

// create TicketSchema
const AnalyticsSchema = new Schema(
  {
    OrderID: {
      // foreign_key
      type: Number
    },

    PromotionID: {
      // foreign_key
      type: Number
    },

    SubscriptionID: {
      // foreign_key
      type: Number
    },

    AnalyticsView: {
      // view toggle
      type: Boolean,
      default: false // if not subscribe
    },

    AnalyticsPageViewsNum: {
      type: Number
    },

    AnalyticsShareNum: {
      type: Number
    },

    AnalyticsRatingsNum: {
      type: Number
    },

    AnalyticsBookingsNum: {
      type: Number
    },

    AnalyticsBookingAvg: {
      type: String
    },

    AnalyticsTakeawayNum: {
      type: Number
    },

    AnalyticsTakeawayAvg: {
      type: String
    },

    // AnalyticsPopularity: {
    //   type: Number
    // },

    AnalyticsTakeawayProfit: {
      type: Number
    },

    AnalyticsFilter: {
      type: Date,
      default: ''
    }
  },
  {
    timestamps: true
  }
);

const Analytics = mongoose.model('Analytics', AnalyticsSchema);
module.exports = Analytics;
// module.exports = Analytics = mongoose.model('Analytics', AnalyticsSchema);
