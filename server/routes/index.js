const express = require('express');
const app = express();
const users = require('./users/users.controller.js');
const diagnostics = require('./diagnostics/diagnostics.controller.js');

app.use('/users', users);
app.use('/diagnostics', diagnostics);

module.exports = app;


