const Developer = require('../models/developer');
const db = require('../config/firebase');

// Create a Developer (MongoDB)
exports.createDeveloper = async (req, res) => {
  try {
    const newDev = new Developer(req.body);
    await newDev.save();
    res.status(201).json(newDev);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Developers (Firebase)
exports.getDevelopers = async (req, res) => {
  try {
    const snapshot = await db.collection('developers').get();
    const developers = snapshot.docs.map(doc => doc.data());
    res.status(200).json(developers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
