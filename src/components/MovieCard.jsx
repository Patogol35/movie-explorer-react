import React from 'react'
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'

export default function MovieCard({ movie }) {
  if (!movie) return null
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }}>
        <Card
          sx={{
            width: 220, // tamaño fijo
            height: 360, // alto fijo
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            borderRadius: 2,
            boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
            overflow: 'hidden'
          }}
          elevation={3}
        >
          <CardMedia
            component="img"
            image={movie.posterUrl}
            alt={movie.title}
            sx={{
              width: '100%',
              height: 280, // fija altura de la imagen
              objectFit: 'cover'
            }}
            loading="lazy"
          />
          <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }} noWrap>
              {movie.title}{' '}
              <Typography component="span" sx={{ opacity: 0.7 }}>
                ({movie.year})
              </Typography>
            </Typography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mt: 1
              }}
            >
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
                {movie.genres.map((g) => (
                  <Chip key={g} label={g} size="small" />
                ))}
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}>
                <StarIcon fontSize="small" /> {movie.rating.toFixed(1)}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
