const ImagesService = require('../services/ImagesService');
const { toImageItem } = require('../adapters/images.adapter');

const ImagesController = {
	async getAllImages(_, res, next) {
		try {
			console.info(`Recevied request for getting all images list`);

			const result = await ImagesService.fetchAllImages();
			const imagesList = result.map(toImageItem);

			console.info(`Finish successfully request for getting all images list`);

			res.status(200).json({
				data: imagesList,
				metadata: {
					//Here we will insert some metadata of the request api: correlationId, eventId, userId, seesionId etc...
				}
			});

		} catch (err) {
			next(err);
		}
	}
}
module.exports = ImagesController;