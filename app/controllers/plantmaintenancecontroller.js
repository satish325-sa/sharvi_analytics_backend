
const express = require("express");
const router = express.Router();
const thirdPartyService = require('../services/thirdPartyServices.js');
const nodemailer = require('nodemailer');
// Get PM Orders Data
const getPmOrdersData = async (req, res) => {
  try {
    console.log('Fetching PmOrder data with payload:', req.body);
    const payload = req.body.MASTER; // Get the MASTER payload from request
    const result = await thirdPartyService.fetchPMOrder(payload);

    res.status(200).json({
      status: true,
      data: result,
      message: 'PM Order data fetched successfully!',
    });
  } catch (error) {
    console.error('Error in PM Order Data:', error.message);
    res.status(500).json({
      status: false,
      message: 'Failed to fetch PM Order data.',
      error: error.message,
    });
  }
};

module.exports = {
  getPmOrdersData
    };
