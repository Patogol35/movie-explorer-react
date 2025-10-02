import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

import {
  ClearButton,
  SearchInput,
  GenreSelect,
  styles,
} from "../styles/searchFilterStyles";

export default function SearchFilter({ genres = [], onChange }) {
  const [query, setQuery] = React.useState("");
  const [genre, setGenre] = React.useState("");

  React.useEffect(() => {
    onChange?.({ query: query.trim(), genre });
  }, [query, genre]);

  function clear() {
    setQuery("");
    setGenre("");
  }

  return (
    <Box sx={styles.container}>
      {/* 🔹 Input con icono de búsqueda */}
      <SearchInput
        label="Buscar película"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ej: Titanic"
        fullWidth
        size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        }}
      />

      {/* 🔹 Filtro por género */}
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Género</InputLabel>
        <GenreSelect
          value={genre}
          label="Género"
          onChange={(e) => setGenre(e.target.value)}
        >
          <MenuItem value="">Todos</MenuItem>
          {genres.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </GenreSelect>
      </FormControl>

      {/* 🔹 Botón limpiar */}
      {(query || genre) && (
        <ClearButton onClick={clear} aria-label="Limpiar filtros">
          <CloseIcon fontSize="small" />
        </ClearButton>
      )}
    </Box>
  );
}
