import { useTheme } from "@mui/material/styles";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCarrito } from "../context/CarritoContext";
import { toast } from "react-toastify";

export default function Home({ mode, toggleMode }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { agregarAlCarrito } = useCarrito();

  const productos = [
    {
      id: 1,
      nombre: "Laptop Gamer",
      descripcion: "Potente laptop para juegos",
      precio: 1200,
      imagen: "https://via.placeholder.com/400x200",
    },
    {
      id: 2,
      nombre: "Smartphone",
      descripcion: "Teléfono inteligente de última generación",
      precio: 800,
      imagen: "https://via.placeholder.com/400x200",
    },
  ];

  const handleDetalle = (producto) => {
    navigate(`/producto/${producto.id}`, { state: { producto } });
  };

  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    toast.success(`${producto.nombre} agregado al carrito`);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 3,
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Lista de Productos
      </Typography>

      <Button
        variant="contained"
        onClick={toggleMode}
        sx={{ mb: 3 }}
      >
        Cambiar a {mode === "light" ? "Dark" : "Light"} Mode
      </Button>

      <Grid container spacing={3}>
        {productos.map((producto) => (
          <Grid item xs={12} sm={6} md={4} key={producto.id}>
            <Card
              sx={{
                bgcolor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={producto.imagen}
                alt={producto.nombre}
              />
              <CardContent>
                <Typography variant="h6">{producto.nombre}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {producto.descripcion}
                </Typography>
                <Typography variant="subtitle1" sx={{ mt: 1 }}>
                  ${producto.precio}
                </Typography>
                <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                  <Button
                    variant="outlined"
                    onClick={() => handleDetalle(producto)}
                  >
                    Ver Detalle
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleAgregar(producto)}
                  >
                    Agregar
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
