const express = require('express');
const router = express.Router();
const DiagnosticsService = require('./diagnostics.service.js');

router.get('/', function(req, res, next) {
  res.send('respond with a diagnostics');
});

router.post('/add', async function(req, res, next) {
  const add = await DiagnosticsService.create(req.body);

//  console.log(add)
  res.status(200).json(add);
});

module.exports = router;