import React from 'react'
import { Card, CardMedia, CardContent, Typography, Chip, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
export default function MovieCard({ movie }) {
  if (!movie) return null
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', cursor: 'pointer', transition: 'transform 0.2s', '&:hover': { transform: 'scale(1.05)' } }}>
        <CardMedia component="img" image={movie.posterUrl} alt={movie.title} sx={{ aspectRatio: '2/3', objectFit: 'cover' }} />
        <CardContent>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            {movie.title} <Typography component="span" sx={{ opacity: 0.7 }}>
              ({movie.year})
            </Typography>
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 1 }}>
            <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap' }}>
              {movie.genres.map(g => (
                <Chip key={g} label={g} size="small" />
              ))}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, fontWeight: 600 }}>
              <StarIcon fontSize="small" /> {movie.rating.toFixed(1)}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  )
}