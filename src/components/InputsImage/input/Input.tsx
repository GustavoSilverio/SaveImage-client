import { useEffect } from 'react';
import * as Styled from './Input.styled'
import { FieldSetProps } from './Input.types'
import { useField } from 'formik'

export const Input = ({
	label,
	file,
	validarInputs,
	...props
}: FieldSetProps) => {
	
	const [field, meta, _] = useField(props);

	useEffect(() => {
		console.log(field.value)
	}, [field])

	return (
		<Styled.FieldSet>
			<label htmlFor={label}>{label}</label>
			{!file?
				(
					<input
						type="text"
						{...field}
						{...props}
					/>
				) : (
					<input
						type="file"
						{...field}
						{...props}
					/>
				)
			}
		</Styled.FieldSet>
	)
}