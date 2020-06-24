const axios = require('axios');
const env = require('../utils/env');

const { getImagesWebServerHeader } = require('./stores.utils');

const ImagesStore = {
	getAllImagesList() {
		return axios.get(`${env.getImagesApiUrl()}/api/v1/images/small`, { headers: getImagesWebServerHeader() })
			.then(response => {
				return response.data;
			})
	}
}

module.exports = ImagesStore;