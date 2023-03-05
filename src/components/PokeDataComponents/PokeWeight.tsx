import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeWeight: React.FC = () => {
	const weight = useSelector((state: RootState) => state.pokeData?.data.weight);

	return (
		<Box display={'flex'} width={'50%'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				Weight:
			</Typography>
			<Typography variant='h6'>{weight} lbs</Typography>
		</Box>
	);
};

export default PokeWeight;
