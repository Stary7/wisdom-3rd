const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
  towerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Tower', required: true },
  seriesName: String,
  seriesTypology: String,
  seriesDetails: {
    bed: Number,
    dimension: String,
    bath: Number,
    direction: String,
    addons: {
      utility: Boolean,
      terrace: Boolean,
      store: Boolean
    }
  }
});

module.exports = mongoose.model('Series', seriesSchema);
