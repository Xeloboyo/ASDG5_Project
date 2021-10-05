const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create Subscribe schema
const SubscribeSchema = new Schema({
  RestaurantID: {
    // foreign_key
    type: Number
  },

  PaymentID: {
    // foreign_key
    type: Number
  },

  SubscriptionOptions: {z
    type: String,
    default: ''
    // monthly or yearly
  },

  SubscriptionStartDate: {
    type: Date.now(),
    default: ''
  },

  SubscriptionEndDate: {
    type: Date,
    default: ''
  },

  SubscriptionTrial: {
    type: Boolean,
    default: false
  }
});

const Subscribe = mongoose.model('Subscribe', SubscribeSchema);
module.exports = Subscribe;
// module.exports = Subscribe = mongoose.model('subscribe', SubscribeSchema);
