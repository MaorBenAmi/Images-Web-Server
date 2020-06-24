import { PAGINATION_SIZE, DEFAULT_PAGINATION_PAGE } from 'utils/constants';

class ImagesStore {
	constructor() {
		this.images = [];
	}

	loadImagesByPagination = async (pagination) => {
		const { page = DEFAULT_PAGINATION_PAGE, size = PAGINATION_SIZE } = pagination;
		const totalImages = this.images.length;

		if (page * size >= totalImages) return this.images;

		return this.images.slice(page * size - size, page * size);
	}

	fetchImagesList = async (pagination = {}) => {
		if (this.images.length > 0) return this.loadImagesByPagination(pagination);

		const result = await fetch('/api/images')
			.then(res => res.json())

		this.images = result.data;

		return this.loadImagesByPagination({ page: DEFAULT_PAGINATION_PAGE, size: PAGINATION_SIZE });
	}

}

export default ImagesStore;

// const ImagesStore = {
// 	images: [],

// 	loadImagesByPagination: async (pagination) => {
// 		const { page = DEFAULT_PAGINATION_PAGE, size = PAGINATION_SIZE } = pagination;
// 		const totalImages = ImagesStore.images.length;

// 		if (page * size > totalImages) return ImagesStore.images;

// 		return ImagesStore.images.slice(page * size - size, page * size);
// 	},

// 	fetchImagesList: async (pagination = {}) => {
// 		if (ImagesStore.images.length > 0) return ImagesStore.loadImagesByPagination(pagination);

// 		const result = await fetch('/api/images')
// 			.then(res => res.json())

// 		ImagesStore.images = result.data;
// 		return ImagesStore.loadImagesByPagination({ page: DEFAULT_PAGINATION_PAGE, size: PAGINATION_SIZE });
// 	}
// }

// export default ImagesStore;