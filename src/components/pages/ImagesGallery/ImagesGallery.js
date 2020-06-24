import React from 'react';

import Image from 'components/atoms/Image';

import InfiniteScroll from 'react-infinite-scroll-component';

const endMessage = (<p style={{ textAlign: 'center' }}>
	<b>Yay! You have seen it all</b>
</p>)

const ImagesGallery = ({
	images,
	totalImages,
	fetchImages,
	isAllItemsLoaded
}) => {

	return (
		<InfiniteScroll
			dataLength={totalImages}
			next={fetchImages}
			hasMore={!isAllItemsLoaded}
			loader={<h4>Loading...</h4>}
			endMessage={endMessage}
			className={'gallery'}
		>
			{images.map((image, index) => {
				return <Image key={index} {...image} />
			})}
		</InfiniteScroll>
	)
}

export default ImagesGallery;