import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getById } from "../services/movies";
import { Container, Button, Typography, Box, Chip, Rating } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import { styles } from "../styles/movieDetailStyles";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = getById(Number(id));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!movie) {
    return (
      <Container sx={styles.notFoundContainer}>
        <Typography variant="h6">Película no encontrada.</Typography>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={styles.notFoundButton}
          variant="contained"
        >
          Ir al inicio
        </Button>
      </Container>
    );
  }

  return (
    <Box sx={styles.root(movie.posterUrl)}>
      <Container sx={styles.container}>
        {/* Botón volver */}
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBackIcon />}
          sx={styles.backButton}
          variant="outlined"
        >
          Volver
        </Button>

        {/* Contenido principal */}
        <Box sx={styles.contentGrid}>
          {/* Poster */}
          <motion.img
            src={movie.posterUrl}
            alt={movie.title}
            style={styles.poster}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Info */}
          <Box sx={styles.infoBox}>
            {/* Título */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Typography variant="h3" sx={styles.title}>
                {movie.title}{" "}
                <Typography component="span" sx={styles.year}>
                  ({movie.year})
                </Typography>
              </Typography>
            </motion.div>

            {/* Géneros */}
            <Box sx={styles.genresBox}>
              {movie.genres.map((g, i) => (
                <motion.div
                  key={g}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Chip label={g} sx={styles.chip} />
                </motion.div>
              ))}
            </Box>

            {/* Descripción */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              <Typography sx={styles.description}>{movie.overview}</Typography>
            </motion.div>

            {/* Rating */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Box sx={styles.ratingBox}>
                <Rating
                  value={movie.rating / 2}
                  precision={0.1}
                  readOnly
                  sx={styles.ratingStars}
                />
                <Typography sx={styles.ratingText}>
                  {movie.rating.toFixed(1)} / 10
                </Typography>
              </Box>
            </motion.div>

            {/* Detalles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Box sx={styles.detailsBox}>
                <Typography variant="subtitle2" sx={styles.detailsTitle}>
                  Detalles
                </Typography>
                <Typography variant="body2">
                  <strong>Año:</strong> {movie.year}
                </Typography>
                <Typography variant="body2">
                  <strong>Géneros:</strong> {movie.genres.join(", ")}
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
  );
}
