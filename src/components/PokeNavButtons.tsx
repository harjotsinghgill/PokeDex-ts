import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button, Fab, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../App/store';
const CircularButton = styled(Button)(
	({ theme }) => `
	height:80px;
	width:80px;
	border-radius:50px; 
	background: radial-gradient(${theme.palette.primary.dark}88,${theme.palette.primary.light}88);
    backdrop-filter: saturate(180%) blur(5px);
`,
);

const NextPoke: React.FC = () => {
	const currId = useSelector((state: RootState) => state.pokeData?.data?.id);

	if (typeof currId == 'undefined') return <></>;
	if (+currId >= 1008)
		return (
			<Fab>
				<Link
					to={``}
					style={{
						textDecoration: 'none',
						width: 'min-content',
						margin: 0,
						padding: 0,
						textAlign: 'center',
						verticalAlign: 'center',
					}}
				>
					<CircularButton disabled variant='contained'>
						<ChevronRight />
					</CircularButton>
				</Link>
			</Fab>
		);
	const nextId = +currId + 1;
	return (
		<Fab>
			<Link
				to={`/pokemon/${nextId}`}
				style={{
					textDecoration: 'none',
					width: 'min-content',
					margin: 0,
					padding: 0,
					textAlign: 'center',
					verticalAlign: 'center',
				}}
			>
				<CircularButton variant='contained'>
					<ChevronRight />
				</CircularButton>
			</Link>
		</Fab>
	);
};
const PrevPoke: React.FC = () => {
	const currId: number = useSelector((state: RootState) => state.pokeData?.data?.id);
	if (typeof currId == 'undefined') return <></>;
	if (+currId <= 1) {
		return (
			<Fab>
				<Link
					to={``}
					style={{
						textDecoration: 'none',
						width: 'min-content',
						margin: 0,
						padding: 0,
						textAlign: 'center',
						verticalAlign: 'center',
					}}
				>
					<CircularButton disabled variant='contained'>
						<ChevronLeft />
					</CircularButton>
				</Link>
			</Fab>
		);
	}
	const prevId = +currId - 1;
	return (
		<Fab>
			<Link
				to={`/pokemon/${prevId}`}
				style={{
					textDecoration: 'none',
					width: 'min-content',
					margin: 0,
					padding: 0,
					textAlign: 'center',
					verticalAlign: 'center',
				}}
			>
				<CircularButton variant='contained'>
					<ChevronLeft />
				</CircularButton>
			</Link>
		</Fab>
	);
};

export { NextPoke, PrevPoke };

