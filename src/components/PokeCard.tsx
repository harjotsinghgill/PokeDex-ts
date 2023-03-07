import { lighten, styled } from '@mui/material';
import { Card, CardContent, Button } from '@mui/material';
const PokeCard = styled(Card)(
	({ theme }) => `
	transition: transform 0.s ease-in-out;
	padding: 12px;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	background-color:transparent;
    background: linear-gradient(to bottom, ${theme.palette.primary.light}80 40%, #F38C3A00 90%);
    backdrop-filter: saturate(180%) blur(5px);
	:hover{
		box-shadow:${theme.shadows[9]};
		z-index:${theme.zIndex.modal};
		transform: scale3d(1.02, 1.02, 1);
		
	}
`,
);

const PokeCardContent = styled(CardContent)`5
	padding: 0;
`;

const PokeCardButton = styled(Button)(
	({ theme }) => `border-radius:${theme.shape.borderRadius}; 
	:hover{
		background-color:${lighten('#cfe4eb', 0.5)};
		box-shadow:${theme.shadows[6]}
	}
`,
);

export { PokeCard, PokeCardButton, PokeCardContent };
