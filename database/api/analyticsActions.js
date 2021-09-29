// REST API Analytics Actions
import axios from 'axios';
import { response } from 'express';

const express = require('express');

const router = express.Router();

const Analytics = require('../models/Analytics');

export const GET_ANALYTICS = () => (dispatch) => {};
export const ANALYTICS_LOADING = () => (dispatch) => {};
export const ANALYTICS_UPDATE = () => (dispatch) => {};
