import React, { useState } from 'react';
import ImageFooterDetails from '../ImageFooterDetails/ImageFooterDetails';

const Image = ({
	likes,
	description,
	url
}) => {
	const [showImageDetails, toggleImageDetails] = useState(false);
	const onHoverImage = () => {
		toggleImageDetails(true);
	}

	const onStopHover = () => {
		toggleImageDetails(false);
	}

	return (
		<div className="image-item responsive" onMouseEnter={onHoverImage} onMouseLeave={onStopHover}>
			<img src={url} alt="" />
			{showImageDetails && <ImageFooterDetails likes={likes} description={description} />}
		</div>
	)
}

export default Image;