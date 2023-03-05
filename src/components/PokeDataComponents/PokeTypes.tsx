import { Typography, capitalize, Box, styled, Stack } from '@mui/material';
import { PokemonType } from 'pokenode-ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const PokeTypesSection = styled(Box)(({ theme }) => `box-sizing:border-box; background:${theme.palette.primary.main}20; border-radius:4px; width:100%;`);
const PokeType = styled(Box)(({ theme }) => `border-radius:4px; width:min-content;align-items:center; display:flex;`);
const PokeTypeTitle = styled(Typography)(({ theme }) => `font-weight:700; white-space:nowrap; `);
const PokeTypes: React.FC = () => {
	const types = useSelector((state: RootState) => state.pokeData?.data?.types);

	const types_span = types?.map((className: PokemonType, index: number) => {
		return (
			<PokeType key={index} mx={'4px'} className={className.type.name}>
				<PokeTypeTitle mx={1} variant='subtitle2'>
					{capitalize(className.type.name)}
				</PokeTypeTitle>
			</PokeType>
		);
	});
	return (
		<PokeTypesSection my={1} py={1}>
			<Stack direction={'row'} mx={'4px'}>
				<Typography variant='h6' mx={1} fontWeight={700}>
					Type:
				</Typography>
				{types_span}
			</Stack>
		</PokeTypesSection>
	);
};

export default PokeTypes;
