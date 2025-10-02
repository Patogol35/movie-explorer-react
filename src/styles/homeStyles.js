export const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    bgcolor: "#141414",
  },
  toolbar: {
    flexDirection: { xs: "column", sm: "row" },
    alignItems: { xs: "flex-start", sm: "center" },
    justifyContent: "space-between",
    gap: 1,
  },
  title: {
    fontWeight: 700,
  },
  subtitle: {
    fontWeight: 700,
    color: "#1e88e5",
  },
  searchBox: {
    display: "flex",
    alignItems: "center",
    bgcolor: "background.paper",
    borderRadius: 2,
    px: 1,
    flex: 1,
    maxWidth: 400,
  },
  searchInput: {
    flex: 1,
  },
  genreSelect: {
    minWidth: 150,
    bgcolor: "background.paper",
    borderRadius: 2,
  },
  noResults: {
    textAlign: "center",
    mt: 5,
    color: "#1e88e5",
    fontWeight: 600,
  },
  movieGrid: {
    mt: 2,
    pb: 4,
  },
};
