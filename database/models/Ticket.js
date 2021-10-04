const mongoose = require('mongoose');

const { Schema } = mongoose;

// create TicketSchema
const TicketSchema = new Schema({
  Ticket_ID: {
    // primary key
    type: Number
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
    type: Date
  },

  Ticket_Description: {
    type: String
  }
});

const Ticket = mongoose.model('Ticket', TicketSchema);
module.exports = Ticket;
// module.exports = Ticket = mongoose.model('Ticket', TicketSchema);
