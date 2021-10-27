/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-cond-assign */

/*
    Lists of API for ticketing:
    - Show All ticket ✅
    // - Add ticket -> get from takeaway 
    - Cancel ticket ✅ 
    - Cancel All ticket ✅ 
    - Confirm ticket ✅ 
*/

const express = require('express');

const router = express.Router();

const Ticketing = require('../models/Product');

/*
    - Get All ticketing (from Payment)
    @route GET api/ticketing/
    @desc Get All ticketing
    @access Private
*/
router.get('/', async (req, res) => {
  try {
    const ticket = await Ticketing.find();
    if (!ticket) throw Error('No Ticket');
    res.status(200).json(ticket);
  } catch (err) {
    res.json({
      status: 'FAILED',
      message: 'An error occurred'
    });
    console.log(err);
  }
});

/*
    - Add ticketing
    @route POST api/ticketing/
    @desc add ticket
    @access Private
*/

/*
router.post('/', (req, res) => {
  let {
    UserID,
    OrderID,
    TicketOwner,
    TicketOrderQuantity,
    TicketOrderDescription,
    TicketStatus,

  console.log('kek');

  if ((UserID = '' || OrderID == '')) {
    res.json({
      status: 'FAILED',
      message: 'Reservation is not yet created'
    });
  } else {
    const NewTicket = new Ticketing({
      TicketOwner,
      TicketOrderQuantity,
      TicketOrderDescription,
      TicketStatus,
      TicketUpdateDescription
    });

    NewTicket.save()
      .then((result) => {
        res.json({
          status: 'SUCCESS',
          message: 'New Ticket Order',
          data: result
        });
      })
      .catch((err) => {
        res.json({
          status: 'FAILED',
          message: 'An error occurred'
        });
        console.log(err);
      });
  }
});

*/

/*
    - cancel ticketing
    @route POST  api/ticketing/ticketdelete/{id}
    @desc delete ticket from page
    @access Private
*/
router.post('/ticketdelete/:id', async (req, res) => {
  try {
    const { id } = req.params;
    // TicketStatus = TicketStatus.trim();
    // TicketUpdateDescription = TicketUpdateDescription.trim();
    const ticket = await Ticketing.findByIdAndDelete(id);

    console.log('kek');

    if (!ticket) throw Error('No ticketing found based on the id');
    res.json({
      message: 'Ticket is Deleted',
      status: 'SUCCESS'
      // data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
    - cancel ALL ticketings
    @route POST api/ticketing/ticketdelete
    @desc delete all ticket from page
    @access Private
*/
router.post('/ticketdeleteall', async (req, res) => {
  try {
    const { id } = req.params;
    const deleteall = await Ticketing.deleteMany(id);

    console.log('kek');

    if (!deleteall) throw Error('Ticket Queue is empty');
    res.json({
      message: 'Every Ticket has been deleted',
      status: 'SUCCESS'
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

/*
  - confirm ticketing
  @route PATCH api/ticketing/ticketupdate/{d}
  desc status is changed and order is made
*/

router.post('/ticketcomplete/:id', async (req, res) => {
  try {
    let { id } = req.params;
    const update = await Ticketing.findByIDAndUpdate(id);

    // TicketStatus = TicketStatus.trim();
    // TicketUpdateDescripion = TicketUpdateDescription.trim();
    console.log('kek');

    const complete = new Ticketing({
      TicketStatus: false,
      TicketUpdateDescription: 'Order Finish'
    });

    res.json({
      message: 'Order Finish and Ticket Sent',
      // data: req.body,
      // Status: 'Completed',
      TicketStatus: false,
      TicketUpdateDescription: 'Order Complete'
    });

    if (!update) throw Error('Error when updating ticket description');
  } catch (err) {
    res.status(400).json({ msg: err });
  }
});

module.exports = router;
