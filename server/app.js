const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://localhost/api-auth');

const app = express();
app.use(cors());

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/users', require('./routes/users.routes'));
app.use('/buildings', require('./routes/buildings.routes'));
app.use('/telemetry', require('./routes/telemetry.routes'));


module.exports = app;

