const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  incorporationDate: Date,
  totalProjects: Number,
  totalSqFt: Number,
  reasonForChoosing: String,
  website: String,
});

module.exports = mongoose.model('Developer', developerSchema);
