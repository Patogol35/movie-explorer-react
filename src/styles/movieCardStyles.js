export const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    width: "250px",     // ancho fijo
    minWidth: "250px",  // evita que se encoja
    maxWidth: "250px",  // evita que se expanda
    height: "420px",    // alto fijo
    borderRadius: 3,
    overflow: "hidden",
    bgcolor: "background.paper",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    display: "flex",
    flexDirection: "column",
    "&:hover": {
      transform: "translateY(-6px) scale(1.04)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    },
  },
  mediaBox: {
    position: "relative",
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "#000", // fondo negro para que no se vean espacios
  },
  media: {
    height: "250px",        // altura fija de la imagen
    width: "100%",          // ocupa todo el ancho del card
    objectFit: "contain",   // 🔹 muestra toda la imagen completa
    filter: "brightness(0.95)",
  },
  ratingBox: {
    position: "absolute",
    bottom: 8,
    right: 8,
    bgcolor: "rgba(0,0,0,0.7)",
    px: 1,
    py: 0.3,
    borderRadius: 2,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: "gold",
    fontWeight: 600,
    fontSize: "0.85rem",
  },
  content: {
    p: 1.5,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 700,
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
  },
  genresBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.5,
    mt: 1,
  },
};
