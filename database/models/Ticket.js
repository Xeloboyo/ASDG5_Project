const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create TicketSchema
const TicketSchema = new Schema({
  Ticket_ID: {
    // primary_key
    type: String,
    required: true
  },

  Reservation_ID: {
    // foreign_key
    type: String
  },

  User_ID: {
    // foreign_key
    type: String
  },

  Order_ID: {
    // foreign_key
    type: String
  },

  Ticket_Date: {
    type: String
  },

  Ticket_Description: {
    type: String
  }
});

// module.exports = Ticket = mongoose.model('ticket', TicketSchema);
