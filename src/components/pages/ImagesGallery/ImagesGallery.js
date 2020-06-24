import React from 'react';

import Image from 'components/organisms/Image';

import InfiniteScroll from 'react-infinite-scroll-component';

const endMessage = (<p style={{ textAlign: 'center' }}>
	<b>Yay! You have seen it all</b>
</p>)

const ImagesGallery = ({
	images,
	fetchImages,
	isAllItemsLoaded
}) => {

	return (
		<InfiniteScroll
			dataLength={images.length}
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