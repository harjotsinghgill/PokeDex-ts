import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface NextProps {
	currId: string | undefined;
}

const NextPoke: React.FC<NextProps> = ({ currId }) => {
	if (typeof currId == 'undefined') return <></>;
	if (+currId >= 1008) return <></>;
	const nextId = +currId + 1;
	return (
		<Link to={`/pokemon/${nextId}`} style={{ textDecoration: 'none' }}>
			<Button variant='contained' color='primary'>
				<Typography>Next pokemon</Typography>
			</Button>
		</Link>
	);
};
const PrevPoke: React.FC<NextProps> = ({ currId }) => {
	if (typeof currId == 'undefined') return <></>;
	if (+currId <= 1) {
		return <></>;
	}
	const prevId = +currId - 1;
	return (
		<Link to={`/pokemon/${prevId}`} style={{ textDecoration: 'none' }}>
			<Button variant='contained' color='primary'>
				<Typography>Previous pokemon</Typography>
			</Button>
		</Link>
	);
};

export {NextPoke, PrevPoke}