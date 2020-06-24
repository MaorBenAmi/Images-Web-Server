import React from 'react';

import { ReactComponent as HeartIcon } from 'assets/images/heart.svg';
import './imageDetails.css';

const ImagesFooterDetails = ({
	likes,
	description
}) => {
	return (
		<div className="image-details-container ">
			<p className='image-description'>{description}</p>
			<div className='flex-center'>
				<HeartIcon />
				<div class="likes">{likes}</div>
			</div>
		</div>
	)
}

export default ImagesFooterDetails;