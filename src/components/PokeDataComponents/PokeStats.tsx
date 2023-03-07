import { capitalize, Card, Grid, LinearProgress, styled, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { PokemonStat } from 'pokenode-ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const StatBar = styled(LinearProgress)(
	({ theme }) => `
    flex:1;
border-radius:4px;
border:1px solid ${theme.palette.primary.dark}88;

.MuiLinearProgress-bar{
	box-sizing:border-box;
    border-radius:8px;
    
}
`,
);
const StatCard = styled(Card)(
	({ theme }) => `
    background-color:transparent;
    margin:8px 0;
    background: ${theme.palette.primary.light}60;
    backdrop-filter: saturate(180%) blur(10px);
    padding:8px;
    width:100%;
    box-sizing:border-box;
	box-shadow:${theme.shadows[2]}
    
`,
);
const StatTitle = styled(Typography)(
	({ theme }) => `
font-weight:600;
font-size:18px
padding:0 8px;
`,
);

const StatValue = styled(Typography)(({ theme }) => `margin:0 8px; font-weight:700; `);

const PokeStats: React.FC = () => {
	const pokeData = useSelector((state: RootState) => state.pokeData?.data);
	const stats = pokeData?.stats;
	const stats_span = stats?.map((item: PokemonStat) => {
		let val;
		switch (item.stat.name) {
			case 'hp':
				val = item.base_stat / 255;
				break;
			case 'attack':
				val = item.base_stat / 181;
				break;
			case 'defense':
				val = item.base_stat / 230;
				break;
			case 'special-attack':
				val = item.base_stat / 180;
				break;
			case 'special-defense':
				val = item.base_stat / 230;
				break;
			case 'speed':
				val = item.base_stat / 200;
				break;
			default:
				val = 0;
				break;
		}
		return (
			<Grid item xs={12} md={6}>
				<StatTitle variant='body1'>{capitalize(item.stat.name)}</StatTitle>
				<Stack direction={'row'}>
					<StatBar variant='determinate' color='success' value={val * 100} sx={{ padding: 0.3, my: 1, borderRadius: 2 }} />
					<StatValue my={'auto'} variant='subtitle2'>
						{item.base_stat}
					</StatValue>
				</Stack>
			</Grid>
		);
	});
	return (
		<StatCard>
			<Typography variant='h6' fontWeight={700}>
				Stats
			</Typography>
			<Grid container>{stats_span}</Grid>
		</StatCard>
	);
};
export default PokeStats;
