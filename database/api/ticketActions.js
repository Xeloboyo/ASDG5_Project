/*
    Lists of API for ticketing:
    - Show All ticket
    - Add ticket
    - Cancel ticket
    - Cancel All ticket
    - Confirm ticket
    - Update ticket 
*/

const express = require('express').Router();

// const router = express.Router();

const ticketing = require('../models/Ticket');

/*
    - Get All ticketing (from Payment)
    @route GET api/ticketing/
    @desc Get All ticketing
    @access Private
*/
router.post('/', (req, res) => {
  ticketing
    .find()
    .then((ticketAction) => res.json(ticketAction))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

/*
    - Add ticketing
    @route POST api/ticketing/
    @desc add ticket
    @access Private
*/
router.post('/', (req, res) => {
  let {
    UserID,
    ReservationID,
    OrderID,
    TakeawayID,
    TicketOwner,
    TicketOrderDescription,
    TicketStatus,
    TicketUpdate
  } = req.body();

  UserID = UserID.trim();
  ReservationID = ReservationID.trim();
  OrderID = OrderID.trim();
  TakeawayID = TakeawayID.trim();
  TicketOwner = TicketOwner.trim();
  TicketOrderDescription = TicketOrderDescription.trim();
  TicketStatus = TicketStatus.trim();
  TicketUpdate = TicketUpdate.trim();

  if ( OrderID = '' || RestaurantID = '' ) {
    res.json({
      status: "FAILED",
      message: "Reservation is not created".
    });

    let NewTicket = new ticketing({
      TicketOwner,
      TicketOrderDescription,
      TicketStatus,
      TicketUpdate
    });

    NewTicket.save()
    .then((result) =? {
      res.json({
        status: "SUCCESS"
        message: "New Ticket is created",
        data: result
      });
    })
    .catch(err) => {
      res.json({
        status: "FAILED",
        message: "idk lmao"
      });
      console.log(err);
    }};
  });

/*
    - cancel ticketing
    @route DELETE api/ticketing/ticketdelete/{id}
    @desc delete ticket from page
    @access Private
*/
router.delete('/ticketingdelete', async (req, res) => {
  try {
    const { _id } = req.body;
    const ticket = await ticketing.findByIdandDelete(_id);
    if (!ticket) throw Error('No ticketing found from the id');
    res.json({
      message: 'Ticket is Deleted',
      data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  // check if ticketing exist (using ID)
});

/*
    - cancel ALL ticketings
    @route DELETE api/ticketing/ticketdelete
    @desc delete all ticket from page
    @access Private
*/
router.delete('/ticketingdeleteall', async (req, res) => {
  try {
    const { _id } = req.body;
    const ticket = await ticketing.remove(_id);
    if (!ticket) throw Error('ticketing queue is already empty');
    res.json({
      message: 'All ticketing is Deleted',
      data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  // check if ticketing exist (using ID)
});

/*
  - confirm ticketing
  @route PATCH api/ticketing/ticketupdate/{id}
  @desc status is changed and order is made
*/

/*
  - update ticketing
  @route PATH api/ticketing/ticketupdate/{id}
  @desc description and status change
*/

module.exports = router;
