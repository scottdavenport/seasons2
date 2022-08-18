import React from 'react';
import { createRoot } from 'react-dom/client';

// const App = () => {
// 	window.navigator.geolocation.getCurrentPosition(
// 		(position) => console.log(position),
// 		(err) => console.log(err),
// 	);

// 	return <div>Hi There!</div>;
// };

class App extends React.Component {
	render() {
		return <div>Latitude:</div>;
	}
}

createRoot(document.querySelector('#root')).render(<App />);
