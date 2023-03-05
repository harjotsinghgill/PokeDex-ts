import { Box, Typography, capitalize, styled } from '@mui/material';
import { darken, Stack } from '@mui/system';
import { PokemonAbility } from 'pokenode-ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const AbilitiesTitle = styled(Typography)(({ theme }) => `font-weight:700; white-space:nowrap;color:black; `);

const Ability = styled(Box)(({ theme }) => `background-color:#99BED7; border:2px solid ${darken('#99BED7',0.1)};border-radius:4px; width:min-content;align-items:center; display:flex; `);

const AbilitiesSection = styled(Box)(({ theme }) => `box-sizing:border-box; border:2px dashed ${theme.palette.primary.main};background:${theme.palette.primary.main}20; border-radius:4px; width:100%;`);
const PokeAbilities: React.FC = () => {
	const abilities = useSelector((state: RootState) => state.pokeData?.data.abilities);

	const abilities_span = abilities?.map((item: PokemonAbility, index: number) => {
		return (
			<Ability key={index} mx={'4px'} className={item.ability.name}>
				<AbilitiesTitle mx={1} variant='subtitle2'>
					{capitalize(item.ability.name)}
				</AbilitiesTitle>
			</Ability>
		);
	});

	return (
		<AbilitiesSection py={1}>
			<Typography variant='h6' ml={1} fontWeight={700}>
				Abilities
			</Typography>
			<Stack direction={'row'} mx={'4px'}>{abilities_span}</Stack>
		</AbilitiesSection>
	);
};

export default PokeAbilities;
