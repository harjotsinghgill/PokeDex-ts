import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeID: React.FC = () => {
	const pokeID = useSelector((state: RootState) => state.pokeData?.data.id);
	const id = pokeID.toString();

	return (
		<Box display={'flex'} width={'50%'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				ID:
			</Typography>
			<Typography variant='h6'>#{id.padStart(4, '0')}</Typography>
		</Box>
	);
};

export default PokeID;
