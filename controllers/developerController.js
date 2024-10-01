const Developer = require('../models/developer'); // Import the Developer model

// Controller to get all developers
exports.getAllDevelopers = async (req, res) => {
    try {
        const developers = await Developer.find(); // Use Mongoose to find all developers
        res.json(developers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to add a new developer
exports.addDeveloper = async (req, res) => {
    try {
        const newDeveloper = new Developer(req.body); // Create a new instance of the Developer model
        await newDeveloper.save(); // Save it to the database
        res.status(201).json({ message: 'Developer added successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to update a developer by ID
exports.updateDeveloper = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedDeveloper = await Developer.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedDeveloper) return res.status(404).json({ message: 'Developer not found' });
        res.status(200).json({ message: 'Developer updated successfully', developer: updatedDeveloper });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete a developer by ID
exports.deleteDeveloper = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedDeveloper = await Developer.findByIdAndDelete(id);
        if (!deletedDeveloper) return res.status(404).json({ message: 'Developer not found' });
        res.status(200).json({ message: 'Developer deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
