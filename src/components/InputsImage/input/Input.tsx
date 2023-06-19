import { useEffect } from 'react';
import * as Styled from './Input.styled'
import { FieldSetProps } from './Input.types'
import { useField } from 'formik'
import { Box } from '@mui/material';
import { FaUpload } from 'react-icons/fa'

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
			<label htmlFor={props.id}>{label}</label>
			{!file?
				(
					<input
						type="text"
						{...field}
						{...props}
					/>
				) : (
					//A ideia é fazer o box abaixo ser tipo assim: https://www.google.com/url?sa=i&url=https%3A%2F%2Ftympanus.net%2Fcodrops%2F2015%2F09%2F15%2Fstyling-customizing-file-inputs-smart-way%2F&psig=AOvVaw1z8tmVs1av_tf1nNyLuCnP&ust=1687274757408000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCLCN5onTz_8CFQAAAAAdAAAAABAD
					<Box>
						<span>
							<FaUpload />
						</span>
						<input
							type="file"
							{...field}
							{...props}
						/>
					</Box>
				)
			}
		</Styled.FieldSet>
	)
}