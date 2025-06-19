const mongoose = require('mongoose');

const disasterReportSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  locationName: {
    type: String,
    required: true
  },
  coordinates: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  },
  reportedAt: {
    type: Date,
    default: Date.now
  },
  reporterName: {
    type: String,
    default: "Anonymous"
  },
  status: {
    type: String,
    enum: ['unresolved', 'resolved'],
    default: 'unresolved'
  }
});

// Geospatial index for nearby search
disasterReportSchema.index({ coordinates: '2dsphere' });

module.exports = mongoose.model('DisasterReport', disasterReportSchema);
