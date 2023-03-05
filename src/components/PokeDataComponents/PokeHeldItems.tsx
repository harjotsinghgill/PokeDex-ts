import { Typography, capitalize, Box, styled, Stack } from '@mui/material';
import { PokemonHeldItem } from 'pokenode-ts';
import { useSelector } from 'react-redux';
import { RootState } from '../../App/store';

const HeldItemTitle = styled(Typography)(({ theme }) => `font-weight:700; white-space:nowrap;color:black;`);

const HeldItem = styled(Box)(({ theme }) => `background-color:${theme.palette.secondary.main};border-radius:4px; width:min-content; `);

const HeldItemsSection = styled(Box)(({ theme }) => `box-sizing:border-box; border:2px dashed ${theme.palette.primary.main};background:${theme.palette.primary.main}20; border-radius:4px; width:100%;`);

const PokeHeldItems: React.FC = () => {
	const pokeData = useSelector((state: RootState) => state.pokeData?.data);
	const heldItems = pokeData?.held_items;

	const heldItems_span = heldItems?.map((held: PokemonHeldItem) => {
		return (
			<HeldItem mx={'4px'} >
				<HeldItemTitle mx={1} variant='subtitle2'>
					{capitalize(held.item.name)}
				</HeldItemTitle>
			</HeldItem>
		);
	});
	return (
		<>
			{heldItems.length!==0 && (
				<HeldItemsSection width={'100%'} py={1} my={1}>
					<Typography variant='h6' ml={1} fontWeight={700}>
						Held Items
					</Typography>
					<Stack direction={'row'}  px={'4px'} >
						{heldItems_span}
					</Stack>
				</HeldItemsSection>
			)}
		</>
	);
};

export default PokeHeldItems;
