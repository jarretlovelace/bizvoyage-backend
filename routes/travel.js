const express = require('express');
const router = express.Router();
const travelController = require('../controllers/travelController');

// Define routes
router.get('/travel', travelController.getAllTravel);
router.post('/travel', travelController.createTravelRequest);
router.get('/travel/:id', travelController.getTravelById);

module.exports = router;
