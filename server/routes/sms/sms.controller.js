const express = require('express');
const router = express.Router();
const SmsService = require('./sms.service.js');

router.post('/send', async function(req, res, next) {
  const sms = await SmsService.send(req.body.phone, Date.now());
  res.status(200).json(sms);
});

module.exports = router;