import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ContainerWrapper = styled(Container)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	alignItems : 'center',
	height: '100vh'
}))