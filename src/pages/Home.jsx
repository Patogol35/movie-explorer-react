import React, { useEffect, useState, useMemo } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Box,
  FormControl,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MovieCard from "../components/MovieCard";
import { getMovies, getAllGenres } from "../services/movies";
import { styles } from "../styles/homeStyles"; // ⬅️ Importamos estilos

export default function Home({ mode, toggleMode }) {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  useEffect(() => {
    setMovies(getMovies());
    setGenres(getAllGenres());
  }, []);

  const filtered = useMemo(() => {
    return movies.filter((m) => {
      const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre = genre ? m.genres.includes(genre) : true;
      return matchesQuery && matchesGenre;
    });
  }, [movies, query, genre]);

  return (
    <Box sx={styles.root}>
      {/* 🔹 AppBar */}
      <AppBar position="sticky" sx={styles.appBar}>
        <Toolbar sx={styles.toolbar}>
          {/* Título */}
          <Box>
            <Typography variant="h6" sx={styles.title}>
              🎬 Movie Explorer
            </Typography>
            <Typography variant="subtitle1" sx={styles.subtitle}>
              Autor: Jorge Patricio Santamaría Cherrez
            </Typography>
          </Box>

          {/* Buscador */}
          <Box sx={styles.searchBox}>
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase
              placeholder="Buscar película…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={styles.searchInput}
            />
          </Box>

          {/* Selector de género */}
          <FormControl size="small" sx={styles.genreSelect}>
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Todos</em>
              </MenuItem>
              {genres.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Botón modo oscuro/claro */}
          <IconButton onClick={toggleMode} color="inherit">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Contenido principal */}
      <Box p={3}>
        {filtered.length === 0 ? (
          <Box sx={styles.noResults}>No se encontraron resultados.</Box>
        ) : (
          <Grid container spacing={3} justifyContent="center" sx={styles.movieGrid}>
            {filtered.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
