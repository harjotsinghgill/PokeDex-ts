import { Backdrop, Container, createTheme, Paper, styled, ThemeProvider } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Body from './components/Body';
import PokeData from './components/PokeData';
import Topbar from './components/TopBar';
import backdrop from './assets/backdrop.jpg';
import { blue } from '@mui/material/colors';
import './App.scss';

const theme = createTheme({
	palette: {
		primary: blue,
		secondary: {
			main: '#fbd743',
			light: '#fbd743',
			dark: '#fbd743',
		},
		success: {
			main: '#5db9ff',
			light: '#5db9ff',
			dark: '#4181b2',
		},
		error: {
			main: '#ff1f1f',
			light: '#ff3c1f',
			dark: '#b21515',
		},
	},
	typography: {
		fontFamily: 'Raleway',
		h5: { fontWeight: 600, marginTop: 4, marginBottom: 4 },
		subtitle1: {
			color: '#979797',
			fontSize: 20,
			fontWeight: 500,
		},
		subtitle2: {
			fontFamily: 'Open Sans',
			fontSize: 14,
			textAlign: 'center',
		},
		button: {
			fontSize: 12,
			fontWeight: 700,
			fontFamily: 'Open Sans',
			textAlign: 'center',
		},
	},
});

const MyBody = styled(Body)();
const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Paper className='App' sx={{ backgroundImage: `url(${backdrop})` }}>
				<Topbar />
				<Routes>
					<Route path='/' element={<MyBody />} />
					<Route path='/pokemon/:id' element={<PokeData />} />
				</Routes>
			</Paper>
		</ThemeProvider>
	);
};

export default App;
