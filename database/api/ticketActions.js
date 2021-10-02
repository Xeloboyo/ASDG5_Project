/*
    Lists of API for Ticket:
    - Get all Ticket from Takeaway
    - Add Ticket (using id)
    - Cancel Ticket (using id)
    - Cancel All Tickets
*/

import { response } from 'express';

const express = require('express');

const router = express.Router();

const Ticket = require('../models/Ticket');

/*
    - get all ticket from takeaway
    @route GET api/tickets
    @desc Get All Items
    @access Public
*/
router.get('/', (req, res) => {
  try {
    const tickets = await Ticket.find();
    if (!tickets) throw Error('No Tickets');
    console.log(tickets);
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  // Ticket.find().then((ticket) => res.json(ticket));
});

/*
    - add ticket and show it to the page
    @route POST api/tickets
    @desc add ticket to page
    @access Public
*/
router.post('/ticketadd', async (req, res) => {
  try {
    const ticket = await Ticket.find();
    if (!ticket) throw Error('No Tickets');
    res.status(200).json(ticket);
  } catch (err) {
    res.json({
      status: 'FAILED',
      message: 'An error occurred while trying to create new ticket'
    });
    console.log(err);
  }
});

/*
    - cancel ticket
    @route DELETE api/ticket
    @desc delete ticket from page
    @access public
*/
router.delete('/ticketdelete', async (req, res) => {
  try {
    let { _id } = req.body;
    const ticket = await Ticket.findByIdandDelete(_id);
    if (!ticket) throw Error('No ticket found from the id');
    res.json({
      message: 'Ticket is Deleted',
      data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  // check if ticket exist (using ID)
});

/*
    - cancel ALL tickets
    @route DELETE api/ticket
    @desc delete all ticket from page
    @access public
*/
router.delete('/ticketdeleteall', async (req, res) => {
  try {
    let { _id } = req.body;
    const ticket = await Ticket.remove(_id);
    if (!ticket) throw Error('Ticket queue is already empty');
    res.json({
      message: 'All Ticket is Deleted',
      data: POST
    });
  } catch (err) {
    res.status(400).json({ msg: err });
  }
  // check if ticket exist (using ID)
});

module.exports = router;
