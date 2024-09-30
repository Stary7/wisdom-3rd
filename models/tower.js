const mongoose = require('mongoose');

const towerSchema = new mongoose.Schema({
  projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
  developerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Developer', required: true },
  towerNumber: Number,
  towerName: String,
  towerPhase: String,
  phaseReraNumber: String,
  deliveryTimeline: Date,
  currentStatus: String,
  duplicateTowerOption: { type: Boolean, default: false },
  totalFloors: Number,
  towerCoreDetails: {
    totalApartments: Number,
    parkingLevels: Number,
    lobby: Boolean,
    terrace: Boolean
  }
});

module.exports = mongoose.model('Tower', towerSchema);
