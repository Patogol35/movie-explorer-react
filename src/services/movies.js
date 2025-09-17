
import React from 'react'
import { Box, Card, CardMedia, CardContent, Typography, Chip } from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import { motion } from 'framer-motion'

// Tu data
const _movies = [
  {
    id: 1,
    title: 'Titanic',
    year: 1997,
    genres: ['Romance', 'Drama'],
    posterUrl: 'https://storage.googleapis.com/pod_public/750/266355.jpg',
    overview: 'Un romance florece a bordo del Titanic, el transatlántico condenado.',
    rating: 7.9,
  },
  {
    id: 2,
    title: 'The Matrix',
    year: 1999,
    genres: ['Sci-Fi', 'Action'],
    posterUrl: 'https://storage.googleapis.com/pod_public/800webp/105083.webp',
    overview: 'Neo descubre la verdad detrás de la realidad y lucha contra las máquinas.',
    rating: 8.7,
  },
  {
    id: 3,
    title: 'Inception',
    year: 2010,
    genres: ['Sci-Fi', 'Thriller'],
    posterUrl: 'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
    overview: 'Un ladrón roba secretos a través de los sueños y enfrenta su misión más peligrosa.',
    rating: 8.8,
  },
  // ... agrega las demás películas como en tu array
]

// Componente de cada card
function MovieCard({ movie }) {
  if (!movie) return null
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.25 }}>
      <Card
        sx={{
          width: 220,
          height: 360,
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          borderRadius: 2,
          boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
          overflow: 'hidden',
        }}
      >
        <CardMedia
          component="img"
          image={movie.posterUrl}
          alt={movie.title}
          sx={{ width: '100%', height: 280, objectFit: 'cover' }}
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
              mt: 1,
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
  )
}

// Componente principal con grid responsive
export default function App() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        p: 2,
        gridTemplateColumns: {
          xs: '1fr',        // móvil → 1 card
          sm: 'repeat(2, 1fr)', // tablet → 2 cards
          md: 'repeat(3, 1fr)', // desktop pequeño → 3 cards
          lg: 'repeat(5, 1fr)', // desktop grande → 5 cards
        },
      }}
    >
      {_movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </Box>
  )
                         }
