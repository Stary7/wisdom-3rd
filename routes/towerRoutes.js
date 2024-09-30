const express = require('express');
const {
  createTower,
  getTowers,
  getTowerById,
  updateTower,
  deleteTower
} = require('../controllers/towerController');

const router = express.Router();

router.post('/', createTower);
router.get('/', getTowers);
router.get('/:id', getTowerById);
router.put('/:id', updateTower);
router.delete('/:id', deleteTower);

module.exports = router;
