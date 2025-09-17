import React from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  Box,
  InputAdornment
} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

export default function SearchFilter({ genres = [], onChange }) {
  const [query, setQuery] = React.useState('')
  const [genre, setGenre] = React.useState('')

  React.useEffect(() => {
    onChange?.({ query: query.trim(), genre })
  }, [query, genre])

  function clear() {
    setQuery('')
    setGenre('')
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: '1fr 200px auto' },
        gap: 1,
        alignItems: 'center',
        mb: 3
      }}
    >
      {/* 🔹 Input con icono de búsqueda */}
      <TextField
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
          )
        }}
        sx={{
          '& .MuiInputBase-root': {
            bgcolor: 'background.paper',
            borderRadius: 1,
            transition: 'all 0.3s',
            '&:focus-within': {
              boxShadow: '0 0 8px rgba(255,255,0,0.5)',
              borderColor: '#fbc02d'
            }
          }
        }}
      />

      {/* 🔹 Filtro por género */}
      <FormControl size="small" sx={{ minWidth: 160 }}>
        <InputLabel>Género</InputLabel>
        <Select
          value={genre}
          label="Género"
          onChange={(e) => setGenre(e.target.value)}
          sx={{
            bgcolor: 'background.paper',
            borderRadius: 1,
            transition: 'all 0.3s',
            '&:focus-within': {
              boxShadow: '0 0 8px rgba(255,255,0,0.5)',
              borderColor: '#fbc02d'
            }
          }}
        >
          <MenuItem value="">Todos</MenuItem>
          {genres.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* 🔹 Botón limpiar animado */}
      {(query || genre) && (
        <IconButton
          onClick={clear}
          aria-label="Limpiar filtros"
          sx={{
            bgcolor: '#fbc02d',
            color: '#000',
            transition: 'all 0.3s',
            '&:hover': {
              bgcolor: '#ffd54f'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      )}
    </Box>
  )
}
