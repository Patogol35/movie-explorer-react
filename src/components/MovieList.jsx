import React from 'react'
import { Grid, Typography, Box } from '@mui/material'
import MovieCard from './MovieCard'
import { getMovies } from './movies'

export default function MovieList() {
  const movies = getMovies()

  return (
    <Box sx={{ px: { xs: 2, sm: 4 }, py: 4 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: 700, mb: 3, textAlign: 'center', color: 'primary.main' }}
      >
        🎬 Películas Populares
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {movies.map((movie) => (
          <Grid item key={movie.id} xs={12} sm={6} md={4} lg={3}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
