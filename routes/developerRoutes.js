const express = require('express');
const router = express.Router();
const developerController = require('../controllers/developerController'); // Import the controller

// Route to get all developers
router.get('/', developerController.getAllDevelopers);

// Route to add a new developer
router.post('/', developerController.addDeveloper); // Changed to use base route

// Route to update a developer by ID
router.put('/:id', developerController.updateDeveloper);

// Route to delete a developer by ID
router.delete('/:id', developerController.deleteDeveloper);

module.exports = router;
