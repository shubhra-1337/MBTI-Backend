const express = require('express');
const router = express.Router();
const MBTI = require('../models/mbtiModel');

// GET recommendations by MBTI type
router.get('/:type', async (req, res) => {
  try {
    const type = req.params.type.toUpperCase(); // ensure uppercase (INFJ, ENTP etc.)
    const mbtiData = await MBTI.findOne({ type });

    if (!mbtiData) {
      return res.status(404).json({ message: `No recommendations found for ${type}` });
    }

    res.json(mbtiData);
  } catch (err) {
    console.error('❌ Error fetching MBTI data:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
