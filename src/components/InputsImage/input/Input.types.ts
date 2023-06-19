export interface FieldSetProps extends React.HTMLProps<HTMLInputElement> {
	label: string,
	file?: boolean,
	name: string,
	validarInputs: boolean
}