const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;

// create TicketSchema
const TicketSchema = new Schema({
  Ticket_ID: {
    // primary key
    type: Number,
    required: true
  },

  Reservation_ID: {
    // foreign_key
    type: Number
  },

  User_ID: {
    // foreign_key
    type: Number
  },

  Order_ID: {
    // foreign_key
    type: Number
  },

  Ticket_Date: {
    type: String
  },

  Ticket_Description: {
    type: String
  }
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;
// module.exports = Ticket = mongoose.model('Ticket', TicketSchema);
