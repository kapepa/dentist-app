const express = require('express');
const router = express.Router();
const DiagnosticsService = require('./diagnostics.service.js');
const UsersService = require('../users/users.service.js');

router.post('/add', async function(req, res, next) {
  const add = await DiagnosticsService.create(req.body);
  res.status(200).json(add);
});

router.put('/update', async function(req, res, next) {
  const { _id, field, value } = req.body;
  const add = await DiagnosticsService.update("_id", _id, {[field]: value});
  res.status(200).json(add);
});

router.put('/append', async function(req, res, next) {
  await DiagnosticsService.create({_id: req.body._id, ...req.body.diagnostics});
  const userAll = await UsersService.findAll();
  res.status(200).json(userAll);
});

router.delete('/delete', async function(req, res, next) {
  const add = await DiagnosticsService.remove(req.body);
  res.status(200).json(add);
});

module.exports = router;