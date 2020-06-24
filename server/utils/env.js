const dotenv = require('dotenv');
dotenv.config();

const env = {
	getImagesApiUrl() {
		return process.env.NODE_APP_IMAGES_WEB_SERVER_URL;
	},

	getImagesWebServerApiKey() {
		return process.env.NODE_APP_API_KEY;
	}
}

module.exports = env;