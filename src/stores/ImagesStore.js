import { PAGINATION_SIZE, DEFAULT_PAGINATION_PAGE } from 'utils/constants';

class ImagesStore {
	constructor() {
		this.images = [];
	}

	loadImagesByPagination = (pagination) => {
		const { page = DEFAULT_PAGINATION_PAGE, size = PAGINATION_SIZE } = pagination;
		const totalImages = this.images.length;

		if (page * size >= totalImages) return this.images;

		return this.images.slice(0, page * size);
	}

	fetchAllImagesList = async () => {
		const result = await fetch('/api/images')
			.then(res => res.json())

		this.images = result.data;

		return this.loadImagesByPagination({ page: DEFAULT_PAGINATION_PAGE, size: PAGINATION_SIZE });
	}

	getNextImages = (pagination) => {
		return this.loadImagesByPagination(pagination);
	}

}

export default ImagesStore;