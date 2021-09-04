import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';
import Routes from './routes';

const App = () => {
	return (
		<ThemeProvider>
			<Router>
				<Routes />
			</Router>
		</ThemeProvider>
	);
};

export default App;
