const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  details: { type: String, required: true },
  reraStatus: { type: Boolean, default: false },
  financials: {
    budget: Number,
    expenditure: Number
  },
  media: [String]
});

module.exports = mongoose.model('Project', projectSchema);
