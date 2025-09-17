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
      <Container sx={{ mt: 6 }}>
        <Typography variant="h6">Película no encontrada.</Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={{ mt: 2 }}
          aria-label="Volver al inicio"
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
        aria-label="Volver al inicio"
      >
        Volver
      </Button>
      <Box
        className="detail-grid"
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '340px 1fr' },
          gap: 3,
          alignItems: 'start',
          mt: 2
        }}
      >
        <motion.img
          src={movie.posterUrl}
          alt={movie.title}
          style={{
            width: '100%',
            borderRadius: '12px',
            boxShadow: '0 8px 30px rgba(0,0,0,0.25)'
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3 }}
        />
        <Box>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 700 }}>
            {movie.title}{' '}
            <Typography component="span" sx={{ opacity: 0.7, fontWeight: 400 }}>
              ({movie.year})
            </Typography>
          </Typography>
          <Box sx={{ mt: 1, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {movie.genres.map((g) => (
              <Chip key={g} label={g} variant="outlined" />
            ))}
          </Box>
          <Typography sx={{ mt: 2, mb: 2, color: 'text.secondary' }}>
            {movie.overview}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Rating value={movie.rating / 2} precision={0.1} readOnly />
            <Typography sx={{ fontWeight: 700 }}>
              {movie.rating.toFixed(1)} / 10
            </Typography>
          </Box>
          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" sx={{ opacity: 0.9 }}>
              Detalles
            </Typography>
            <Typography variant="body2" sx={{ mt: 1 }}>
              <strong>Año:</strong> {movie.year}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}
