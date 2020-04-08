const express = require('express');

const {
  getAllTours,
  createTour,
  getTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourController');

const router = express.Router();

//app.get('/api/v1/tours', getAllTours);
//app.post('/api/v1/tours', createTour);
router.route('/').get(getAllTours).post(createTour);

// app.get('/api/v1/tours/:id', getTour);
// app.patch('/api/v1/tours/:id', updateTour);
// app.delete('/api/v1/tours/:id', deleteTour);
router.route('/:id').get(getTour).patch(updateTour).delete(deleteTour);

module.exports = router;
