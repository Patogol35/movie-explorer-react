import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material'
import SearchFilter from '../components/SearchFilter'
import MovieCard from '../components/MovieCard'
import { getMovies, getAllGenres } from '../services/movies'
export default function Home() {
  const [movies, setMovies] = useState([])
  const [filtered, setFiltered] = useState([])
  const [genres, setGenres] = useState([])
  useEffect(() => {
    const m = getMovies()
    setMovies(m)
    setFiltered(m)
    setGenres(getAllGenres())
  }, [])
  function handleFilter({ query, genre }) {
    const q = (query || '').toLowerCase()
    setFiltered(
      movies.filter(m => m.title.toLowerCase().includes(q) && (!genre || m.genres.includes(genre)))
    )
  }
  return (
    <div>
      <AppBar position="sticky" sx={{ background: '#141414' }}>
        <Toolbar sx={{ flexDirection: 'column', alignItems: 'flex-start', gap: 0.5 }}>
          <Typography variant="h6" sx={{ fontWeight: 700 }}>
            🎬 Movie Explorer
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#1e88e5' }}>
            Autor: Jorge Patricio Santamaría Cherrez
          </Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg" sx={{ mt: 2, mb: 6 }}>
        <SearchFilter genres={genres} onChange={handleFilter} />
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {filtered.map(movie => (
            <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
        {filtered.length === 0 && (
          <Box mt={6} textAlign="center" sx={{ color: '#1e88e5', fontWeight: 600 }}>
            No se encontraron resultados.
          </Box>
        )}
      </Container>
    </div>
  )
}