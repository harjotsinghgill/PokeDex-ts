import { Box, Typography, capitalize } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeName: React.FC = () => {
	const name = useSelector((state: RootState) => state.pokeData.data.name);
	return (
		<Box display={'flex'} mb={1} alignItems={'center'} width={'100%'} justifyContent={'center'} bgcolor={'#88888840'} borderRadius={'8px'}>
			<Typography variant='h5' fontSize={32} color='initial'>
				{capitalize(name)}
			</Typography>
		</Box>
	);
};

export default PokeName;
