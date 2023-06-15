import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [forms, setForms] = useState<FormData>()

  const handleFile = (x: any) => {
    const imageFile = x.target.files[0]
    console.log(imageFile)

    const formData = new FormData();
    formData.append("image", imageFile)
    console.log(formData.getAll("image"))
    setForms(formData)
  }

  const handleSub = () => {
    console.log(forms?.getAll('image'))
    const res = axios({
      method: 'post',
      data: forms,
      url: "https://localhost:7004/WeatherForecast/penis",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
    })
    console.log(res)
  }

  return (
    <>
      <input type="file" accept='image/*' onChange={handleFile}/>
      <button type="submit" onClick={handleSub}>ENVIAR</button>
    </>
  )
}

export default App
