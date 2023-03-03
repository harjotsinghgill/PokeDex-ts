import { capitalize, CardMedia, Grid, Typography } from '@mui/material';
import { Pokemon, PokemonType } from 'pokenode-ts';
import { Link } from 'react-router-dom';
import bg from '../assets/background.png';
import { PokeCard, PokeCardButton, PokeCardContent } from './PokeCard';

interface CardProps {
	pokemon: Pokemon[];
}

const MyCard: React.FC<CardProps> = ({ pokemon }) => {
	return (
		<>
			{pokemon.map((item: Pokemon) => {
				const types = item.types;
				console.log(types);

				const spans = types.map((className: PokemonType, index: number) => {
					return (
						<Grid item borderRadius={1} xs key={index} className={className.type.name}>
							<Typography variant='subtitle2'> {capitalize(className.type.name)}</Typography>
						</Grid>
					);
				});

				let id = item.id.toString();

				return (
					<Grid item xs={2} sm={4} md={4}>
						<PokeCard elevation={3}>
							<CardMedia
								component='img'
								alt={item?.name}
								height='auto'
								image={item.sprites.other?.['official-artwork'].front_default ?? ''}
								sx={{
									backgroundImage: `url(${bg})`,
									bgcolor: '#f2f2f2',
									borderRadius: 4,
									p: 0,
								}}
							></CardMedia>
							<PokeCardContent className='poke-d'>
								<Typography variant='subtitle1' align='left' className='poke-id'>
									#{id.padStart(4, '0')}
								</Typography>
								<Grid container className='poke-type'>
									{spans}
								</Grid>
								<Typography variant='h5'>{capitalize(item.name)}</Typography>
							</PokeCardContent>

							<Link to={`/pokemon/${id}`} style={{ textDecoration: 'none' }}>
								<PokeCardButton size='small' fullWidth variant='outlined' color='primary'>
									More Details
								</PokeCardButton>
							</Link>
						</PokeCard>
					</Grid>
				);
			})}
		</>
	);
};

export default MyCard;
