// import { Box, capitalize, Card, Grid, Paper, Typography } from '@mui/material';
// import axios from 'axios';
// import { Pokemon, PokemonAbility, PokemonHeldItem, PokemonStat, PokemonType } from 'pokenode-ts';
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { NextPoke, PrevPoke } from './PokeNavButtons';
// import ImgContainer from './PokeImgContainer';

// const PokeData: React.FC = () => {
// 	const [pokeData, setPokeData] = useState<Pokemon>();
// 	const [loading, setLoading] = useState<boolean>(false);
// 	const { id } = useParams();
// 	const url: string = `https://pokeapi.co/api/v2/pokemon/${id}`;

// 	useEffect(() => {
// 		const getData = async () => {
// 			try {
// 				const res = await axios.get(url);
// 				setPokeData(res.data);
// 				setLoading(false);
// 			} catch (error) {
// 				console.error(error);
// 			}
// 		};
// 		getData();
// 	}, [url, id]);

// 	const types = pokeData?.types;
// 	const abilities = pokeData?.abilities;
// 	const heldItems = pokeData?.held_items;
// 	const stats = pokeData?.stats;
// 	const stats_span = stats?.map((item: PokemonStat) => {
// 		return (
// 			<span>
// 				<Typography sx={{ color: '#f0f' }} variant='subtitle2'>
// 					{capitalize(item.stat.name)}
// 				</Typography>
// 				<Typography sx={{ color: '#f0f' }} variant='subtitle2'>
// 					{item.base_stat}
// 				</Typography>
// 			</span>
// 		);
// 	});
// 	const heldItems_span = heldItems?.map((held: PokemonHeldItem) => {
// 		return (
// 			<span>
// 				<Typography color={'#f00'} variant='subtitle2'>
// 					{capitalize(held.item.name)}
// 				</Typography>
// 			</span>
// 		);
// 	});
// 	const abilities_span = abilities?.map((item: PokemonAbility, index: number) => {
// 		return (
// 			<span key={index} className={item.ability.name}>
// 				<Typography sx={{ color: '#000' }} variant='subtitle2'>
// 					{capitalize(item.ability.name)}
// 				</Typography>
// 			</span>
// 		);
// 	});
// 	const types_span = types?.map((className: PokemonType, index: number) => {
// 		return (
// 			<span key={index} className={className.type.name}>
// 				<Typography variant='subtitle2'>{capitalize(className.type.name).charAt(0).toUpperCase() + className.type.name.slice(1).toLowerCase()}</Typography>
// 			</span>
// 		);
// 	});

// 	return (
// 		<>
// 			<Paper
// 				sx={{
// 					bgcolor: '#f2f2f2',
// 					height: '100%',
// 					padding: 2,
// 				}}
// 			>
// 				<Grid container>
// 					<Grid item xs={6} md={6} sx={{ bgcolor: '#888888' }}>
// 						<ImgContainer onLoad={setLoading} loading={loading} url={pokeData?.sprites.other?.['official-artwork'].front_default ?? ''} />
// 					</Grid>
// 					{pokeData && (
// 						<Grid item xs p={2}>
// 							<Typography variant='h6'>Height</Typography>
// 							<Typography variant='body1'>{pokeData.height}</Typography>
// 							<Typography variant='h6'>Weight</Typography>
// 							<Typography variant='body1'>{pokeData.weight} lbs</Typography>
// 							<Typography variant='h6'>{capitalize(pokeData.species.name)}</Typography>
// 							<div className='poke-type'>{types_span}</div>
// 							<Card className='poke-type'>{abilities_span}</Card>
// 							<Card className='poke-type'>{heldItems_span}</Card>
// 							<Card className='poke-type'>{stats_span}</Card>
// 						</Grid>
// 					)}
// 				</Grid>
// 				<Box>
// 					<Typography variant='h1' color='initial'>
// 						{pokeData && pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1).toLowerCase()}
// 					</Typography>
// 				</Box>
// 				<Box>
// 					<Typography variant='h2' color='initial'>
// 						#{id?.padStart(4, '0')}
// 					</Typography>
// 				</Box>
// 				<PrevPoke currId={id} />

// 				<NextPoke currId={id} />
// 			</Paper>
// 		</>
// 	);
// };

// export default PokeData;

import { Box, capitalize, Grid, Paper, Stack, styled, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { RootState } from '../App/store';
import { fetchPokeData } from '../features/pokeDataSlice';
import PokeInfo from './PokeDataComponents/PokeInfo';

import ImgContainer from './PokeImgContainer';
import { NextPoke, PrevPoke } from './PokeNavButtons';

const PokePaper = styled(Paper)(
	({ theme }) => `background-color:transparent;
    margin:8px 0;
    background: #ababab40;
    backdrop-filter: saturate(180%) blur(5px);`,
);

const PokeData: React.FC = () => {
	const [loading, setLoading] = useState<boolean>(true);
	const { id } = useParams();
	const dispatch: any = useDispatch();
	const pokeData = useSelector((state: RootState) => state.pokeData?.data);

	useEffect(() => {
		setLoading(true);

		dispatch(fetchPokeData(id));
	}, [dispatch, id]);

	return (
		<Box height={'calc(100vh - 70px)'} display={'flex'} justifyContent={'center'} flexDirection={'column'}>
			{pokeData && (
				<PokePaper
					sx={{
						// bgcolor: '#e0e0e0',
						// height: '100%',
						padding: 2,
					}}
				>
					{' '}
					<Box>
						<Typography variant='h1' color='initial'>
							{pokeData && capitalize(pokeData.name)}
						</Typography>
					</Box>
					<Grid container>
						<Grid item xs={6} sx={{}}>
							<ImgContainer
								onLoad={() => {
									setLoading(false);
								}}
								loading={loading}
								url={pokeData?.sprites?.other?.['official-artwork'].front_default ?? ''}
							/>
						</Grid>
						{pokeData && <PokeInfo />}
					</Grid>
					<Stack direction={'row'} spacing={2}>
						<PrevPoke />

						<NextPoke />
					</Stack>
				</PokePaper>
			)}
		</Box>
	);
};

export default PokeData;
