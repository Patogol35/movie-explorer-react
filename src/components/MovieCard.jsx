import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { motion } from "framer-motion";
import { styles } from "../styles/movieCardStyles";

export default function MovieCard({ movie }) {
  if (!movie) return null;

  return (
    <Link to={`/movie/${movie.id}`} style={styles.link}>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        transition={{ duration: 0.25 }}
      >
        <Card sx={styles.card} elevation={4}>
          {/* Imagen con overlay y rating */}
          <Box sx={styles.mediaBox}>
            <CardMedia
              component="img"
              image={movie.posterUrl}
              alt={movie.title}
              sx={styles.media}
              loading="lazy"
            />

            {/* Rating flotante */}
            <Box sx={styles.ratingBox}>
              <StarIcon fontSize="small" /> {movie.rating.toFixed(1)}
            </Box>
          </Box>

          {/* Título y géneros */}
          <CardContent sx={styles.content}>
            <Typography variant="subtitle1" sx={styles.title}>
              {movie.title} ({movie.year})
            </Typography>

            <Box sx={styles.genresBox}>
              {movie.genres.slice(0, 2).map((g) => (
                <Chip
                  key={g}
                  label={g}
                  size="small"
                  variant="outlined"
                  color="primary"
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
  );
}
