import { ArrowUpward } from '@mui/icons-material';
import { Fab, styled } from '@mui/material';
import { useState } from 'react';
const ScrollFab = styled(Fab)(
	({ theme }) => ` position: fixed; 
//    width: 100%;
	background:d3d3d3;
   right: 5%;
   bottom: 40px;
//    height: 20px;
   font-size: 3rem;
   z-index: 1;
   cursor: pointer;
   color: ${theme.palette.primary.main};`,
);
const ScrollButton = () => {
	const [visible, setVisible] = useState(false);

	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 100) {
			setVisible(true);
		} else if (scrolled <= 100) {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	window.addEventListener('scroll', toggleVisible);

	return (
		<ScrollFab onClick={scrollToTop} style={{ display: visible ? 'inline-flex' : 'none' }}>
			<ArrowUpward style={{ display: visible ? 'inline' : 'none' }} />
		</ScrollFab>
	);
};

export default ScrollButton;
