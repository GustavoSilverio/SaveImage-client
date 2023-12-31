import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/global.css'
import { ThemeProvider } from '@mui/material'
import { theme } from './styles/Theme.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<ThemeProvider theme={theme}>
		<App />
	</ThemeProvider>
  </React.StrictMode>,
)
