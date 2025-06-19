const DisasterReport = require('../models/DisasterReport');

// Create disaster report
const createReport = async (req, res) => {
  try {
    const { description, locationName, coordinates, reporterName } = req.body;

    if (!description || !locationName || !coordinates) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const report = await DisasterReport.create({
      description,
      locationName,
      coordinates: {
        type: "Point",
        coordinates: coordinates // [lng, lat]
      },
      reporterName
    });

    res.status(201).json(report);
  } catch (error) {
    console.error("Error creating report:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = { createReport };
