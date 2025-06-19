const express = require('express');
const router = express.Router();
const { createReport } = require('../controllers/reportController');

const Report = require('../models/DisasterReport'); // ✅ Import the model

// GET all reports
router.get('/', async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json(reports);
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch reports' });
  }
});

// POST new report
router.post('/report', createReport);

module.exports = router;
