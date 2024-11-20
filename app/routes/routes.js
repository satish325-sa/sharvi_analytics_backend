const express = require("express");
const router = express.Router();
const pmcontroller=require('../controllers/plantmaintenancecontroller.js');
//const uiController = require('../controllers/contoller.js');

// POST /fetch/Pm order
router.post('/get/pm-orders', pmcontroller.getPmOrdersData);


// Export the router
module.exports = router;