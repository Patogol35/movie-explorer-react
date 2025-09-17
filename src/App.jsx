import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import NotFound from './pages/NotFound'

export default function App({ toggleMode, mode }) {
  return (
    <Routes>
      <Route path="/" element={<Home toggleMode={toggleMode} mode={mode} />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
