import { Box, CircularProgress } from '@mui/material';

interface ImgProps {
	url: string;
	loading: boolean;
	onLoad?: (arg: boolean) => void;
}

const ImgContainer: React.FC<ImgProps> = ({ url, loading, onLoad }) => {
	return (
		<Box textAlign={'center'} height={'100%'} flexDirection={'column'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
			{loading && (
				<Box height={495} width={495} alignItems={'center'} flexDirection={'column'} display={'flex'} justifyContent={'center'}>
					<CircularProgress size={100} sx={{ height: '100%' }} />
				</Box>
			)}

			<img src={url} height={'495px'} width={'495px'} onLoad={() => onLoad?.(false)} alt='' style={{ display: loading ? 'none' : 'block' }} />
		</Box>
	);
};
export default ImgContainer;
