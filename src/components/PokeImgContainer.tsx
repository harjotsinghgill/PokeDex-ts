import { Box, CircularProgress } from '@mui/material';

interface ImgProps {
	url: string;
	loading: boolean;
	onLoad?: (arg: boolean) => void;
}

const ImgContainer: React.FC<ImgProps> = ({ url, loading, onLoad }) => {
	console.log(loading);

	return (
		<Box textAlign={'center'} height={'100%'} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
			{loading && (
				<Box>
					<CircularProgress size={100} sx={{ height: '100%' }} />
				</Box>
			)}

			<img src={url} onLoad={() => onLoad?.(true)} alt='' style={{ visibility: loading ? 'hidden' : 'visible' }} />
		</Box>
	);
};
export default ImgContainer;
