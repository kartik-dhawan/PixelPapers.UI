export const styles = {
  blogsNavDivider: { borderColor: "#222", margin: "8px 0px", opacity: 0.5 },
  blogsSideNavWrapper: { top: 32, margin: "0rem 1rem 0rem 2rem" },
  blogsSideNavTitle: {
    fontWeight: 700,
    textTransform: "uppercase",
    fontSize: {
      xs: "18px",
      xl: "22px",
    },
  },
  blogNavList: {
    display: "flex",
    flexDirection: "column",
    gap: {
      xs: "8px",
      xl: "12px",
    },
  },
  blogNavListItem: {
    "& a": {
      fontWeight: 500,
      color: "#222",
      textDecoration: "none",
      width: "100%",
      height: "100%",
      padding: "8px 16px",
      fontSize: {
        xs: "16px",
        xl: "20px",
      },
    },
    padding: 0,
    borderRadius: "4px",
  },
}
