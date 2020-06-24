const env = require('../utils/env');

exports.getImagesWebServerHeader = () => {
	return { 'x-api-key': env.getImagesWebServerApiKey() }
}