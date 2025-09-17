import React, { useEffect, useState, useMemo } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid,
  Box,
  IconButton
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

  useEffect(() => {
    setMovies(getMovies())
    setGenres(getAllGenres())
  }, [])

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
      {/* 🔝 AppBar */}
      <AppBar position="sticky" sx={{ background: '#141414' }}>
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

          <IconButton
            onClick={toggleMode}
            color="inherit"
            aria-label="Cambiar tema"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🎯 Contenido */}
      <Container maxWidth="lg" sx={{ mt: 3, pb: 6 }}>
        <SearchFilter
          genres={genres}
          onChange={({ query, genre }) => {
            setQuery(query)
            setGenre(genre)
          }}
        />

        {/* ✅ Grid de películas */}
        <Grid
          container
          spacing={3}               // 🔑 más espacio entre cards
          sx={{
            mt: 2,
            pb: 4,                   // 🔑 padding-bottom extra para evitar que el último card quede pegado
          }}
        >
          {filtered.map((movie) => (
            <Grid
              item
              key={movie.id}
              xs={12} sm={6} md={4} lg={3} xl={2} // 🔑 Responsive más limpio
            >
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>

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
