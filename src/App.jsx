import React, { useState, useMemo } from 'react'
import { Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

export default function App() {
  // 🔑 Obtener tema de localStorage o default 'dark'
  const [mode, setMode] = useState(() => {
    return localStorage.getItem('themeMode') || 'dark'
  })

  const toggleMode = () => {
    setMode((prev) => {
      const next = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem('themeMode', next) // guardar persistente
      return next
    })
  }

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode
        }
      }),
    [mode]
  )

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home toggleMode={toggleMode} mode={mode} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  )
}
