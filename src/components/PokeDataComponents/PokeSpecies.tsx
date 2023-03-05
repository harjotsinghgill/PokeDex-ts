import { Typography, capitalize, Box } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../App/store";

const PokeSpecies: React.FC = () => {
    const species = useSelector((state:RootState)=>(state.pokeData?.data?.species))
	return (
		<Box width={'50%'} display={'flex'}>
			<Typography variant='h6' mx={1} fontWeight={700}>
				Species:
			</Typography>
			<Typography variant='h6'>{capitalize(species.name)}</Typography>
		</Box>
	);
};

export default PokeSpecies;
