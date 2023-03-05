import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../App/store';

const NextPoke: React.FC = () => {
	const currId = useSelector((state: RootState) => state.pokeData?.data?.id);
	if (typeof currId == 'undefined') return <></>;
	if (+currId >= 1008)
		return (
			<Button fullWidth disabled variant='contained' color='primary'>
				<Typography>Next pokemon</Typography>
			</Button>
		);
	const nextId = +currId + 1;
	return (
		<Link to={`/pokemon/${nextId}`} style={{ textDecoration: 'none', width: '100%' }}>
			<Button fullWidth variant='contained' color='primary'>
				<Typography>Next pokemon</Typography>
			</Button>
		</Link>
	);
};
const PrevPoke: React.FC = () => {
	const currId = useSelector((state: RootState) => state.pokeData?.data?.id);
	if (typeof currId == 'undefined') return <></>;
	if (+currId <= 1) {
		return (
			<Button fullWidth disabled variant='contained' color='primary'>
				<Typography>Previous pokemon</Typography>
			</Button>
		);
	}
	const prevId = +currId - 1;
	return (
		<Link to={`/pokemon/${prevId}`} style={{ textDecoration: 'none', width: '100%' }}>
			<Button variant='contained' color='primary' fullWidth>
				<Typography>Previous pokemon</Typography>
			</Button>
		</Link>
	);
};

export { NextPoke, PrevPoke };
