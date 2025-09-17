import React, { useState, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { getTheme } from './theme'
import './index.css'

function Main() {
  const [mode, setMode] = useState('light')
  const theme = useMemo(() => getTheme(mode), [mode])

  function toggleMode() {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App toggleMode={toggleMode} mode={mode} />
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
)
