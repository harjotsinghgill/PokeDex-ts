import { AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
const TopBar: React.FC = () => {
	return (
		<AppBar
			position='sticky'
			className='topbar'
			sx={{
				zIndex: 'tooltip',
				display: 'flex',
				bgcolor: '#FFD24C',
				height: 70,
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				boxShadow: 2,
				borderRadius: 0,
			}}
		>
			<Link to={'/'} className='logo' style={{ textDecoration: 'none' }}>
				<img className='logo' src={Logo} alt='logo' />
			</Link>
		</AppBar>
	);
};

export default TopBar;
