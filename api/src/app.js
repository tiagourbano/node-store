'use strict'

// Imports 3rd party application.
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Conecta no mLab.
mongoose.connect('mongodb://nodestore:nodeStore#1@ds143000.mlab.com:43000/nodestore', { useNewUrlParser: true });

// Carrega os models.
const IndexModel = require('./models/index-model');

// Carrega as rotas.
const indexRoute = require('./routes/index-route');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', indexRoute);

module.exports = app;