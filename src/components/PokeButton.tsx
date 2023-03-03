import { Button } from '@mui/material';
import { styled } from '@mui/system';

const PokeButton = styled(Button)`
	margin: 0 auto 4px auto;
	width: 25%;
	background-color: red;
	border: 4px solid black;
	border-radius: 16px;
	:hover {
		background-color: #ffcdcd;
		border: 4px solid red;
		color: red;
	}
`;

export default PokeButton;
