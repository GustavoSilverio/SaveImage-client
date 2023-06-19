import { styled } from "@mui/material/styles";

export const FieldSet = styled('fieldset')(({ theme }) => ({
	border: 'none',
	
	'input[type=file]': {
		display: 'none',
	},
}))