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
		console.log(meta.error)
		console.log(field.value)
	}, [field])

	return (
		<Styled.FieldSet>
			{!file?
				(
					<input
						type="text"
						{...field}
						{...props}
					/>
				) : (
					<input
						{...field}
						type="file"
						{...props}
					/>
				)
			}
		</Styled.FieldSet>
	)
}