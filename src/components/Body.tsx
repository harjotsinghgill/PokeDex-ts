import { Box, Container, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { Pokemon } from 'pokenode-ts';
import { useEffect, useState } from 'react';
import MyCard from './Card';
import PokeButton from './PokeButton';
const Body: React.FC = () => {
	const [pokeData, setPokeData] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon/');
	const [nextUrl, setNextUrl] = useState<string>();

	const getPokemon = async (res: { id: number; url: string }[]) => {
		res.map(async (item) => {
			const result = await axios.get(item.url);
			setPokeData((state) => {
				state = [...state, result.data];
				state.sort((a, b) => (a.id > b.id ? 1 : -1));
				return state;
			});
		});
	};

	useEffect(() => {
		const pokeFun = async () => {
			setLoading(true);
			const res = await axios.get(url);
			setNextUrl(res.data.next);
			getPokemon(res.data.results);
			setLoading(false);
		};
		pokeFun();
	}, [url]);
	return (
		<Container sx={{ p: 2 }}>
			<Grid container spacing={{ xs: 2 }} columns={{ xs: 4, sm: 12, md: 16 }} sx={{ marginBottom: 4 }} className='cards-container'>
				<MyCard pokemon={pokeData} />
			</Grid>
			{loading ? (
				<Box textAlign={'center'} sx={{ width: '100%', height:'55.6px' }}>
					<Typography variant='h6'>Loading...</Typography>
				</Box>
			) : (
				<Box textAlign='center'>
					<PokeButton
						variant='contained'
						size='medium'
						onClick={() => {
							setUrl(nextUrl ? nextUrl : '');
						}}
					>
						<Typography variant='h6'>Load More</Typography>
					</PokeButton>
				</Box>
			)}
		</Container>
	);
};

export default Body;
