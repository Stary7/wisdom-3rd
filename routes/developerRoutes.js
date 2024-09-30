const express = require('express');
const { createDeveloper, getDevelopers } = require('../controllers/developerController');
const router = express.Router();

router.post('/', createDeveloper);
router.get('/', getDevelopers);

module.exports = router;
