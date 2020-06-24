const express = require('express');

const ImagesController = require('../controllers/ImagesController');

const Router = express.Router();

Router.route('/images')
	.get(ImagesController.getAllImages);

module.exports = Router;