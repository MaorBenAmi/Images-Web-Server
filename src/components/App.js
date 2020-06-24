import React from 'react';

import ImagesGallery from 'components/pages/ImagesGallery';
import ImagesStore from 'stores/ImagesStore';

import 'assets/css/App.css';

function App() {
	const imagesStore = new ImagesStore();

	return (
		<div className="App">
			{/* <Header /> */}
			<ImagesGallery imagesStore={imagesStore} />
		</div>
	);
}

export default App;
