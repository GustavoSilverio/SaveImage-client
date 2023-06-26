import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const InputImage = styled(Box)(({ theme }) => ({
	display: 'flex',
	form: {
		color: theme.palette.grey[100],
		backgroundColor: theme.palette.grey[300],
		padding: theme.spacing(2),
		borderRadius: 8,

		display: 'flex',
		flexDirection: 'column',
		gap: theme.spacing(2),
		maxWidth: 478,
		width: '100%', 
	},
}))