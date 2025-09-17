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
        pb: 8,
        // Fondo con overlay oscuro
        background: `linear-gradient(to bottom, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.95) 100%), 
                     url(${movie.posterUrl}) center/cover no-repeat`,
      }}
    >
      <Container sx={{ pt: { xs: 3, md: 6 } }}>
        {/* Botón volver */}
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{
            mb: 4,
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: '#fbc02d', color: '#fbc02d' }
          }}
          variant="outlined"
        >
          Volver
        </Button>

        {/* Contenido principal */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
            gap: { xs: 4, md: 6 },
            alignItems: 'center'
          }}
        >
          {/* Poster con animación */}
          <motion.img
            src={movie.posterUrl}
            alt={movie.title}
            style={{
              width: '100%',
              borderRadius: 20,
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
              maxHeight: 560,
              objectFit: 'cover'
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Info */}
          <Box sx={{ color: 'white' }}>
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  textShadow: '0 4px 12px rgba(0,0,0,0.5)'
                }}
              >
                {movie.title}{' '}
                <Typography component="span" sx={{ opacity: 0.7, fontWeight: 400 }}>
                  ({movie.year})
                </Typography>
              </Typography>
            </motion.div>

            {/* Géneros animados */}
            <Box sx={{ mt: 1.5, display: 'flex', flexWrap: 'wrap', gap: 1.2 }}>
              {movie.genres.map((g, i) => (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Chip
                    label={g}
                    sx={{
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: '#fbc02d',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}
                  />
                </motion.div>
              ))}
            </Box>

            {/* Descripción */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Typography
                sx={{
                  mt: 3,
                  mb: 3,
                  lineHeight: 1.7,
                  color: 'rgba(255,255,255,0.85)',
                  textShadow: '0 2px 6px rgba(0,0,0,0.4)'
                }}
              >
                {movie.overview}
              </Typography>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Rating
                  value={movie.rating / 2}
                  precision={0.1}
                  readOnly
                  sx={{ color: '#fbc02d' }}
                />
                <Typography sx={{ fontWeight: 700, color: '#fbc02d' }}>
                  {movie.rating.toFixed(1)} / 10
                </Typography>
              </Box>
            </motion.div>

            {/* Detalles extra */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Box sx={{ mt: 4, color: 'rgba(255,255,255,0.85)' }}>
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  Detalles
                </Typography>
                <Typography variant="body2">
                  <strong>Año:</strong> {movie.year}
                </Typography>
                <Typography variant="body2">
                  <strong>Géneros:</strong> {movie.genres.join(', ')}
                </Typography>
                <Typography variant="body2">
                  <strong>Rating:</strong> {movie.rating.toFixed(1)} / 10
                </Typography>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  )
                      }
