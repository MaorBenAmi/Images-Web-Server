import React, { useEffect, useState } from 'react';
import logo from 'assets/images/logo.svg';
import 'assets/css/App.css';

function App() {

	const fetchMessage = async () => {
		// Use Fetch API to fetch '/api' endpoint
		const message = await fetch('/api/images')
			.then(res => res.text()) // process incoming data

		console.info(message)
	}

	useEffect(() => {
		fetchMessage();
	}, []);
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
        </p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
        </a>
			</header>
		</div>
	);
}

export default App;
