const ImagesStore = require('../stores/ImagesStore');

const ImagesService = {
	async fetchAllImages() {
		try {
			return await ImagesStore.getAllImagesList();
		} catch (err) {
			console.error(`Error getting images list from server`,err)
			throw err;
		}
	}
}

module.exports = ImagesService;