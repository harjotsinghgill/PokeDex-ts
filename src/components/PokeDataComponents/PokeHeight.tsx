import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeHeight: React.FC = () => {
	const height = useSelector((state: RootState) => state.pokeData?.data.height);
	
	return (
		<Box display={'flex'} width={'50%'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				Height:
			</Typography>
			<Typography variant='h6'>{height}</Typography>
		</Box>
	);
};

export default PokeHeight;
