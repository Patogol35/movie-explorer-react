import React, { useEffect, useState, useMemo } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  IconButton,
  Paper
} from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import SearchFilter from '../components/SearchFilter'
import MovieCard from '../components/MovieCard'
import { getMovies, getAllGenres } from '../services/movies'

export default function Home({ toggleMode, mode }) {
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState('')
  const [genre, setGenre] = useState('')
  const [genres, setGenres] = useState([])

  // 🔝 Cargar y ordenar por rating
  useEffect(() => {
    const sorted = getMovies().sort((a, b) => b.rating - a.rating)
    setMovies(sorted)
    setGenres(getAllGenres())
  }, [])

  // 🔍 Filtro por búsqueda y género
  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return movies.filter(
      (m) =>
        m.title.toLowerCase().includes(q) &&
        (!genre || m.genres.includes(genre))
    )
  }, [movies, query, genre])

  return (
    <div>
      {/* 🔝 Barra superior */}
      <AppBar
        position="sticky"
        sx={{
          background: 'linear-gradient(90deg, #141414 0%, #1e1e1e 100%)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
        }}
      >
        <Toolbar
          sx={{
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'flex-start', sm: 'center' },
            justifyContent: 'space-between',
            gap: 1
          }}
        >
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              🎬 Movie Explorer
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: '#1e88e5' }}
            >
              Autor: Jorge Patricio Santamaría Cherrez
            </Typography>
          </Box>

          {/* Botón de tema */}
          <IconButton
            onClick={toggleMode}
            color="inherit"
            aria-label="Cambiar tema"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenido */}
      <Container maxWidth="lg" sx={{ mt: 3, mb: 6 }}>
        {/* 🔍 Panel de búsqueda con Paper */}
        <Paper
          elevation={4}
          sx={{
            p: 2,
            borderRadius: 3,
            mb: 3,
            backgroundColor: 'background.default'
          }}
        >
          <SearchFilter
            genres={genres}
            onChange={({ query, genre }) => {
              setQuery(query)
              setGenre(genre)
            }}
          />
        </Paper>

        {/* 🎞️ Grid de películas */}
        <Grid container spacing={2} sx={{ mt: 1 }}>
          {filtered.map((movie) => (
            <Grid item key={movie.id} xs={6} sm={4} md={3} lg={2}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>

        {/* Mensaje si no hay resultados */}
        {filtered.length === 0 && (
          <Box
            mt={6}
            textAlign="center"
            sx={{ color: '#1e88e5', fontWeight: 600 }}
          >
            No se encontraron resultados.
          </Box>
        )}
      </Container>
    </div>
  )
            }
