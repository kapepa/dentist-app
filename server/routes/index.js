const express = require('express');
const app = express();
const users = require('./users/users.controller.js');
const diagnostics = require('./diagnostics/diagnostics.controller.js');
const sms = require('./sms/sms.controller.js');

app.use('/users', users);
app.use('/diagnostics', diagnostics);
app.use('/sms', sms);

module.exports = app;


