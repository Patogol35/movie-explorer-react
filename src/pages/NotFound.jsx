import React from 'react'
import { Container, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <Container sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h3" gutterBottom>
        404
      </Typography>
      <Typography variant="h6" gutterBottom>
        Página no encontrada
      </Typography>
      <Button component={Link} to="/" variant="contained" sx={{ mt: 2 }}>
        Ir al inicio
      </Button>
    </Container>
  )
}
