export const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    width: "250px",     // ancho fijo
    minWidth: "250px",
    maxWidth: "250px",
    height: "420px",    // alto fijo de la card
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
    width: "100%",
    height: "250px",       // altura fija del contenedor de la imagen
    overflow: "hidden",
    borderRadius: "3px 3px 0 0",
    bgcolor: "#000",       // barras negras si la imagen no llena todo el espacio
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    width: "100%",         // ocupa todo el ancho
    height: "100%",        // ocupa toda la altura del contenedor
    objectFit: "contain",  // 🔹 muestra la imagen completa
    backgroundColor: "#000",
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
