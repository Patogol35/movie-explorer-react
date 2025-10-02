export const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    width: "100%",
    maxWidth: 250,
    height: 420, // 🔹 altura fija uniforme (ajústala según necesites)
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between", // reparte espacio entre media y contenido
    borderRadius: 3,
    overflow: "hidden",
    bgcolor: "background.paper",
    boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
    transition: "transform 0.25s ease, box-shadow 0.25s ease",
    "&:hover": {
      transform: "translateY(-6px) scale(1.04)",
      boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
    },
  },
  mediaBox: {
    position: "relative",
    flexShrink: 0,
  },
  media: {
    height: 250, // 🔹 altura consistente de las imágenes
    objectFit: "cover",
    filter: "brightness(0.9)",
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
    flexGrow: 1, // 🔹 asegura que el contenido llene el espacio disponible
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
