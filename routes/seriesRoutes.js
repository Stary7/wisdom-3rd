const express = require('express');
const {
  createSeries,
  getSeries,
  getSeriesById,
  updateSeries,
  deleteSeries
} = require('../controllers/seriesController');

const router = express.Router();

router.post('/', createSeries);
router.get('/', getSeries);
router.get('/:id', getSeriesById);
router.put('/:id', updateSeries);
router.delete('/:id', deleteSeries);

module.exports = router;
