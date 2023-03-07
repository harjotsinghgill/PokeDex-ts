import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeWeight: React.FC = () => {
	const weight = useSelector((state: RootState) => state.pokeData?.data.weight);
    const pounds = weight / 4.536;

	return (
		<Box display={'flex'} width={'50%'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				Weight:
			</Typography>
			<Typography variant='h6'>{pounds.toFixed(1)} lbs</Typography>
		</Box>
	);
};

export default PokeWeight;
