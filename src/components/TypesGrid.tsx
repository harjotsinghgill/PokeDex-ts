import { Grid, styled } from '@mui/material';

const TypesGrid = styled(Grid)(
	({ theme, container }) => `
    ${container ? `width: 100%;	gap: 8px;justify-content: center;color: white;` : ''}
			
   border-radius:${theme.shape.borderRadius};

 `,
);

export default TypesGrid;
