import React from 'react'
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'

export default function MovieCard({ movie }) {
  if (!movie) return null

  const genreColors = {
    Action: 'error',
    Drama: 'secondary',
    Romance: 'pink',
    'Sci-Fi': 'info',
    Adventure: 'success',
    Animation: 'warning',
    Horror: 'error',
    Fantasy: 'purple',
    Anime: 'primary',
    Thriller: 'default',
  }

  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <motion.div whileHover={{ scale: 1.06 }} transition={{ duration: 0.3 }}>
        <Card
          sx={{
            width: '100%',
            height: 380,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 6px 18px rgba(0,0,0,0.2)',
            transition: 'all 0.3s ease',
            '&:hover': { boxShadow: '0 12px 24px rgba(0,0,0,0.25)' }
          }}
        >
          <CardMedia
            component="img"
            image={movie.posterUrl}
            alt={movie.title}
            sx={{
              width: '100%',
              height: 300,
              objectFit: 'cover',
              transition: '0.3s',
              '&:hover': { filter: 'brightness(0.85)' }
            }}
            loading="lazy"
          />
          <CardContent sx={{ flexGrow: 1, p: 1.5 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                lineHeight: 1.2,
                display: '-webkit-box',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                overflow: 'hidden'
              }}
            >
              {movie.title}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, fontSize: '0.8rem', mb: 1 }}>
              {movie.year}
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', maxWidth: 130 }}>
                {movie.genres.map((g) => (
                  <Chip key={g} label={g} size="small" color={genreColors[g] || 'default'} sx={{ fontSize: '0.7rem', height: 22 }} />
                ))}
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 0.5,
                  fontWeight: 700,
                  bgcolor: 'rgba(255,215,0,0.15)',
                  px: 1,
                  py: 0.3,
                  borderRadius: 2
                }}
              >
                <StarIcon fontSize="small" color="warning" /> {movie.rating.toFixed(1)}
              </Box>
            </Box>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
