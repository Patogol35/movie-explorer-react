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
import { styled } from '@mui/material/styles'
import CloseIcon from '@mui/icons-material/Close'
import SearchIcon from '@mui/icons-material/Search'

// 🔹 Botón limpiar reutilizable
const ClearButton = styled(IconButton)(({ theme }) => ({
  background: 'transparent',
  color: '#1e88e5',
  padding: 0,
  width: 'auto',
  height: 'auto',
  minWidth: 'auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  transition: 'all 0.3s',
  '&:hover': {
    background: 'rgba(30,136,229,0.1)',
  },
}))

// 🔹 Input estilizado
const SearchInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    bgcolor: 'background.paper',
    borderRadius: 8,
    transition: 'all 0.3s',
    '&:focus-within': {
      boxShadow: '0 0 8px rgba(255,255,0,0.5)',
      borderColor: '#fbc02d'
    }
  }
}))

// 🔹 Select estilizado
const GenreSelect = styled(Select)(({ theme }) => ({
  bgcolor: 'background.paper',
  borderRadius: 8,
  transition: 'all 0.3s',
  '&:focus-within': {
    boxShadow: '0 0 8px rgba(255,255,0,0.5)',
    borderColor: '#fbc02d'
  }
}))

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
          )
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
            <MenuItem key={g} value={g}>{g}</MenuItem>
          ))}
        </GenreSelect>
      </FormControl>

      {/* 🔹 Botón limpiar */}
      {(query || genre) && <ClearButton onClick={clear} aria-label="Limpiar filtros">
        <CloseIcon fontSize="small" />
      </ClearButton>}
    </Box>
  )
}
