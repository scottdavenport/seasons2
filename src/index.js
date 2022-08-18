import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = { lat: null };

		window.navigator.geolocation.getCurrentPosition(
			(position) => {
				this.setState({ lat: position.coords.latitude });
			},
			(err) => console.log(err),
		);
	}

	render() {
		return <div>Latitude: {this.state.lat}</div>;
	}
}

createRoot(document.querySelector('#root')).render(<App />);
