import React, { useEffect, useState } from 'react';
import ImagesGallery from './ImagesGallery';

import { DEFAULT_PAGINATION_PAGE } from 'utils/constants';

import './imagesGallery.css';

const ImagesGalleryContainer = ({ imagesStore }) => {
	const [imagesList, setImagesList] = useState([]);
	const [page, updatePage] = useState(DEFAULT_PAGINATION_PAGE);
	const [isAllItemsLoaded, stopScroller] = useState(false);

	const fetchImagesGalleryOnce = async () => {

		const response = await imagesStore.fetchAllImagesList();

		setImagesList(response);

		updatePage(page + DEFAULT_PAGINATION_PAGE);
	}

	const fetchMoreImages = () => {
		const response = imagesStore.getNextImages({ page });
		setImagesList(response);

		updatePage(page + DEFAULT_PAGINATION_PAGE);

		if (response.length >= imagesStore.images.length) stopScroller(true);
	}

	useEffect(() => {
		fetchImagesGalleryOnce();
	}, []);
	
	return (
		<div className='images-gallery-container' id='images-gallery'>
			<ImagesGallery images={imagesList} fetchImages={fetchMoreImages} totalImages={imagesStore.images.length} isAllItemsLoaded={isAllItemsLoaded} />
		</div>
	)
}

export default ImagesGalleryContainer;