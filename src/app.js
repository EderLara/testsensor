// Servidor Express :
'use strict'

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));

//Exportaciones:

module.exports = app;