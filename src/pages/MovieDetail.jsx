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
      <Container sx={{ mt: 6, textAlign: 'center', pb: 6 }}>
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
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        pb: 6,
        background: `linear-gradient(rgba(20,20,20,0.95), rgba(20,20,20,0.95)), url(${movie.posterUrl}) center/cover no-repeat`,
      }}
    >
      <Container sx={{ pt: 4 }}>
        {/* Botón volver */}
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

        {/* Grid principal */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '360px 1fr' },
            gap: 4,
            alignItems: 'start',
          }}
        >
          {/* Poster con shadow y animación */}
          <motion.img
            src={movie.posterUrl}
            alt={movie.title}
            style={{
              width: '100%',
              borderRadius: 16,
              boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
              maxHeight: 550,
              objectFit: 'cover'
            }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />

          {/* Información */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Título */}
            <Typography variant="h3" sx={{ fontWeight: 700, color: '#fff' }}>
              {movie.title}{' '}
              <Typography component="span" sx={{ opacity: 0.7, fontWeight: 400 }}>
                ({movie.year})
              </Typography>
            </Typography>

            {/* Géneros animados */}
            <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {movie.genres.map((g, i) => (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Chip key={g} label={g} color="secondary" />
                </motion.div>
              ))}
            </Box>

            {/* Overview */}
            <Typography sx={{ mt: 3, mb: 2, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
              {movie.overview}
            </Typography>

            {/* Rating animado */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 1 }}>
                <Rating value={movie.rating / 2} precision={0.1} readOnly sx={{ color: '#fbc02d' }} />
                <Typography sx={{ fontWeight: 700, color: '#fbc02d' }}>
                  {movie.rating.toFixed(1)} / 10
                </Typography>
              </Box>
            </motion.div>

            {/* Detalles extra animados */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Box sx={{ mt: 4, color: 'rgba(255,255,255,0.85)' }}>
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
          </motion.div>
        </Box>
      </Container>
    </Box>
  )
}
