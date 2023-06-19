import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerWrapper = styled(Box)(({ theme }) => ({
	backgroundColor: theme.palette.grey[200],
	display: 'flex',
	justifyContent: 'center',
	alignItems : 'center',

	height: '100vh',
	width: '100vw',
}))