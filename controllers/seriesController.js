const Series = require('../models/series');


// Controller to create a new series
exports.createSeries = async (req, res) => {
    try {
        const { name, towerId } = req.body;

        // Validate towerId
        if (!towerId) {
            return res.status(400).json({ error: "towerId is required" });
        }

        const newSeries = new Series({ 
            name, 
            towerId 
        });

        await newSeries.save(); // Save to the database
        res.status(201).json({ message: 'Series created successfully', series: newSeries });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ error: error.message });
    }
};


// Get All Series
exports.getSeries = async (req, res) => {
  try {
    const series = await Series.find();
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Series by ID
exports.getSeriesById = async (req, res) => {
  try {
    const series = await Series.findById(req.params.id);
    if (!series) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Series
exports.updateSeries = async (req, res) => {
  try {
    const series = await Series.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!series) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json(series);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Series
exports.deleteSeries = async (req, res) => {
  try {
    const series = await Series.findByIdAndDelete(req.params.id);
    if (!series) return res.status(404).json({ message: 'Series not found' });
    res.status(200).json({ message: 'Series deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
