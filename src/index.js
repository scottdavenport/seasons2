import React from 'react';
import { createRoot } from 'react-dom/client';
const container = document.querySelector('#root');
const root = createRoot(container);

const App = () => {
	window.navigator.geolocation.getCurrentPosition(
		(position) => console.log(position),
		(err) => console.log(err),
	);

	return <div>Hi There!</div>;
};

root.render(<App />);
