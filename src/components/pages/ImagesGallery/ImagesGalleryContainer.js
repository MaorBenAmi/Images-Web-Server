import React, { useEffect, useState } from 'react';
import ImagesGallery from './ImagesGallery';

import { DEFAULT_PAGINATION_PAGE } from 'utils/constants';

import './imagesGallery.css';

const ImagesGalleryContainer = ({ imagesStore }) => {
	const [imagesList, setImagesList] = useState([]);
	const [page, updatePage] = useState(DEFAULT_PAGINATION_PAGE);
	const [isAllItemsLoaded, stopScroller] = useState(false);

	const fetchImagesGallery = async () => {
		const response = await imagesStore.fetchImagesList({ page });
		const newList = [
			...imagesList,
			...response
		]
		setImagesList(newList);

		updatePage(page + DEFAULT_PAGINATION_PAGE);

		if (newList.length === imagesStore.images.length) stopScroller(true);
	}

	useEffect(() => {
		fetchImagesGallery();
	}, []);
	
	return (
		<div className='images-gallery-container'>
			<ImagesGallery images={imagesList} fetchImages={fetchImagesGallery} totalImages={imagesStore.images.length} isAllItemsLoaded={isAllItemsLoaded} />
		</div>
	)
}

export default ImagesGalleryContainer;