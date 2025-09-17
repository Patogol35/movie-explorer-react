import React from 'react'
import { TextField, FormControl, InputLabel, Select, MenuItem, IconButton, Box } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

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
        gridTemplateColumns: {
          xs: '1fr',
          sm: '1fr 200px auto'
        },
        gap: 1
      }}
    >
      <TextField
        label="Buscar película"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Ej: Titanic"
        fullWidth
      />
      <FormControl>
        <InputLabel>Género</InputLabel>
        <Select
          value={genre}
          label="Género"
          onChange={(e) => setGenre(e.target.value)}
          sx={{ minWidth: 160 }}
        >
          <MenuItem value="">Todos</MenuItem>
          {genres.map((g) => (
            <MenuItem key={g} value={g}>
              {g}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <IconButton onClick={clear} aria-label="Limpiar filtros">
        <CloseIcon />
      </IconButton>
    </Box>
  )
}
