const express = require('express');
const router = express.Router();
const DiagnosticsService = require('./diagnostics.service.js');

router.post('/add', async function(req, res, next) {
  const add = await DiagnosticsService.create(req.body);
  res.status(200).json(add);
});

router.put('/update', async function(req, res, next) {
  const { _id, field, value } = req.body;
  const add = await DiagnosticsService.update("_id", _id, {[field]: value});
  res.status(200).json(add);
});

router.delete('/delete', async function(req, res, next) {
  const add = await DiagnosticsService.remove(req.body);
  res.status(200).json(add);
});

module.exports = router;