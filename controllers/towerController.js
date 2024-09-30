const Tower = require('../models/tower');

// Create Tower
exports.createTower = async (req, res) => {
  try {
    const newTower = new Tower(req.body);
    await newTower.save();
    res.status(201).json(newTower);
  } catch (error) {
    res.status(500).json({ message: error.message });
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
