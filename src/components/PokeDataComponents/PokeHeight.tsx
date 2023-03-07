import { Typography, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeHeight: React.FC = () => {
	const height = useSelector((state: RootState) => state.pokeData?.data.height);
	const feet = height / 3.048;
    const y = feet - Math.floor(feet);
    console.log(y)
	const inches = y * 12;

	return (
		<Box display={'flex'} width={'50%'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				Height:
			</Typography>
			<Typography variant='h6'>
				{Math.floor(feet)}'{Math.floor(inches)}"
			</Typography>
		</Box>
	);
};

export default PokeHeight;
