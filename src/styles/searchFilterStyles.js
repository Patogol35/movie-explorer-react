import { styled } from "@mui/material/styles";
import { IconButton, TextField, Select } from "@mui/material";

// 🔹 Botón limpiar reutilizable
export const ClearButton = styled(IconButton)(({ theme }) => ({
  background: "transparent",
  color: "#1e88e5",
  padding: 0,
  width: "auto",
  height: "auto",
  minWidth: "auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50%",
  transition: "all 0.3s",
  "&:hover": {
    background: "rgba(30,136,229,0.1)",
  },
}));

// 🔹 Input estilizado
export const SearchInput = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    bgcolor: "background.paper",
    borderRadius: 8,
    transition: "all 0.3s",
    "&:focus-within": {
      boxShadow: "0 0 8px rgba(255,255,0,0.5)",
      borderColor: "#fbc02d",
    },
  },
}));

// 🔹 Select estilizado
export const GenreSelect = styled(Select)(({ theme }) => ({
  bgcolor: "background.paper",
  borderRadius: 8,
  transition: "all 0.3s",
  "&:focus-within": {
    boxShadow: "0 0 8px rgba(255,255,0,0.5)",
    borderColor: "#fbc02d",
  },
}));

// 🔹 Layout principal
export const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", sm: "1fr 200px auto" },
    gap: 1,
    alignItems: "center",
    mb: 3,
  },
};

