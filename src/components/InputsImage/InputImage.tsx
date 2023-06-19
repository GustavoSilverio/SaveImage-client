import * as Styled from './InputImage.styled'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Input } from './input'

export const InputImage = () => {
	const [imageUrl, setImageUrl] = useState("");
	const [validarInputs, setValidarInputs] = useState(false)
	
	interface ValuesType {
		imagem: File | null,
		nomeImagem: string 
	}
	
	const initialValues: ValuesType = {
		imagem: null,
		nomeImagem: ""
	}

	const validationSchema = Yup.object({
		nomeImagem: Yup.string().required("O nome da imagem é necessário!").min(1, "Pelo menos um caracter para o nome da imagem"),
		imagem: Yup.mixed().required("A imagem é necessária!"),
	})
	

	const handleSubmit = (values: ValuesType) => {
		// console.log(values);
		// console.log(forms?.getAll('image'))
		// const res = axios.post("https://localhost:7000/Teste/pegardetalheainessabosta", forms).then((res) => setImageUrl(res?.data?.url))
		// console.log(res)
	}

	return (
		<>
			<Styled.InputImage>
				<Formik
					initialValues={initialValues}
					validateOnChange={false}
					validateOnMount={false}
					validationSchema={validationSchema}
					onSubmit={(values) => {
						console.log('chegou aqui')
						handleSubmit(values)
					}}
				>
					{(props) => (
						<Form>
							<Input
								file
								label="Arquivo"
								type="file"
								name='imagem'
								id='imagem'
								value=""
								accept='image/png, image/jpeg'
								validarInputs={validarInputs}
								onChange={(e:ChangeEvent<HTMLInputElement>) => {
									console.log(e)
									if (e.currentTarget.files) {
										props.setFieldValue("imagem", e.currentTarget.files[0]);
									}
								}}
							/>
							<Input
								label="Nome da Imagem"
								type="text"
								placeholder='Coloque o nome da imagem aqui!'
								name="nomeImagem"
								id="nomeImagem"
								validarInputs={validarInputs}
							/>
							<button type="submit" onClick={() => {
								props.validateForm();
								setValidarInputs(true)
								console.log(props.errors)
							}}>
								ENVIAR
							</button>
						</Form>
					)}
				</Formik>
			</Styled.InputImage>

			{ imageUrl && <img src={imageUrl} alt="imagem da url do cloudinary" />}
		</>
	)
}