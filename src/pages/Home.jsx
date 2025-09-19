import { useState, useMemo } from "react";
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
import { useTheme } from "@mui/material/styles";
import MovieCard from "../components/MovieCard";

export default function Home({ mode, toggleMode, movies, genres }) {
  const theme = useTheme();
  const [query, setQuery] = useState("");
  const [genre, setGenre] = useState("");

  // 🔎 Filtrado optimizado
  const filtered = useMemo(() => {
    return movies.filter((m) => {
      const matchesQuery = m.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre = genre ? m.genres.includes(genre) : true;
      return matchesQuery && matchesGenre;
    });
  }, [movies, query, genre]);

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      {/* 🔹 AppBar */}
      <AppBar position="sticky" color="default" sx={{ bgcolor: "background.default" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            gap: 2,
          }}
        >
          {/* Título */}
          <Box sx={{ flexGrow: 1 }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              🎬 Movie Explorer
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{ fontWeight: 700, color: "primary.main" }}
            >
              Autor: Jorge Patricio Santamaría Cherrez
            </Typography>
          </Box>

          {/* Buscador */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "background.paper",
              borderRadius: 2,
              px: 1,
              flex: 1,
              maxWidth: 400,
            }}
          >
            <SearchIcon sx={{ color: "text.secondary", mr: 1 }} />
            <InputBase
              placeholder="Buscar película…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              sx={{ flex: 1 }}
            />
          </Box>

          {/* Selector de género */}
          <FormControl
            variant="outlined"
            size="small"
            sx={{ minWidth: 150, bgcolor: "background.paper", borderRadius: 2 }}
          >
            <Select
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              displayEmpty
            >
              <MenuItem value="">
                <em>Todos los géneros</em>
              </MenuItem>
              {genres.map((g) => (
                <MenuItem key={g} value={g}>
                  {g}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Botón de modo claro/oscuro */}
          <IconButton onClick={toggleMode} color="inherit" aria-label="Cambiar tema">
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* 🔹 Contenido principal */}
      <Box p={3}>
        {filtered.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              mt: 5,
              color: "text.secondary",
            }}
          >
            <Typography variant="h6">
              No se encontraron resultados 😢
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filtered.map((movie) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard movie={movie} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
}
