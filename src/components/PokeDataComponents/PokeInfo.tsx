import { Grid, Stack } from '@mui/material';
import PokeAbilities from './PokeAbilities';
import PokeHeight from './PokeHeight';
import PokeHeldItems from './PokeHeldItems';
import PokeID from './PokeID';
import PokeSpecies from './PokeSpecies';
import PokeStats from './PokeStats';
import PokeTypes from './PokeTypes';
import PokeWeight from './PokeWeight';

const PokeInfo: React.FC = () => {
	return (
		<Grid item xs>
			<Stack direction={'row'}>
				<PokeID />
				<PokeSpecies />
			</Stack>
			<Stack direction={'row'}>
				<PokeHeight />
				<PokeWeight />
			</Stack>

			<PokeTypes />
			<PokeStats />
			<PokeAbilities />
			<PokeHeldItems />
		</Grid>
	);
};

export default PokeInfo;
