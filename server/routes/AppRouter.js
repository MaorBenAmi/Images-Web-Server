const express = require('express');

const ApiRouter = require('./ApiRouter');

const Router = express.Router();

Router.use('/api', ApiRouter);

module.exports = Router;