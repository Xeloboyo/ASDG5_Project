// REST API Ticket Actions

import axios from 'axios';
import { response } from 'express';

const express = require('express');

const router = express.Router();

const Ticket = require('../models/Ticket');

export const GET_TICKETS = () => (dispatch) => {};
export const ADD_TICKET = () => (dispatch) => {};
export const CANCEL_TICKET = () => (dispatch) => {};
export const CANCEL_ALL_TICKETS = () => (dispatch) => {};
export const TICKETS_LOADING = () => (dispatch) => {};
