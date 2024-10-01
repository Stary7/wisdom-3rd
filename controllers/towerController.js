const Tower = require('../models/tower');

// Create Tower
exports.createTower = async (req, res) => {
  try {
      const { name, location, totalFloors, totalUnits, developerId, projectId } = req.body;

      // Validate IDs
      if (!developerId || !projectId) {
          return res.status(400).json({ error: "developerId and projectId are required" });
      }

      const newTower = new Tower({ 
          name, 
          location, 
          totalFloors, 
          totalUnits, 
          developerId, 
          projectId 
      });

      await newTower.save(); // Save to the database
      res.status(201).json({ message: 'Tower created successfully', tower: newTower });
  } catch (error) {
      console.error(error); // Log the error for debugging
      res.status(500).json({ error: error.message });
  }
};
// Get All Towers
exports.getTowers = async (req, res) => {
  try {
    const towers = await Tower.find();
    res.status(200).json(towers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Tower by ID
exports.getTowerById = async (req, res) => {
  try {
    const tower = await Tower.findById(req.params.id);
    if (!tower) return res.status(404).json({ message: 'Tower not found' });
    res.status(200).json(tower);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Tower
exports.updateTower = async (req, res) => {
  try {
    const tower = await Tower.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!tower) return res.status(404).json({ message: 'Tower not found' });
    res.status(200).json(tower);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Tower
exports.deleteTower = async (req, res) => {
  try {
    const tower = await Tower.findByIdAndDelete(req.params.id);
    if (!tower) return res.status(404).json({ message: 'Tower not found' });
    res.status(200).json({ message: 'Tower deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
