const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ success: true });
});

router.put('/', (req, res) => {
  res.json({ success: true });
});

router.delete('/', (req, res) => {
  res.json({ success: true });
});

module.exports = router;