import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { getById } from '../services/movies'
import { Container, Button, Typography, Box, Chip, Rating } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { motion } from 'framer-motion'

export default function MovieDetail() {
  const { id } = useParams()
  const movie = getById(Number(id))

  if (!movie) {
    return (
      <Container sx={{ mt: 6, textAlign: 'center' }}>
        <Typography variant="h6">Película no encontrada.</Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 3 }}
          variant="contained"
          color="primary"
        >
          Ir al inicio
        </Button>
      </Container>
    )
  }

  return (
    <Container sx={{ mt: 4, mb: 6 }}>
      <Button
        component={Link}
        to="/"
        startIcon={<ArrowBackIcon />}
        sx={{ mb: 3 }}
        variant="outlined"
        color="primary"
      >
        Volver
      </Button>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
          gap: 4,
          alignItems: 'start'
        }}
      >
        {/* Poster con animación */}
        <motion.img
          src={movie.posterUrl}
          alt={movie.title}
          style={{
            width: '100%',
            borderRadius: 12,
            boxShadow: '0 12px 35px rgba(0,0,0,0.25)',
            maxHeight: 500,
            objectFit: 'cover'
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />

        {/* Información */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            {movie.title}{' '}
            <Typography component="span" sx={{ opacity: 0.7, fontWeight: 400 }}>
              ({movie.year})
            </Typography>
          </Typography>

          {/* Géneros */}
          <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {movie.genres.map((g) => (
              <Chip key={g} label={g} variant="outlined" color="primary" />
            ))}
          </Box>

          {/* Overview */}
          <Typography sx={{ mt: 3, mb: 2, color: 'text.secondary', lineHeight: 1.6 }}>
            {movie.overview}
          </Typography>

          {/* Rating */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
            <Rating value={movie.rating / 2} precision={0.1} readOnly />
            <Typography sx={{ fontWeight: 700, color: '#fbc02d' }}>
              {movie.rating.toFixed(1)} / 10
            </Typography>
          </Box>

          {/* Detalles extra */}
          <Box sx={{ mt: 4 }}>
            <Typography variant="subtitle2" sx={{ opacity: 0.9, mb: 1 }}>
              Detalles
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <strong>Año:</strong> {movie.year}
            </Typography>
            <Typography variant="body2" sx={{ mb: 0.5 }}>
              <strong>Géneros:</strong> {movie.genres.join(', ')}
            </Typography>
            <Typography variant="body2">
              <strong>Rating:</strong> {movie.rating.toFixed(1)} / 10
            </Typography>
          </Box>
        </motion.div>
      </Box>
    </Container>
  )
}
