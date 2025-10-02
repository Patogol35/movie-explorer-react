export const styles = {
  link: {
    textDecoration: "none",
    color: "inherit",
  },
  card: {
    width: "100%",
    maxWidth: 260,
    minHeight: 420,          // 🔥 asegura altura mínima uniforme
    display: "flex",         // 🔥 usa flexbox
    flexDirection: "column", // 🔥 organiza contenido en columna
    borderRadius: 5,
    overflow: "hidden",
    bgcolor: "rgba(255,255,255,0.1)", // efecto glass
    backdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.2)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
    transition: "transform 0.4s ease, box-shadow 0.4s ease",
    "&:hover": {
      transform: "translateY(-8px) rotate3d(1,1,0,6deg) scale(1.05)",
      boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
    },
  },
  mediaBox: {
    position: "relative",
    overflow: "hidden",
  },
  media: {
    height: 300,
    objectFit: "cover",
    transition: "transform 0.5s ease, filter 0.5s ease",
    filter: "brightness(0.95) contrast(1.05)",
    "&:hover": {
      transform: "scale(1.12) rotate(1deg)",
      filter: "brightness(1)",
    },
  },
  ratingBox: {
    position: "absolute",
    bottom: 12,
    right: 12,
    bgcolor: "rgba(0,0,0,0.55)",
    backdropFilter: "blur(6px)",
    px: 1.4,
    py: 0.5,
    borderRadius: 3,
    display: "flex",
    alignItems: "center",
    gap: 0.5,
    color: "#FFD700",
    fontWeight: 700,
    fontSize: "0.9rem",
    animation: "fadeIn 0.6s ease",
  },
  content: {
    p: 2,
    flexGrow: 1, // 🔥 se estira para rellenar el espacio
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontWeight: 800,
    fontSize: "1.05rem",
    letterSpacing: "0.4px",
    display: "-webkit-box",
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    lineHeight: 1.5,
  },
  genresBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: 0.6,
    mt: 1.3,
  },
  "@keyframes fadeIn": {
    from: { opacity: 0, transform: "scale(0.9)" },
    to: { opacity: 1, transform: "scale(1)" },
  },
};
