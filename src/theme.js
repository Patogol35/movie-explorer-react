import { createTheme } from '@mui/material/styles'

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#1e88e5' },
      background: { default: mode === 'light' ? '#fafafa' : '#121212' }
    },
    shape: { borderRadius: 12 },
    components: {
      MuiCard: {
        styleOverrides: {
          root: { borderRadius: 12 }
        }
      }
    }
  })
