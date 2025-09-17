import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box
} from '@mui/material'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'

export default function MovieCard({ movie }) {
  if (!movie) return null

  return (
    <Link
      to={`/movie/${movie.id}`}
      style={{ textDecoration: 'none', color: 'inherit' }}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25 }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 250,
            borderRadius: 3,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            boxShadow: (theme) =>
              theme.palette.mode === 'dark'
                ? '0 10px 30px rgba(30,136,229,0.25)'
                : '0 10px 25px rgba(0,0,0,0.25)',
            transition: 'transform 0.25s ease, box-shadow 0.25s ease',
            '&:hover': {
              transform: 'translateY(-6px) scale(1.03)',
              boxShadow: (theme) =>
                theme.palette.mode === 'dark'
                  ? '0 16px 35px rgba(30,136,229,0.35)'
                  : '0 16px 35px rgba(0,0,0,0.35)'
            }
          }}
        >
          <Box sx={{ position: 'relative' }}>
            {/* Imagen con efecto parallax */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.4 }}
            >
              <CardMedia
                component="img"
                image={movie.posterUrl}
                alt={movie.title}
                sx={{
                  height: 300,
                  objectFit: 'cover',
                  filter: 'brightness(0.9)'
                }}
                loading="lazy"
              />
            </motion.div>

            {/* Badge TOP si rating >= 8.5 */}
            {movie.rating >= 8.5 && (
              <Chip
                label="TOP"
                size="small"
                color="secondary"
                sx={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontWeight: 700
                }}
              />
            )}

            {/* Rating flotante */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 8,
                right: 8,
                bgcolor: 'rgba(0,0,0,0.7)',
                px: 1,
                py: 0.3,
                borderRadius: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                color: 'gold',
                fontWeight: 600,
                fontSize: '0.85rem'
              }}
            >
              <StarIcon fontSize="small" /> {movie.rating.toFixed(1)}
            </Box>
          </Box>

          {/* Título y géneros */}
          <CardContent sx={{ p: 1.5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden'
              }}
            >
              {movie.title} ({movie.year})
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 0.5,
                mt: 1
              }}
            >
              {movie.genres.slice(0, 2).map((g) => (
                <Chip
                  key={g}
                  label={g}
                  size="small"
                  variant="outlined"
                  color="primary"
                  sx={{
                    '&:hover': {
                      bgcolor: 'primary.main',
                      color: '#fff'
                    }
                  }}
                />
              ))}
              {movie.genres.length > 2 && (
                <Chip
                  label={`+${movie.genres.length - 2}`}
                  size="small"
                  variant="outlined"
                />
              )}
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
