export const styles = {
  notFoundContainer: {
    mt: 6,
    textAlign: "center",
    pb: 6,
  },
  notFoundButton: {
    mt: 3,
  },
  root: (posterUrl) => ({
    position: "relative",
    minHeight: "100vh",
    pb: { xs: 6, md: 8 },
    background: `linear-gradient(to bottom, rgba(15,15,15,0.85) 0%, rgba(15,15,15,0.95) 100%), 
                 url(${posterUrl}) center/cover no-repeat`,
  }),
  container: {
    pt: { xs: 3, sm: 4, md: 6 },
  },
  backButton: {
    mb: 4,
    color: "white",
    borderColor: "white",
    "&:hover": { borderColor: "#fbc02d", color: "#fbc02d" },
  },
  contentGrid: {
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "340px 1fr" },
    gap: { xs: 4, md: 6 },
    alignItems: "start",
  },
  poster: {
    width: "100%",
    borderRadius: 20,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
    maxHeight: 560,
    objectFit: "cover",
  },
  infoBox: {
    color: "white",
  },
  title: {
    fontWeight: 700,
    mb: 1,
    textShadow: "0 4px 12px rgba(0,0,0,0.5)",
  },
  year: {
    opacity: 0.7,
    fontWeight: 400,
  },
  genresBox: {
    mt: 1.5,
    display: "flex",
    flexWrap: "wrap",
    gap: 1.2,
  },
  chip: {
    bgcolor: "rgba(255,255,255,0.1)",
    color: "#fbc02d",
    border: "1px solid rgba(255,255,255,0.2)",
  },
  description: {
    mt: 3,
    mb: 3,
    lineHeight: 1.7,
    color: "rgba(255,255,255,0.85)",
    textShadow: "0 2px 6px rgba(0,0,0,0.4)",
  },
  ratingBox: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  ratingStars: {
    color: "#fbc02d",
  },
  ratingText: {
    fontWeight: 700,
    color: "#fbc02d",
  },
  detailsBox: {
    mt: 4,
    color: "rgba(255,255,255,0.85)",
  },
  detailsTitle: {
    mb: 1,
  },
};
