const express = require('express');
const tourController = require('./../controllers/tourController.js');
const router = express.Router();

router.param('id', tourController.checkID);

// Create a checkbody middleware
// Check if body contains the name and price property
// If not, send back 400
// Add it to the post handle stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour);

module.exports = router;
